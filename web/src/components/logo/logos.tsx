import logo from '@/assets/img/logo.png'
import logoBlack from '@/assets/img/logo_black.png'

export function LogoHorizontal() {

    const pathLogo = logo.src

    return <>
        <div className='flex flex-1 justify-center items-center'>
            <a href="#">
                <img className='' src={pathLogo} alt="" />
            </a>
        </div>
    </>

}

export function LogoHorizontalBlack(){
    const pathLogo = logoBlack.src

    return <>
        <div className='flex flex-1 justify-center items-center'>
            <a href="#">
                <img className='' src={pathLogo} alt="" />
            </a>
        </div>
    </>

}