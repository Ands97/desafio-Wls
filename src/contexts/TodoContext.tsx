import { createContext, useState } from "react";
import { Tasks } from '../types/Tasks'
type ChildrenType = React.PropsWithChildren<{}>;


export const TodoContext = createContext({});



export const TodoProvider = ({children}: ChildrenType)=>{
    const [showModal, setShowModal] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showUpdateButton, setShowUpdateButton] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [tasks, setTasks] = useState<Tasks[]>([]);
    const [taskId, setTaskId] = useState([])
    
    
    return(
        <TodoContext.Provider value={{
            showModal,
            setShowModal,
            showModalEdit,
            setShowModalEdit,
            showUpdateButton,
            setShowUpdateButton,
            showMenu,
            setShowMenu,
            tasks,
            setTasks,
            taskId,
            setTaskId
        }}>
            {children}
        </TodoContext.Provider>
    )
}
