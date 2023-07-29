import useUsuarioContext from "./components/context/usuario-context"

export function Dashboard(){

    const { usuario } = useUsuarioContext()
    console.log(usuario)

    return (
        <>
        
        <div className="text-2xl">
            {usuario.nome}
        </div>

        </>
    )
}