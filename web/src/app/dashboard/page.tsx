'use client'

import { AiFillHome, } from 'react-icons/ai'
import { HiInbox, HiTruck } from 'react-icons/hi'
import { BiSolidExit } from 'react-icons/bi'
import { IoMdSettings } from 'react-icons/io'
import { FaCartPlus } from 'react-icons/fa'
import { LogoHorizontalBlack } from '@/components/logo/logos'
import { AvatarBadge } from '@/components/avatar/avatar-badge'
import { ListProdutos } from '@/components/list/list-produtos'

export default function Dashboard() {

    

    return <>
        <div className='h-screen flex flex-col'>
            <div className='flex flex-1'>
                <aside className='w-64 p-6 bg-zinc-50'>
                    <a href='#'>
                        <div className="flex flex-auto w-[100%] mt-10 mb-14">
                            <LogoHorizontalBlack />
                        </div>
                    </a>

                    <div className='mt-3 hover:scale-110'>
                        <AvatarBadge
                            url_avatar={'https://i.pinimg.com/236x/7d/ee/bb/7deebbb371978695e4ae26f4dcffda0c.jpg'}
                            nome={'Matheus Barbosa'}
                            username={'matheus'} />
                    </div>

                    <div className="mt-6 bg-zinc-400 w-58 h-0.5 rounded" />

                    <div className="mt-6 font-bold text-xl text-black">
                        <ul className='flex flex-col gap-1'>
                            <li className="flex align-middle space-x-3 transition-opacity duration-1000 ease-in-out p-1 rounded-full hover:bg-black hover:p-2 hover:text-white">
                                <AiFillHome size={24} />
                                <span>Dashboard</span>
                            </li>
                            <li className="flex align-middle space-x-3 transition-opacity duration-1000 ease-in-out p-1 rounded-full hover:bg-black hover:p-2 hover:text-white">
                                <HiInbox size={24} />
                                <span>Produtos</span>
                            </li>
                            <li className="flex align-middle space-x-3 transition-opacity duration-1000 ease-in-out p-1 rounded-full hover:bg-black hover:p-2 hover:text-white">
                                <HiTruck size={24} />
                                <span>Fornecedores</span>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-28 font-bold text-zinc-500">
                        <ul className='flex flex-col gap-1'>
                            <li className="flex justify-start items-center gap-x-2 hover:text-zinc-800 hover:scale-105">
                                <IoMdSettings size={12} />
                                <span>Configurações</span>
                            </li>
                            <li className="flex justify-start items-center gap-x-2 hover:text-zinc-800 hover:scale-105">
                                <BiSolidExit size={12} />
                                <span>Sair</span>
                            </li>
                        </ul>
                    </div>
                </aside>

                <main className='flex-1 p-8'>
                    <div className="bg-white rounded-xl h-[100%] shadow-sm p-6">
                        <div className='flex flex-1 justify-between items-center h-[10%] px-1'>
                            <span className='text-2xl font-bold'>Produtos</span>

                            <button 
                                className='flex justify-center gap-x-3 items-center font-semibold text-zinc-100 py-3 px-5 rounded-full bg-green hover:bg-green-dark' 
                                type="button" 
                                onClick={() => {console.log("Abrir Modal de cadastro de produto")}}
                            >
                                <FaCartPlus />
                                <span>Adicionar produto</span>
                            </button>
                        </div>

                        <div className='h-[1px] bg-zinc-f my-3 rounded-xl' />

                        <div className=' flex flex-1 h-[85%]'>
                            <ListProdutos/>
                        </div>
                    </div>
                </main>
            </div>



        </div>
    </>
}