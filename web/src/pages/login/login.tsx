import { Button, Checkbox, ConfigProvider, Form, Input } from "antd"
import { BiSolidUser } from 'react-icons/bi'
import { IoIosKey } from 'react-icons/io'

export function Login() {

    return (
        <>

            <div className="flex flex-1 h-screen overflow-hidden">

                <aside className="bg-purple-500 w-[70%] flex justify-center items-center">
                    <img className='object-cover h-[100%] w-[100%]' src="/src/assets/images/pictures/elf.jpg" alt="ilustração" />
                </aside>
                <main className="bg-zinc-100 w-[30%] flex flex-col justify-center items-center px-5 py-12">
                    <div className="my-8 px-8 w-[90%]">
                        <a href="/">
                            <img className="h-full w-full" src="/src/assets/images/SVG/stock_io_logo_name_h.svg" alt="logotipo" />
                        </a>
                    </div>

                    <div id="formulario-login" className="flex flex-1 flex-col items-center gap-3">

                        <div className="">
                            <h2 className="text-2xl font-bold ">
                                Login
                            </h2>
                            <h4 className="">
                                Logar em uma conta existente
                            </h4>
                        </div>

                        <Form className="flex flex-col justify-start items-stretch w-[90%] gap-0">

                            <span className="text-base text-zinc-300 mb-1 font-semibold">Username</span>

                            <Form.Item
                                name='username'
                                id="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'digite um usuário'
                                    }
                                ]}
                            >
                                <Input
                                    prefix={<BiSolidUser className='text-zinc-300 text-xl' />}
                                    placeholder="username"
                                    size="large"
                                />
                            </Form.Item>

                            <span className="text-base text-zinc-300 mb-1 font-semibold">Senha</span>

                            <Form.Item
                                id="password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Senha incorreta'
                                    }
                                ]}
                            >
                                <Input.Password
                                    prefix={<IoIosKey className='text-zinc-300 text-xl' />}
                                    placeholder="senha"
                                    size="large"
                                />

                            </Form.Item>

                            <Form.Item
                                className="flex flex-col text-xs"
                                name='remenber'
                                valuePropName="checked"
                                wrapperCol={
                                    {
                                        offset: 1
                                    }
                                }
                            >


                                <ConfigProvider
                                    theme={{
                                        token: {
                                            colorPrimary: "#a855f7"
                                        }
                                    }}
                                >
                                    <Checkbox>Lembra-me</Checkbox>
                                </ConfigProvider>

                            </Form.Item>

                            <Form.Item className="flex justify-center items-center">

                                <Button className="bg-purple-500 rounded-full flex flex-1 justify-center items-center py-6 px-12 scale-95 transition duration-1000 ease-in-out hover:scale-100" htmlType="submit">
                                    <span className="text-white text-xl font-bold">Entrar</span>
                                </Button>

                            </Form.Item>
                            <div className=" text-zinc-400 placeholder:my-1 text-center">
                                <div>
                                    <span>Não possui conta? </span>
                                    <a className=" underline hover:text-zinc-500" href="/cadastrar-se">Cadastrar-se</a>
                                </div>
                                <div>
                                    <a className=" underline hover:text-zinc-500" href="#">Esqueceu a senha?</a>
                                </div>
                            </div>
                        </Form>
                    </div>
                </main>

            </div>

        </>
    )
}