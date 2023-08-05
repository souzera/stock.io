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

//todo: usuario context

export default function Produtos() {

    const [produtos, setProdutos] = useState<Produto[]>([])

    const { usuario } = useUsuarioContext()
    console.log(usuario)

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/produtos').then(response => {
            setProdutos(response.data.data)
        })
    }, [])

    const url_default = () => {
        if (usuario?.url_avatar == undefined) {
            return "https://img.quizur.com/f/img64624f77d49397.45271659.jpg?lastEdited=1684164477"
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
            render: (text) => <div>R$ <span>{text}</span></div>
        },
        {
            title: 'Fornecedor',
            dataIndex: 'fornecedor',
            key: 'forncedor',
            render: (text) => <a href="#" className="text-purple-500 hover:text-purple-800">{text}</a>
        },
        {
            title: '',
            dataIndex: "acoes",
            key: 'acoes',
            render: (text) => <a href="#"><BiSolidPencil className="text-purple-500 hover:text-purple-800" /></a>

        }
    ];


    // MODAL CONFIGS

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

    const options: SelectProps['options'] = [];

    for (let i = 10; i < 36; i++) {
        options.push({
            value: i.toString(36) + i,
            label: i.toString(36) + i,
        });
    }

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

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
                title="Cadastrar Produto"
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
                <Form className="">

                    <div className="flex justify-start gap-4">

                        <Form.Item className="flex">
                            <span className="text-lg text-zinc-400 font-bold pl-3">Nome*</span>
                            <Input
                                className="text-zinc-300 mt-1"
                                prefix={<MdDescription size={24} />}
                                style={{ width: "100%" }}
                                placeholder="nome"
                                size="large"
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
                                />
                            </div>
                        </Form.Item>



                    </div>

                    <Form.Item>
                        <span className="text-lg text-zinc-400 font-bold pl-3">Fornecedor*</span>
                        <Select
                            className="w-full mt-1"
                            suffixIcon={<FaSearch size={16} />}
                            mode="tags"
                            style={{ width: "100%" }}
                            onChange={handleChange}
                            tokenSeparators={[',']}
                            options={options}
                            placeholder="Buscar pelo fornecedor . . ."
                            size="large"
                        />
                    </Form.Item>

                </Form>

            </Modal>
        </>
    )
}