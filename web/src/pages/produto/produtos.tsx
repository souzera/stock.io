import axios from "axios";
import AvatarBadge from "../../components/avatar/avatar";
import { Sidebar } from "../../components/sidebar/sidebar";
import { useEffect, useState } from "react";
import { Usuario } from "../../types/usuario";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { Produto } from "../../types/produto";
import { BiSolidPencil } from "react-icons/bi";
import useUsuarioContext from "../../components/context/usuario-context";

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

    return (
        <>
            <div>
                <div className=" flex justify-start h-screen">
                    <aside className="bg-purple-500 text-white p-8">
                        <Sidebar color={"white"} bgColor={"purple"} />
                    </aside>

                    <main className="flex flex-col flex-1 p-8">
                        <div >

                            <AvatarBadge
                                nome={usuario?.nome}
                                username={usuario?.username}
                                url_avatar={url_default()}
                            />

                        </div>

                        <div className="flex flex-1 flex-col">
                            <h1 className="text-3xl font-bold mb-3">Produtos</h1>

                            <div className="flex flex-1 h-full">
                                <Table className="w-full" dataSource={produtos} columns={columns} pagination={{ pageSize: 5 }} />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}