import { InputHTMLAttributes } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement>{}

export function Input(props:CustomInputProps){
    return( 
        <input {...props} className="bg-white px-4 py-4 rounded-xl text-sm hover:placeholder:text-zinc-300 placeholder:text-zinc-200"/>
    )
}