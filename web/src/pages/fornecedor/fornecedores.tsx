import { IoMdAddCircle } from "react-icons/io";
import AvatarBadge from "../../components/avatar/avatar";
import useUsuarioContext from "../../components/context/usuario-context";
import { Sidebar } from "../../components/sidebar/sidebar";
import { Button, Form, Input, Modal, Table } from "antd";
import { useEffect, useState } from "react";
import { Fornecedor } from "../../types/fornecedor";
import axios from 'axios';
import { ColumnsType } from "antd/es/table";
import { BiSolidPencil, BiSolidPhone } from "react-icons/bi";
import { MdDescription } from "react-icons/md";
import { HiIdentification, HiMap } from 'react-icons/hi'

export default function Fornecedores() {

    const { usuario } = useUsuarioContext()

    const [fornecedores, setFornecedores] = useState<Fornecedor[]>([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/fornecedores').then(response => {
            setFornecedores(response.data.data)
        })
    }, [])

    const columns: ColumnsType<Fornecedor> = [
        {
            title: 'Nome',
            dataIndex: 'nome',
            key: 'nome',
        },
        {
            title: 'Endereço',
            dataIndex: 'endereco',
            key: 'endereco',
        },
        {
            title: 'Contato',
            dataIndex: 'contato',
            key: 'contato',
        },
        {
            title: '',
            dataIndex: "acoes",
            key: 'acoes',
            render: (text) => <a href="#"><BiSolidPencil className="text-purple-500 hover:text-purple-800 hover:scale-110 transition duration-1000 ease-in-out" /></a>

        }
    ];

    // MODAL CONFIGS

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const showModal = () => {
        setOpen(true)
    }

    const handleOk = () => {

    }

    const handleCancel = () => {

    }

    return (
        <>
            <div className="flex h-screen w-screen">
                <aside className="bg-purple-500 p-8 text-white">
                    <Sidebar color={"white"} bgColor={"purple"} />
                </aside>
                <main className="flex flex-col flex-1 p-8 gap-8">
                    <div>
                        <AvatarBadge nome={usuario.nome} username={usuario.username} url_avatar={usuario.url_avatar} />
                    </div>

                    <div className="flex flex-1 flex-col gap-3">
                        <div className="flex justify-between">
                            <h1 className="text-3xl font-bold">Fornecedores</h1>
                            <button onClick={showModal}>
                                <div className="flex text-white font-bold scale-95 bg-purple-500 hover:scale-100 transition duration-700 ease-in-out hover:bg-purple-800 px-4 py-2 rounded-full gap-x-2 items-center">
                                    <IoMdAddCircle className="transition ease-in-out duration-1000 hover:rotate-180" size={24} />
                                    Cadastrar Fornecedor
                                </div>
                            </button>
                        </div>

                        <div>
                            <Table className="w-full" dataSource={fornecedores} columns={columns} pagination={{ pageSize: 5 }} />
                        </div>

                    </div>
                </main>
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
                <h1 className="text-2xl mb-4 font-bold ">Cadastrar Fornecedor </h1>

                <Form>
                    <div>
                        <span className="text-lg text-zinc-400 font-bold pl-3">Nome*</span>
                        <Form.Item>
                            <Input
                                className="text-zinc-300 mt-1"
                                prefix={<MdDescription size={24} />}
                                style={{ width: "100%" }}
                                placeholder="nome"
                                size="large"
                                onChange={(values) => {
                                    console.log(values.target.value)
                                }}
                            />
                        </Form.Item>
                    </div>
                    <div className="flex justify-between ">
                        <div>
                            <span className="text-lg text-zinc-400 font-bold pl-3">Contato*</span>
                            <Form.Item>
                                <Input
                                    className="text-zinc-300 mt-1"
                                    prefix={<BiSolidPhone size={24} />}
                                    placeholder="contato"
                                    name="contato"
                                    style={{ width: "100%" }}
                                    size="large"
                                    onChange={(values) => {
                                        console.log(values.target.value)
                                    }} />
                            </Form.Item>
                        </div>
                        <div className="flex flex-col flex-1 ml-3">
                            <span className="text-lg text-zinc-400 font-bold pl-3">CNPJ*</span>
                            <Form.Item>
                                <Input
                                    className="text-zinc-300 mt-1"
                                    prefix={<HiIdentification size={24} />}
                                    placeholder="cnpj"
                                    name="cnpj"
                                    style={{ width: "100%" }}
                                    size="large"
                                    onChange={(values) => {
                                        console.log(values.target.value)
                                    }}
                                />
                            </Form.Item>
                        </div>
                    </div>
                    <div>
                        <span className="text-lg text-zinc-400 font-bold pl-3">Endereço*</span>
                        <Form.Item>
                            <Input
                                className="text-zinc-300 mt-1"
                                prefix={<HiMap size={24} />}
                                placeholder="endereco"
                                name="endereco"
                                style={{ width: "100%" }}
                                size="large"
                                onChange={(values) => {
                                    console.log(values.target.value)
                                }}
                            />
                        </Form.Item>
                    </div>
                </Form>
            </Modal>
        </>
    )
}