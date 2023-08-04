import axios from "axios";
import AvatarBadge from "../../components/avatar/avatar";
import { Sidebar } from "../../components/sidebar/sidebar";
import { useEffect, useState } from "react";
import { Usuario } from "../../types/usuario";

//todo: usuario context

export default function Produtos() {

    const [account, setAccount] = useState<Usuario|undefined>(undefined)

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/user/ayron').then(response => {
            setAccount(response.data.data)
        })
    },[])

    const url_default = () => {
        if (account?.url_avatar == undefined) {
            return "https://img.quizur.com/f/img64624f77d49397.45271659.jpg?lastEdited=1684164477"
        }
        return account.url_avatar
    }

    return (
        <>
            <div>
                <div className=" flex justify-start h-screen">
                    <aside className="bg-purple-500 text-white p-8">
                        <Sidebar color={"white"} bgColor={"purple"} />
                    </aside>

                    <main className="flex flex-col flex-1 p-8">
                        <div >
                            {
                            account &&
                            <AvatarBadge
                                nome={account?.nome}
                                username={account?.username}
                                url_avatar={url_default()}
                            />
                            }
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}