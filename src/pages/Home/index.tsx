import { Modal } from '../../components/Modal';
import { ModalEdit } from '../../components/ModalEdit';
import './home.css';

export const Home = ()=>{
    return(
        <div className='home'>
            <div className='burger'> 
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
                            <div className='taskIconEdit'><img src='../../../images/iconEdit.svg'/></div>
                        </div>
                        <div className='taskBottonArea'>
                            <div className='taskStatus'>
                                <div className='taskStatusIcon'><img src='../../../images/statusIcon.svg'/></div>
                                <span>Concluído</span>
                            </div>
                        </div>
                    </div>
                    <div className='taskBox'>
                        <div className='taskTopArea'>
                            <div className='taskInfo'>
                                <span className='taskTitle'>Nome</span>
                                <span>Descrição da tarefa.</span>
                            </div>
                            <div className='taskIconEdit'><img src='../../../images/iconEdit.svg'/></div>
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
            <div className='newTask'>
                <img src='../../../images/newTask.svg'/>Nova tarefa
            </div>
            <Modal/>
            <ModalEdit/>
        </div>
    )
}