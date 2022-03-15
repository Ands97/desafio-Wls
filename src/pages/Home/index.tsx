import { Modal } from '../../components/Modal';
import { ModalEdit } from '../../components/ModalEdit';
import './home.css';
import { TodoContext } from '../../contexts/todoContext';
import { useContext } from 'react';

export const Home = ()=>{
    const {
        showModal,
        setShowModal, 
        showMenuTask, 
        setShowMenuTask,
        setShowModalEdit,
        showModalEdit,
        setShowMenu,
        showMenu
    }: any = useContext(TodoContext);

    const handleModal = ()=>{
        setShowModal(true)
    }

    const handleMenuTask = () => {
        if(showMenuTask){
            setShowMenuTask(false)
        }else{
            setShowMenuTask(true)
        }
    }

    const handleShowModalEdit = () => {
        setShowModalEdit(true);
        setShowMenuTask(false);
    }

    const handleMenuBurger = ()=>{
        if(showMenu){
            setShowMenu(false) 
        }else{
            setShowMenu(true)
        }
        
    }
    return(
        <div className='home'>
            <div className='burger' onClick={handleMenuBurger} style={{left: showMenu && '195px'}}> 
                <img src='../../../images/burger.svg'/>
            </div>
            <section>
                <div className='input'>
                    <div className='searchImg'><img src='../../../images/searchIcon.svg'/></div>
                    <input placeholder='Procurar Tarefas'/>
                </div>
                <div className='taskArea'>
                    <h1>Tarefas</h1>
                    <div className='taskBox'>
                        <div className='taskTopArea'>
                            <div className='taskInfo'>
                                <span className='taskTitle'>Nome</span>
                                <span>Descrição da tarefa.</span>
                            </div>
                            <div className='taskIconEdit' onClick={handleMenuTask}><img src='../../../images/iconEdit.svg'/></div>
                            <div className='menuTask' style={{display: showMenuTask ? 'flex' : 'none'}}>
                                <div onClick={handleShowModalEdit}><img src='../../../images/editTask.svg'/>Atualizar tarefa</div>
                                <div><img src='../../../images/removeTask.svg'/> Remover tarefa</div>
                            </div>
                        </div>
                        <div className='taskBottonArea'>
                            <div className='taskStatus'>
                                <div className='taskStatusIcon'><img src='../../../images/statusIcon.svg'/></div>
                                <span>Concluído</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='newTask' onClick={handleModal}>
                <img src='../../../images/newTask.svg'/>Nova tarefa
            </div>
            <Modal/>
            <ModalEdit/>
        </div>
    )
}