import { createContext, useContext, useState } from "react";

const UsuarioContext = createContext<any|undefined>(undefined)

export function UsuarioContextProvider({children}:any){

    const [usuario, _setUsuario] = useState();

    const setUsuario = (_usuario:any) => {
        _setUsuario(_usuario)
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