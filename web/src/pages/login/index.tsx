import { Button, Checkbox, ConfigProvider, Form, Input } from "antd"
import { useEffect, useState } from "react"
import { BiSolidUser } from 'react-icons/bi'
import { IoIosKey } from 'react-icons/io'
import useUsuarioContext from "../../components/context/usuario-context"
import axios from "axios"
import { useNavigate } from "react-router-dom"


interface LoginProps {
    username: string,
    password: string,
    remember: boolean
}

export function Login() {

    const [login, setLogin] = useState<LoginProps>({ username: '', password: '', remember: true });

    const navigate = useNavigate();

    const { usuario, setUsuario } = useUsuarioContext()


    const onFinish = () => {

        //const url_query = `http://127.0.0.1:8000/logging/username/${login?.username}`
        const url_query = `http://127.0.0.1:8000/usuarios/signin/`

        console.log(login)

        axios(
            {
                method: "POST",
                url: url_query,
                data: {
                    "username": login.username,
                    "password": login.password,
                    "remenber": login.remember
                }
            }
        ).then(response => {
            if (login.password == response.data.data.password) {
                setUsuario(response.data.data)
            }
        })
    }


    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }


    useEffect(() => {
        if (usuario !== undefined) {
            navigate('/dashboard')
        } else {
            console.log('O objeto é undefined.');
        }
    }, [usuario])

    return (
        <>

            <div className="flex flex-1 h-screen overflow-hidden">

                <aside className="bg-purple-500 w-[70%] flex justify-center items-center">
                    <img className='object-cover h-[100%] w-[100%]' src="https://raw.githubusercontent.com/souzera/stock.io/main/web/src/assets/images/pictures/elf.jpg" alt="ilustração" />
                </aside>
                <main className="bg-zinc-100 w-[30%] flex flex-col justify-center items-center px-5 py-12">
                    <div onClick={() => { navigate("/") }} className="my-8 px-8 w-[90%] cursor-pointer">
                        <img className="h-full w-full" src="https://raw.githubusercontent.com/souzera/stock.io/a329a9c60383518ef03a04ae4d4eb711ea4b8bd7/web/src/assets/images/SVG/stock_io_logo_name_h.svg" alt="logotipo" />
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

                        <ConfigProvider
                            theme={{
                                token: {
                                    colorPrimary: "#a855f7"
                                }
                            }}
                        >



                            <Form
                                className="flex flex-col justify-start items-stretch w-[90%] gap-0"
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                            >

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
                                        onChange={(values) => {
                                            const updateValues = {
                                                username: values.target.value,
                                                password: login.password,
                                                remember: login.remember
                                            }
                                            setLogin(updateValues)
                                        }}
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
                                        onChange={(values) => {
                                            const updateValues = {
                                                username: login.username,
                                                password: values.target.value,
                                                remember: login.remember
                                            }

                                            setLogin(updateValues)
                                        }}
                                    />

                                </Form.Item>

                                <Form.Item
                                    className="flex flex-col text-xs"
                                    name='remember'
                                    valuePropName="checked"
                                    wrapperCol={
                                        {
                                            offset: 1
                                        }
                                    }
                                >

                                    <Checkbox
                                        onChange={(values) => {
                                            const updateValues = {
                                                username: login.username,
                                                password: login.password,
                                                remember: values.target.checked
                                            }

                                            setLogin(updateValues)
                                        }}
                                    >Lembra-me</Checkbox>

                                </Form.Item>

                                <Form.Item className="flex justify-center items-center">

                                    <Button className="bg-purple-500 rounded-full flex flex-1 justify-center items-center py-6 px-12 scale-95 transition duration-1000 ease-in-out hover:scale-100" htmlType="submit">
                                        <span className="text-white text-xl font-bold">Entrar</span>
                                    </Button>

                                </Form.Item>
                                <div className=" text-zinc-400 placeholder:my-1 text-center">
                                    <div>
                                        <span>Não possui conta? </span>
                                        <span onClick={() => {navigate("/cadastrar-se")}} className=" underline hover:text-zinc-500">Cadastrar-se
                                        </span>
                                    </div>
                                    <div onClick={() => {
                                        console.log("ir para tela de esqueceu a senha")
                                    }} className="underline hover:text-zinc-500">
                                        Esqueceu a senha?
                                    </div>
                                </div>
                            </Form>

                        </ConfigProvider>
                    </div>
                </main>

            </div>

        </>
    )
}