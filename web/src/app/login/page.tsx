
import img_login from '@/assets/img/img_login.jpg'
import { LoginForm } from '@/components/forms/login-form'
import { LogoHorizontalBlack } from '@/components/logo/logos'


export default function Login() {

    //ilustração
    const pathImglogin = img_login.src

    return <>
        <div className="flex flex-1 h-screen overflow-hidden bg-zinc-f">
            <div className="flex items-center justify-center bg-zinc-900 text-white w-[60%]">
                <img src={pathImglogin} alt="imagem exemplo" />
            </div>

            <div className="flex flex-1 flex-col justify-center items-center ">

                <div className="flex justify-center my-[15%] w-60">
                    <a href='#'>
                        <LogoHorizontalBlack />
                    </a>
                </div>

                <div className='flex flex-1 flex-col gap-y-2'>

                    <div className='flex flex-col gap-y-4'>
                        <span className='font-bold text-4xl'>Bem-vindo de volta!</span>
                        <span className='font-regular text-zinc-400 text-sm'>Faça o login para continuar navegando</span>
                    </div>

                    <LoginForm />

                    <footer className='flex justify-center items-center mb-8 text-zinc-400'>
                        <p>Stock.io © 2023</p>
                    </footer>
                </div>

            </div>
        </div>
    </>

}