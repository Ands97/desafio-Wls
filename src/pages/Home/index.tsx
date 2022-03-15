import { Modal } from '../../components/Modal';
import { ModalEdit } from '../../components/ModalEdit';
import './home.css';
import { TodoContext } from '../../contexts/todoContext';
import { useContext, useEffect, useState } from 'react';
import { useApi } from '../../Hooks/useApi';
import { Tasks } from '../../types/Tasks';

export const Home = () => {
    // Chamada do Hook onde serão feitas as requisições
    const api = useApi();

    //States do Context
    const {
        setShowModal,
        showUpdateButton,
        setShowUpdateButton,
        setShowModalEdit,
        setShowMenu,
        showMenu,
        setTasks,
        tasks,
        setTaskId
    }: any = useContext(TodoContext);

    //State da página
    const [showLoading, setShowLoading] = useState(true);

    //Tamanho da tela para mostrar apenas no Mobile
    const x = window.screen.width;

    const showUptButton = () => {
        if (x > 500) {
            setShowUpdateButton(true)
        }
    }

    const handleModal = () => {
        setShowModal(true)
    }

    //Atualização da Task
    const handleShowModalEdit = async(id:string) => {
        setShowModalEdit(true);
        const taskItem = await api.getTaskById(id);
        setTaskId([taskItem])
    }

    //Header no mobile
    const handleMenuBurger = () => {
        if (showMenu) {
            setShowMenu(false)
        } else {
            setShowMenu(true)
        }
    }

    //Requisição de todas as Tasks
    const getTasks = async () => {
        const list = await api.getTasks();
        setShowLoading(false)
        if(list){
            setTasks(list);
        }
    }

    //Requisição para remover a task
    const removeTask = async(id: string) => {
        const remove = await api.removeTask(id);
        getTasks()
    }

    //Alteração do status da taks (de unCompleted para Completed)
    const updateStatus = async (id: string) => {
        const upt = await api.updateStatus(id)
        getTasks();
    }

    
    useEffect(() => {
        getTasks(),
        showUptButton()
    }, [tasks])


    return (
        <div className='home'>
            <div className='burger' onClick={handleMenuBurger} style={{ left: showMenu && '195px' }}>
                <img src='../../../images/burger.svg' />
            </div>
            <section>
                <div className='input'>
                    <div className='searchImg'><img src='../../../images/searchIcon.svg' /></div>
                    <input placeholder='Procurar Tarefas' />
                </div>
                <div className='taskArea'>
                    <h1>Tarefas</h1>
                    {showLoading &&
                        <div className='loaderPosition'>
                            <div className='loader'></div> 
                        </div>    
                    }
                    {tasks.map((item: Tasks, index: number) => (
                        <div className='taskBox' key={index} >
                            
                            <div className='taskTopArea' onClick={()=>handleShowModalEdit(item.guid)}>
                                <div className='taskInfo'>
                                    <span className='taskTitle'>{item.title}</span>
                                    <span>{item.description}</span>
                                </div>
                                <div className='updateTask' onClick={()=>handleShowModalEdit(item.guid)} style={{ display: showUpdateButton ? 'flex' : 'none' }}>
                                    <img src='../../../images/editTask.svg' />Atualizar tarefa
                                </div>
                            </div>
                            <div className='taskBottonArea'>
                                <div className='taskStatus' onClick={()=>updateStatus(item.guid)}>
                                    <div className='taskStatusIcon'><img src='../../../images/statusIcon.svg' /></div>
                                    {item.situation == 'uncompleted' ?
                                        <span>Em Progresso</span>
                                        :
                                        <span>Concluido</span>
                                    }
                                </div>
                                <div className='removeTask' onClick={()=>removeTask(item.guid)}><img src='../../../images/removeTask.svg' /> Remover tarefa</div>
                            </div>
                        </div>
                    ))}

                </div>
            </section>
            <div className='newTask' onClick={handleModal}>
                <img src='../../../images/newTask.svg' />Nova tarefa
            </div>
            <Modal/>
            <ModalEdit />
        </div>
    )
}

function id(id: any) {
    throw new Error('Function not implemented.');
}
