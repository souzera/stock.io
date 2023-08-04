import { AiFillHome } from "react-icons/ai";
import { LogotipoHorizontal } from "../brand/logotipo";
import { BsFillInboxFill, BsFillPeopleFill } from "react-icons/bs";
import { FaTruckMoving } from "react-icons/fa";
import { RiSettings4Fill } from "react-icons/ri";
import { BiSolidExit } from "react-icons/bi";

interface SidebarProps{
    color: string
    bgColor: string
}

//TODO: Usuario context

export function Sidebar(props:SidebarProps) {

    //const liStyle = `transition duration-1000 ease-in-out rounded-full py-2 px-5 hover:scale-105 hover:bg-${props.bgColor}-600`
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
                    <li className={liStyle} ><a className='flex flex-row justify-start items-center gap-x-3' href="/dashboard">
                        <AiFillHome />
                        <span>Dashboard</span>
                    </a></li>
                    <li className={liStyle}><a className='flex flex-row justify-start items-center gap-x-3' href="/produtos">
                        <BsFillInboxFill />
                        <span>Produtos</span>
                    </a></li>
                    <li className={liStyle}><a className='flex flex-row justify-start items-center gap-x-3' href="#">
                        <FaTruckMoving />
                        <span>Fornecedores</span>
                    </a></li>
                    <li className={liStyle}><a className='flex flex-row justify-start items-center gap-x-3' href="#">
                        <BsFillPeopleFill />
                        <span>Clientes</span>
                    </a></li>
                </ul>

                <ul className="flex flex-col gap-1 font-semibold">
                    <li className={liStyle}><a className='flex flex-row justify-start items-center gap-x-3' href="#">
                        <RiSettings4Fill />
                        <span>Configurações</span>
                    </a></li>
                    <li className={liStyle}><a className='flex flex-row justify-start items-center gap-x-3' href="#">
                        <BiSolidExit />
                        <span>Sair</span>
                    </a></li>
                </ul>
            </div>
        </>
    )
}