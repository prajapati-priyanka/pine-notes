import { createContext,useContext } from "react";




const ArchieveContext = createContext();

const ArchieveProvider = ({children}) =>{
    return (
        <ArchieveContext.Provider>
            {children}
        </ArchieveContext.Provider>
    )
}

const useArchieve = () => useContext(ArchieveContext);

export {ArchieveProvider, useArchieve}
