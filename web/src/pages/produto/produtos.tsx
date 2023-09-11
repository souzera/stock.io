import axios from "axios";
import AvatarBadge from "../../components/avatar/avatar";
import { Sidebar } from "../../components/sidebar/sidebar";
import { useEffect, useState } from "react";
import { Button, Form, Input, InputNumber, Modal, Select, SelectProps, Spin, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { Produto } from "../../types/produto";
import { BiSolidPencil } from "react-icons/bi";
import useUsuarioContext from "../../components/context/usuario-context";
import { IoMdAddCircle } from "react-icons/io";
import { MdDescription } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { Fornecedor } from "../../types/fornecedor";
import { useNavigate } from "react-router-dom";

//todo: usuario context

export default function Produtos() {

    const [produtos, setProdutos] = useState<Produto[]>([])
    const [fornecedores, setFornecedores] = useState<Fornecedor[]>([])

    const { usuario } = useUsuarioContext()

    const navigate = useNavigate()

    useEffect(() => {

        if (usuario === undefined){
            navigate('/login')
        }

        axios.get('http://127.0.0.1:8000/produtos').then(response => {
            setProdutos(response.data)
        })

        axios.get('http://127.0.0.1:8000/fornecedores').then(response => {
            setFornecedores(response.data)
        })
    }, [])

    const url_default = () => {
        if (usuario?.url_avatar == undefined) {
            return "https://pbs.twimg.com/media/FpR2DJCaUAAgNDY.jpg"
        }
        return usuario.url_avatar
    }

    const columns: ColumnsType<Produto> = [
        {
            title: 'Descrição',
            dataIndex: 'nome',
            key: 'nome',
        },
        {
            title: 'Preço',
            dataIndex: 'preco',
            key: 'preco',
            render: (value: number) => <div>R$ <span>{value.toFixed(2)}</span></div>
        },
        {
            title: 'Fornecedor',
            dataIndex: 'fornecedor',
            key: 'fornecedor',
            render: (values) => {
                const fornecedor = fornecedores.find((element) => element.id_fornecedor === values)
                return <a href="#" className="text-purple-500 hover:text-purple-800">{fornecedor?.nome}</a>
            }
        },
        {
            title: '',
            dataIndex: "acoes",
            key: 'acoes',
            render: () => <a href="#"><BiSolidPencil className="text-purple-500 hover:text-purple-800 hover:scale-110 transition duration-1000 ease-in-out" /></a>

        }
    ];


    // MODAL CONFIGS

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const [newProduto, setNewProduto] = useState<Produto>(
        { nome: "", preco: 0 , fornecedor:undefined}
    )

    const preco = (values: number) => {
        console.log(values)
        setNewProduto({
            nome: newProduto?.nome,
            preco: values,
            fornecedor: newProduto?.fornecedor
        })
    }

    const [fornecedorQuery, setFornecedorQuery] = useState<Fornecedor | undefined>(undefined)

    const [idFornecedor, setIdFornecedor] = useState('')

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/fornecedores/${idFornecedor}`).then(response => {
            setFornecedorQuery(response.data)
        })
    }, [idFornecedor])

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = async () => {
        
        await axios.post('http://127.0.0.1:8000/produtos/', {
            'nome': newProduto.nome,
            'preco':newProduto.preco,
            'fornecedor':idFornecedor
        }).then(response => {
            console.log(response)
        })

        axios.get('http://127.0.0.1:8000/produtos').then(response => {
            setProdutos(response.data)
        })

        setOpen(false)

    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };
    
    const handleChange = () => {};
    
    const options: SelectProps['options'] = [];

    fornecedores.forEach((element) => {
        options.push({
            value: element.id_fornecedor,
            label: element.nome,
        })
    })


    return (
        <>
            <div>
                <div className=" flex justify-start h-screen">
                    <aside className="bg-purple-500 text-white p-8">
                        <Sidebar color={"white"} bgColor={"purple"} />
                    </aside>

                    <main className="flex flex-col flex-1 p-8 gap-8">
                        <div >

                            <AvatarBadge
                                nome={usuario?.nome}
                                username={usuario?.username}
                                url_avatar={url_default()}
                            />

                        </div>

                        <div className="flex flex-1 flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <h1 className="text-3xl font-bold mb-3">Produtos</h1>

                                <button onClick={showModal}>
                                    <div className="flex text-white font-bold scale-95 bg-purple-500 hover:scale-100 transition duration-700 ease-in-out hover:bg-purple-800 px-4 py-2 rounded-full gap-x-2 items-center">
                                        <IoMdAddCircle className="transition ease-in-out duration-1000 hover:rotate-180" size={24} />
                                        Cadastrar Produto
                                    </div>
                                </button>
                            </div>

                            <div className="flex flex-1 h-full">
                                <Table className="w-full" dataSource={produtos} columns={columns} pagination={{ pageSize: 5 }} />
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            <Modal
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancelar
                    </Button>,
                    <Button className="bg-purple-500 text-white font-bold" key="submit" onClick={handleOk}>
                        Confirmar
                    </Button>,
                ]}
            >
                <h1 className="text-2xl mb-4 font-bold ">Cadastrar Produto </h1>

                <Form >

                    <div className="flex justify-start gap-4">

                        <Form.Item className="flex"
                        >
                            <span className="text-lg text-zinc-400 font-bold pl-3">Nome*</span>
                            <Input
                                className="text-zinc-300 mt-1"
                                prefix={<MdDescription size={24} />}
                                style={{ width: "100%" }}
                                placeholder="nome"
                                size="large"
                                onChange={(values) => {
                                    setNewProduto({
                                        nome: values.target.value,
                                        preco: newProduto?.preco,
                                        fornecedor: newProduto?.fornecedor
                                    })
                                }}
                            />
                        </Form.Item>

                        <Form.Item>
                            <div className="flex flex-col">
                                <span className="text-lg text-zinc-400 font-bold pl-3">Preço*</span>
                                <InputNumber
                                    className="text-zinc-300 mt-1"
                                    prefix={<RiMoneyDollarCircleFill size={24} />}
                                    placeholder="preco"
                                    size="large"
                                    style={{ width: "100%" }}
                                    decimalSeparator=","
                                    onChange={(values: any) => {
                                        preco(values)
                                    }}
                                />
                            </div>
                        </Form.Item>

                    </div>

                    <Form.Item>
                        <span className="text-lg text-zinc-400 font-bold pl-3">Fornecedor*</span>
                        <Select
                            showSearch
                            className="w-full mt-1"
                            suffixIcon={<FaSearch size={16} />}
                            style={{ width: "100%" }}
                            onChange={handleChange}
                            tokenSeparators={[',']}
                            options={options}
                            placeholder="Buscar pelo fornecedor . . ."
                            size="large"
                            onSelect={(values: any) => {
                                setIdFornecedor(values)
                            }}
                        />
                    </Form.Item>

                </Form>

            </Modal>
        </>
    )
}