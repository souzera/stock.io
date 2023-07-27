import { createContext, useContext, useState } from "react";

const UsuarioContext = createContext<any>({})

export function UsuarioContextProvider({children}:any){

    const [usuario, _setUsuario] = useState<any|undefined>(undefined);

    const setUsuario = (usuario:any) => {
        _setUsuario(usuario)
    }

    return (
        <>
            <UsuarioContext.Provider value={{usuario, setUsuario}}>
                {children}
            </UsuarioContext.Provider>
        </>
    )
}

export function useUsuarioContext(){
    return useContext(UsuarioContext)
}