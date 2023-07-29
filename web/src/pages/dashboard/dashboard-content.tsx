import { Usuario } from "../../types/usuario";

export function DashboardContent(props: Usuario){

    return (
        <>
            <div>
                {props.nome}
            </div>
            <div>
                {props.username}
            </div>
            <div>
                {props.url_avatar && <img src={props.url_avatar} alt="avatar" />}    
            </div>
        </>
    )

}