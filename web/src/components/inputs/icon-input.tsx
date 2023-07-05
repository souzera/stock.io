import { IconBaseProps } from "react-icons/lib";

interface IconInputProps{
    placeholder: string
    icon: IconBaseProps
    type: string
}

export function IconInput(props:IconInputProps) {

    const icone = props.icon

    return <>
        <div className='relative w-full'>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                {icone}
            </div>
            <input className='border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green focus:border-green block w-full pl-10 p-2.5' placeholder={props.placeholder} type={props.type} autoComplete='username' />
        </div>
    </>
}