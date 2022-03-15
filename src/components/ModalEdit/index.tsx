import './modalEdit.css';
import { TodoContext } from '../../contexts/todoContext';
import { useContext } from 'react';


export const ModalEdit = () => {

    const {showModalEdit, setShowModalEdit}: any = useContext(TodoContext);

    const handleShowModalEdit = () => {
        setShowModalEdit(false)
    }
    return (
        <div className="modalEdit" style={{display: showModalEdit ? 'flex' : "none"}}>
            <div className="modalEditBox">
                <h3>Criar tarefa</h3>
                <fieldset className='inputEdit'>
                    <legend>Titulo</legend>
                    <input type='text' placeholder='Titulo' />
                </fieldset>
                <fieldset className='inputEdit'>
                    <legend>Descrição</legend>
                    <input type='text' placeholder='Descrição' />
                </fieldset>
                <div className='statusEditBox'>
                    <div className='statusEdit selected'>Em progresso</div>
                    <div className='statusEdit'>Concluído</div>
                </div>
                <div className='actionButtonsEdit'>
                    <span onClick={handleShowModalEdit}>CANCELAR</span>
                    <span>SALVAR</span>
                </div>
            </div>
        </div>
    )
}