import { createContext, useContext, useState } from "react";
import { Usuario } from "../../types/usuario";

const UsuarioContext = createContext<any|undefined>(undefined)

export function UsuarioContextProvider({children}:any){

    const [usuario, _setUsuario] = useState<Usuario|undefined>(undefined);

    const setUsuario = (_usuario:Usuario) => {
        _setUsuario(_usuario)
    }

    const login = (usuario:Usuario) => {
        setUsuario(usuario)
    }

    return (
        <>
            <UsuarioContext.Provider value={{usuario, setUsuario}}>
                {children}
            </UsuarioContext.Provider>
        </>
    )
}

export default function useUsuarioContext(){
    return useContext(UsuarioContext)
}