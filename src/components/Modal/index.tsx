import './modal.css';
import { TodoContext } from '../../contexts/todoContext';
import { useContext } from 'react';


export const Modal = () => {

    const {showModal, setShowModal}: any = useContext(TodoContext);
    
    const handleShowModal = () => {
        setShowModal(false)
    }
    

    return (
        <div className="modal" style={{display: showModal && 'flex' }}>
            <div className="modalBox">
                <h3>Criar tarefa</h3>
                <fieldset className='input'>
                    <legend>Titulo</legend>
                    <input type='text' placeholder='Titulo' />
                </fieldset>
                <fieldset className='input'>
                    <legend>Descrição</legend>
                    <input type='text' placeholder='Descrição' />
                </fieldset>
                <div className='actionButtons'>
                    <span onClick={handleShowModal}>CANCELAR</span>
                    <span>SALVAR</span>
                </div>
            </div>
        </div>
    )
}