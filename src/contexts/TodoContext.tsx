import { createContext, useState } from "react";

type ChildrenType = React.PropsWithChildren<{}>;


export const TodoContext = createContext({});



export const TodoProvider = ({children}: ChildrenType)=>{
    const [showHeader, setShowHeader] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showMenuTask, setShowMenuTask] = useState(false);
    const [showMenu, setShowMenu] = useState(false)
    
    
    return(
        <TodoContext.Provider value={{
            showModal,
            setShowModal,
            showModalEdit,
            setShowModalEdit,
            showMenuTask,
            setShowMenuTask,
            showMenu,
            setShowMenu
        }}>
            {children}
        </TodoContext.Provider>
    )
}
