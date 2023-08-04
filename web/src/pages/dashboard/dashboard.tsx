import axios from "axios"
import { useEffect, useState } from "react"
import { Usuario } from "../../types/usuario"
import { DashboardContent } from "./dashboard-content"

interface DashboardProps{
    username: string
}

export function Dashboard({username}:DashboardProps) {

    const [account, setAccount] = useState<Usuario>()

    const url_query = `http://127.0.0.1:8000/api/user/${username}`

    useEffect(()=>{
        axios.get(
            url_query
        ).then(response => {
            console.log(response.data.data)
            setAccount(response.data.data)
        })
    },[username])

    const url_default = () => {
        if (account?.url_avatar == undefined) {
            return "https://img.quizur.com/f/img64624f77d49397.45271659.jpg?lastEdited=1684164477"
        }
        return account.url_avatar
    }



    return (
        <>
            {account && <DashboardContent nome={account?.nome} username={account?.username} url_avatar={url_default()}/>}
        </>
    )
}
