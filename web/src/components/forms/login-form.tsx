"use client"

import { FormEvent, useEffect, useState } from 'react'
import { IconInput } from "../inputs/icon-input";
import { FaKey, FaUser } from "react-icons/fa";
import { PrimaryButton } from "../buttons/primary-button";
import axios from "axios";
import { urlServer } from '@/connection/connection-settings';

export function LoginForm() {

    const [username, setUsername] = useState<String>()
    const [password, setPassword] = useState<String>()

    const url_consulta = urlServer() + 'api/user/matheus'

    async function handleUser(event: FormEvent) {
        event.preventDefault();

        console.log("clicou")

        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData) 

        try {
            const response = await axios.post(url_consulta,{username})

            if (response.status == 200){
                const userData = response.data

                if (data.password == userData.password){
                    console.log("logado")
                }else{
                    console.log("senha incorreta")
                }
            }
        } catch (err) {
            console.log(err)
            alert('Erro ao tentar logar.')
        }
    }


    return <>
        <div className="flex flex-1">
            <form action="" onSubmit={handleUser}>

                <div id='form-login' className='flex flex-col mt-4 gap-3'>
                    <IconInput 
                        name='username'
                        placeholder={'username'}
                        icon={<FaUser color='gray' />}
                        type={'text'}
                    />

                    <IconInput 
                        name='password'
                        placeholder='password'
                        icon={<FaKey color='gray' />}
                        type={'password'}
                    />

                    <PrimaryButton
                        type='submit'
                        tittle={'Log In'} />
                </div>
            </form>

        </div>
    </>


}