import { IconBaseProps } from "react-icons/lib";

interface ButtonProps{
    tittle: string;
    icon?: IconBaseProps;
}

export function PrimaryButton(props: ButtonProps) {
    const icone = props.icon

    return <>
        <a href="#">
            <div className="bg-green text-zinc-f flex justify-center items-center h-12 w-auto rounded-full px-4 hover:bg-green-dark ">
                {icone}
                <h2 className="hidden md:block">
                    <b>{props.tittle}</b>
                </h2>
            </div>
        </a>
    </>
}