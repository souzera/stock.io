"use client"

import { IconInput } from "../inputs/icon-input";
import { FaKey, FaUser } from "react-icons/fa";

import { Button, Checkbox, Form, Input } from 'antd';
import axios from "axios";
import { useState } from "react";
import { Usuario } from "@/types/usuario";

export function LoginForm() {

    const [username, setUsername] = useState();
    const [usuario, setUsuario] = useState<Usuario>();



    const login = async (values: any) => {
        console.log('oe')
    }

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    return <>
        <div className="flex flex-1">

            <Form
                className="flex flex-1 flex-col items-start justify-start"
                name="login"
                labelCol={{ span: 0 }}
                wrapperCol={{ span: 100 }}
                style={{}}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    className="w-[80%]"
                    name="username"
                    rules={[{ required: true, message: 'Usuário Inválido.' }]}
                >
                    <Input
                        name="username"
                        placeholder="username"
                        type="text"
                        size="large"
                        prefix={<FaUser color='gray' />}
                    />
                </Form.Item>

                <Form.Item
                    className="w-[80%]"
                    name="password"
                    rules={[{ required: true, message: 'Senha Incorreta!' }]}
                >

                    <Input.Password
                        name="password"
                        size="large"
                        prefix={<FaKey color='gray' />}
                        placeholder="password"
                    />
                </Form.Item>

                <Form.Item
                    className="w-[100%]"
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ offset: 1, span: 90 }}>
                    <Checkbox className="">Lembrar-me</Checkbox>
                    <a className="text-zinc-400 pl-6" href="#">Esqueceu a senha?</a>
                </Form.Item>

                <Form.Item
                    className=" w-[80%] flex flex-1 flex-col justify-center items-center"
                    wrapperCol={{ offset: 0, span: 100 }}>
                    <div className="bg-green flex flex-1 justify-center items-center h-[8vh] w-[16vw] rounded-full px-8 hover:bg-green-dark">
                        <Button className="font-bold text-zinc-f"
                            type="ghost" htmlType="submit" >
                            Log In
                        </Button>
                    </div>
                    <div className="w-full flex flex-1 justify-center items-center items-center my-3">
                        <span className=" text-center  text-zinc-400">
                            <a className="underline">
                                Registrar-se
                            </a>
                        </span>
                    </div>
                </Form.Item>
            </Form>

        </div>
    </>


}