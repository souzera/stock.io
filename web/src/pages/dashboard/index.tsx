import { DashboardContent } from "./dashboard-content"
import useUsuarioContext from "../../components/context/usuario-context"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export function Dashboard() {

    const { usuario } = useUsuarioContext()

    const navigate = useNavigate()

    useEffect(() => {
        if (usuario === undefined){
            navigate('/login')
        }
    },[usuario])

    console.log("Contexto:", usuario)

    const url_default = () => {
        if (usuario?.url_avatar == undefined) {
            return "https://img.quizur.com/f/img64624f77d49397.45271659.jpg?lastEdited=1684164477"
        }
        return usuario.url_avatar
    }



    return (
        <>
            {usuario && <DashboardContent nome={usuario.nome} username={usuario.username} url_avatar={url_default()}/>}
        </>
    )
}
