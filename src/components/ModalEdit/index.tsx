import './modalEdit.css';
import { TodoContext } from '../../contexts/todoContext';
import { useContext, useEffect, useState } from 'react';
import { useApi } from '../../Hooks/useApi';
import { Tasks } from '../../types/Tasks';

export const ModalEdit = () => {
    const api = useApi()
    const { showModalEdit, setShowModalEdit, taskId, setTaskId }: any = useContext(TodoContext);
    const [titleField, setTitleField] = useState('');
    const [descriptionField, setDescriptionField] = useState('');
    const [selected, setSelected] = useState('selected');
    const [unSelected, setUnSelected] = useState('');
    const [situation, setSituation] = useState('uncompleted')

    const handleShowModalEdit = () => {
        setShowModalEdit(false)
    }
    const handleSelected = () => {
        setUnSelected('')
        setSelected('selected')
        
    }
    const handleUnSelected = () => {
        setUnSelected('selected')
        setSelected('')
        setSituation('completed')
    }
    const sendUpdate = async (id: string, title: string, description: string) => {
        if(titleField === ''){
            setTitleField(title)
            
        }else if(descriptionField === ''){
            setDescriptionField(description)
        }
        const upt = await api.updateTask(id, titleField, descriptionField, situation)
        handleShowModalEdit()
    }

    return (
        <div className="modalEdit" style={{ display: showModalEdit ? 'flex' : "none" }}>
            {taskId.map((item: Tasks, index: number) => (
                <div className="modalEditBox" key={index}>
                    <h3>Atualizar tarefa</h3>
                    <fieldset className='inputEdit'>
                        <legend>Titulo</legend>
                        <input type='text' placeholder={item.title} value={titleField} onChange={e => setTitleField(e.target.value)} />
                    </fieldset>
                    <fieldset className='inputEdit'>
                        <legend>Descrição</legend>
                        <input type='text' placeholder={item.description} value={descriptionField} onChange={e => setDescriptionField(e.target.value)} />
                    </fieldset>
                    <div className='statusEditBox'>
                        <div className={`statusEdit ${selected}`} onClick={handleSelected}>Em progresso</div>
                        <div className={`statusEdit ${unSelected}`} onClick={handleUnSelected}>Concluído</div>
                    </div>
                    <div className='actionButtonsEdit'>
                        <span onClick={handleShowModalEdit}>CANCELAR</span>
                        <span onClick={() => sendUpdate(item.guid, item.title, item.description)}>SALVAR</span>
                    </div>
                </div>
            ))}


        </div>


    )
}