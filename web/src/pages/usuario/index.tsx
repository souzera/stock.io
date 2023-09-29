import useUsuarioContext from "../../components/context/usuario-context"

export default function Settings() {

    const { usuario } = useUsuarioContext()

    return (
        <>
            <div className="flex flex-1 h-screen w-screen justify-center items-center">

                <div className="flex flex-col gap-3 p-8justify-center items-center ">
                    <img className="h-44 w-44 rounded-full m-3 stroke-purple-500 stroke-2" src={usuario.url_avatar} alt="foto perfil" />

                    <div>
                        <h1 className="text-2xl font-bold text-center">{usuario.nome}</h1>
                        <h2 className="text-xl font-bold text-center text-zinc-500">{usuario.username}</h2>
                    </div>
                </div>

            </div>
        </>
    )
}