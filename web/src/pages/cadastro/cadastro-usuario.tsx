import { Button, Form, Input } from "antd";

import { FaIdCardAlt } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'
import { IoIosKey } from 'react-icons/io'

export function CadastroUsuario() {
    return (
        <>
            <div className="flex flex-1 h-screen overflow-hidden">


                <main className="bg-zinc-100 w-[30%] flex flex-col justify-center items-center px-5 py-12">

                    <div id="formulario-login" className="flex flex-1 flex-col items-center gap-3">

                        <div className="">
                            <h2 className="text-2xl font-bold ">
                                Cadastrar-se
                            </h2>
                            <h4 className="">
                                Crie sua conta e organize seu estoque
                            </h4>
                        </div>

                        <div>

                            <Form
                            >

                                <span className="text-base text-zinc-300 mb-1 font-semibold">Nome Completo</span>
                                <Form.Item
                                    name="nome"
                                    id="nome"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Digite seu nome completo'
                                        }
                                    ]}
                                >
                                    <Input
                                        prefix={<FaIdCardAlt className='text-zinc-300 text-xl' />}
                                        placeholder="nome"
                                        size="large"
                                    />
                                </Form.Item>

                                <span className="text-base text-zinc-300 mb-1 font-semibold">Username</span>
                                <Form.Item
                                    name="username"
                                    id="username"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Digite um usuário'
                                        },
                                        //TODO: verificar se o username está sendo usado
                                    ]}
                                >
                                    <Input
                                        prefix={<MdAlternateEmail className='text-zinc-300 text-xl' />}
                                        placeholder="username"
                                        size="large"
                                    />
                                </Form.Item>

                                <span className="text-base text-zinc-300 mb-1 font-semibold">Senha</span>
                                <Form.Item
                                    name="password"
                                    id="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Digite uma senha'
                                        },
                                        //TODO: verificar se o username está sendo usado
                                    ]}
                                >
                                    <Input
                                        prefix={<IoIosKey className='text-zinc-300 text-xl' />}
                                        placeholder="senha"
                                        size="large"
                                    />
                                </Form.Item>

                                <span className="text-base text-zinc-300 mb-1 font-semibold">Confirmar senha</span>
                                <Form.Item
                                    name="confirm-password"
                                    id="confirm-password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Digite uma senha'
                                        },
                                        //TODO: verificar se o username está sendo usado
                                    ]}
                                >
                                    <Input
                                        prefix={<IoIosKey className='text-zinc-300 text-xl' />}
                                        placeholder="confirmar senha"
                                        size="large"
                                    />
                                </Form.Item>
                                <Form.Item className="flex justify-center items-center">

                                    <Button className="bg-purple-500 rounded-full flex flex-1 justify-center items-center py-6 px-12 scale-95 transition duration-1000 ease-in-out hover:scale-100" htmlType="submit">
                                        <span className="text-white text-xl font-bold">Cadastrar-se</span>
                                    </Button>

                                </Form.Item>
                                <div className=" text-zinc-400 placeholder:my-1 text-center">
                                    <div>
                                        <span>Já possui conta? </span>
                                        <a className=" underline hover:text-zinc-500" href="/login">Login</a>
                                    </div>
                                </div>

                            </Form>

                        </div>

                    </div>
                </main>

                <aside className="bg-purple-500 w-[70%] flex justify-center items-center">
                    <img className='object-cover h-[100%] w-[100%]' src="/src/assets/images/pictures/elf.jpg" alt="ilustração" />
                </aside>

            </div>
        </>
    )
}