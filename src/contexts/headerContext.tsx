import { createContext, useState } from "react";

export const HeaderContext = createContext({});

export const HeaderProvider = ({children})=>{
    const [showHeader, setShowHeader] = useState(true);
    
    const handleAddAction = ()=>{
        setShowHeader(true)
    }
    
    return(
        <HeaderContext.Provider value={{

        }}>
            {children}
        </HeaderContext.Provider>
    )
}
