'use Client';

import { FormEvent } from 'react'
import { IconInput } from "../inputs/icon-input";
import { FaKey, FaUser } from "react-icons/fa";
import { PrimaryButton } from "../buttons/primary-button";
import axios from "axios";

export function LoginForm() {

    const handleUser = async (event: FormEvent) => {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

        console.log(data)

        try {
            axios.get(`${url_server}api/user/${data}`)

        } catch (err) {
            console.log(err)
            alert('Erro ao tentar logar.')
        }
    }


    return <>
        <div className="flex flex-1 bg-green">
            <form action="" onSubmit={handleUser}>

                <div id='form-login' className='flex flex-col mt-4 gap-3'>
                    <IconInput
                        placeholder={'username'}
                        icon={<FaUser color='gray' />}
                        type={'text'}
                    />

                    <IconInput
                        placeholder='password'
                        icon={<FaKey color='gray' />}
                        type={'password'}
                    />

                    <PrimaryButton
                        tittle={'Log In'} />

                    <input type="text" name="" id="" />

                </div>
            </form>

        </div>
    </>


}