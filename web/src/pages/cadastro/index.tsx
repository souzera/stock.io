import { Button, Form, Input } from "antd";

import { FaIdCardAlt } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'
import { IoIosKey } from 'react-icons/io'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface CreatedUser {
    nome: string | undefined;
    username: string | undefined
    password: string | undefined
    confirmPassword: string | undefined
}

export function CadastroUsuario() {

    //TODO: post do usuario

    const [createdUser, setCreatedUser] = useState<CreatedUser>()

    useEffect(() => {
        console.log(createdUser)
    }, [createdUser])

    const navigate = useNavigate()

    return (
        <>
            <div className="flex flex-1 h-screen overflow-hidden">


                <main className="bg-zinc-100 w-[30%] flex flex-col justify-center items-center px-5 py-12">
                    <div className="my-4 px-4 w-[90%]" onClick={() => { navigate("/") }}>
                        <img className="h-full w-full" src="https://raw.githubusercontent.com/souzera/stock.io/a329a9c60383518ef03a04ae4d4eb711ea4b8bd7/web/src/assets/images/SVG/stock_io_logo_name_h.svg" alt="logotipo" />
                    </div>

                    <div id="formulario-cadastro" className="flex flex-1 flex-col items-center gap-3">

                        <div className="">
                            <h2 className="text-2xl font-bold ">
                                Cadastrar-se
                            </h2>
                            <h4 className="">
                                Crie sua conta e organize seu estoque
                            </h4>
                        </div>

                        <div className="w-[80%]">
                            <Form
                                className="flex flex-1 flex-col"
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
                                        onChange={(values) => {
                                            console.log(values.target.value)
                                            setCreatedUser({
                                                nome: values.target.value,
                                                username: createdUser?.username,
                                                password: createdUser?.password,
                                                confirmPassword: createdUser?.confirmPassword
                                            })
                                        }}
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
                                        },//TODO: verificar se o username está sendo usado
                                    ]}
                                >
                                    <Input
                                        prefix={<MdAlternateEmail className='text-zinc-300 text-xl' />}
                                        placeholder="username"
                                        size="large"
                                        onChange={(values) => {
                                            setCreatedUser({
                                                nome: createdUser?.nome,
                                                username: values.target.value,
                                                password: createdUser?.password,
                                                confirmPassword: createdUser?.confirmPassword
                                            })
                                        }}
                                    />
                                </Form.Item>

                                <div className="flex gap-x-4">
                                    <div>
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
                                            <Input.Password
                                                prefix={<IoIosKey className='text-zinc-300 text-xl' />}
                                                placeholder="senha"
                                                size="large"
                                                onChange={(values) => {
                                                    setCreatedUser({
                                                        nome: createdUser?.nome,
                                                        username: createdUser?.username,
                                                        password: values.target.value,
                                                        confirmPassword: createdUser?.confirmPassword
                                                    })
                                                }}
                                            />
                                        </Form.Item>
                                    </div>

                                    <div>

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
                                            <Input.Password
                                                prefix={<IoIosKey className='text-zinc-300 text-xl' />}
                                                placeholder="confirmar senha"
                                                size="large"
                                                onChange={(values) => {
                                                    setCreatedUser({
                                                        nome: createdUser?.nome,
                                                        username: createdUser?.username,
                                                        password: createdUser?.password,
                                                        confirmPassword: values.target.value,
                                                    })
                                                }
                                                }
                                            />
                                        </Form.Item>
                                    </div>
                                </div>
                                <Form.Item className="flex justify-center items-center">

                                    <Button className="bg-purple-500 rounded-full flex flex-1 justify-center items-center py-6 px-12 scale-95 transition duration-1000 ease-in-out hover:scale-100" htmlType="submit">
                                        <span className="text-white text-xl font-bold">Cadastrar-se</span>
                                    </Button>

                                </Form.Item>
                                <div className=" text-zinc-400 placeholder:my-1 text-center">
                                    <div>
                                        <span>Já possui conta? </span>
                                        <span className=" underline hover:text-zinc-500" onClick={() => {navigate("/login")}}>Login</span>
                                    </div>
                                </div>

                            </Form>
                        </div>

                    </div>
                </main>

                <aside className="bg-purple-500 w-[70%] flex justify-center items-center">
                    <img className='object-cover h-[100%] w-[100%]' src="https://raw.githubusercontent.com/souzera/stock.io/main/web/src/assets/images/pictures/elf.jpg" alt="ilustração" />
                </aside>

            </div>
        </>
    )
}