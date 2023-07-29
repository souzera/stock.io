import useUsuarioContext from "../../components/context/usuario-context"
import { DashboardContent } from "./dashboard-content"

export function Dashboard() {

    const { usuario } = useUsuarioContext()

    console.log(usuario)

    return (
        <>
            <div>
                {usuario && <DashboardContent 
                    nome={usuario.nome} 
                    username={usuario.username} 
                    url_avatar={usuario.url_avatar}/>}
            </div>
        </>
    )
}
