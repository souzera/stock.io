import { AiFillHome } from "react-icons/ai";
import { LogotipoHorizontal } from "../brand/logotipo";
import { BsFillInboxFill, BsFillPeopleFill } from "react-icons/bs";
import { FaTruckMoving } from "react-icons/fa";
import { RiSettings4Fill } from "react-icons/ri";
import { BiSolidExit } from "react-icons/bi";
import useUsuarioContext from "../context/usuario-context";
import { useNavigate } from "react-router-dom";

interface SidebarProps {
    color: string
    bgColor: string
}

//TODO: Usuario context

export function Sidebar(props: SidebarProps) {

    const { setUsuario } = useUsuarioContext()

    const navigate = useNavigate()

    const liStyle = `transition duration-1000 ease-in-out rounded-full py-2 px-5 hover:scale-105 hover:bg-purple-600`

    return (
        <>
            <div id="logotipo-white" className="w-64 my-4">
                <a href="/">
                    <LogotipoHorizontal color={props.color} />
                </a>
            </div>

            <div className="flex flex-col mt-10 h-[70%] justify-between">
                <ul className="flex flex-col gap-1 text-xl font-semibold">
                    <li className={liStyle} >
                        <button className='flex flex-row justify-start items-center gap-x-3' onClick={()=>{navigate('/dashboard')}}>
                            <AiFillHome />
                            <span>Dashboard</span>
                        </button>
                    </li>
                    <li className={liStyle}>
                        <button className='flex flex-row justify-start items-center gap-x-3' onClick={()=>{navigate('/produtos')}}>
                            <BsFillInboxFill />
                            <span>Produtos</span>
                        </button>
                    </li>
                    <li className={liStyle}>
                        <button className='flex flex-row justify-start items-center gap-x-3' onClick={()=>{navigate('/fornecedores')}}>
                            <FaTruckMoving />
                            <span>Fornecedores</span>
                        </button>
                    </li>
                    <li className={liStyle}>
                        <button className='flex flex-row justify-start items-center gap-x-3' onClick={()=>{navigate('/clientes')}}>
                            <BsFillPeopleFill />
                            <span>Clientes</span>
                        </button>
                    </li>
                </ul>

                <ul className="flex flex-col gap-1 font-semibold">
                    <li className={liStyle}>
                        <button className='flex flex-row justify-start items-center gap-x-3' onClick={()=>{navigate('/settings')}}>
                        <RiSettings4Fill />
                        <span>Configurações</span>
                    </button>
                    </li>
                    <li className={liStyle}>
                        <button className='flex flex-row justify-start items-center gap-x-3' onClick={() => {
                            setUsuario(undefined)
                            navigate('/login')
                        }}>
                            <BiSolidExit />
                            <span>Sair</span>
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}