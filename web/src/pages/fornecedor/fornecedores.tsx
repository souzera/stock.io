import { IoMdAddCircle } from "react-icons/io";
import AvatarBadge from "../../components/avatar/avatar";
import useUsuarioContext from "../../components/context/usuario-context";
import { Sidebar } from "../../components/sidebar/sidebar";
import { Table } from "antd";
import { useEffect, useState } from "react";
import { Fornecedor } from "../../types/fornecedor";
import axios from "axios";
import { ColumnsType } from "antd/es/table";
import { BiSolidPencil } from "react-icons/bi";

export default function Fornecedores() {

    const { usuario } = useUsuarioContext()

    const [ fornecedores, setFornecedores] = useState<Fornecedor[]>([])

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/fornecedores').then(response => {
            setFornecedores(response.data.data)
        })
    },[])

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
                            <button>
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
        </>
    )
}