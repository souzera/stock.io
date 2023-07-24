import { Input } from "../../components/input";

export function Login(){

    return (
        <>
        
        <div className="flex flex-1 h-screen overflow-hidden">

            <aside className="bg-purple-500 w-[70%] flex justify-center items-center">
                <img className='object-cover h-[100%] w-[100%]' src="/src/assets/images/pictures/elf.jpg" alt="ilustração" />
            </aside>
            <main className="bg-zinc-100 w-[30%] flex flex-col justify-center items-center px-5 py-12">
                <img className="w-[80%] h-auto" src="/src/assets/images/SVG/stock_io_logo_name_h.svg" alt="logotipo" />

                <div id="formulario-login" className="flex flex-col gap-3">
                    <Input type="text" name="username" id="username" placeholder="username"/>
                    <Input type="password" name='password' id='password' placeholder="password" />
                </div>
            </main>

        </div>

        </>
    )
}