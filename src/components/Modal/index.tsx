import './modal.css';
import { TodoContext } from '../../contexts/todoContext';
import { useContext, useState } from 'react';
import { useApi } from '../../Hooks/useApi';


export const Modal = () => {
    // Chamada do Hook onde serão feitas as requisições
    const api = useApi();

    //States do context
    const {
        showModal,
        setShowModal,
    }: any = useContext(TodoContext);

    //States do componente
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [messageTitle, setMessageTitle] = useState(false);
    const [messageDescription, setMessageDescription] = useState(false);

    //Função para fechar o modal de nova tarefa
    const handleShowModal = () => {
        setShowModal(false)
        setTitle('');
        setDescription('');
        setMessageTitle(false);
        setMessageDescription(false);
    }

    //Envio de nova tarefa e validando os campos
    const sendTask = async () => {
        if (!title) {
            setMessageTitle(true)
        } else if (!description) {
            setMessageDescription(true);
        } else {
            const send = api.newTask(title, description);
            setShowModal(false)
            setTitle('');
            setDescription('');
            setMessageTitle(false);
            setMessageDescription(false);
        }
    }


    return (
        <div className="modal" style={{ display: showModal && 'flex' }}>
            <div className="modalBox">
                <h3>Criar tarefa</h3>
                <fieldset className='input'>
                    <legend>Titulo</legend>
                    <input type='text' placeholder='Titulo' value={title} onChange={e => setTitle(e.target.value)} />
                </fieldset>
                {messageTitle &&
                    <span className='warning'>Você deve digitar um titulo</span>
                }
                <fieldset className='input'>
                    <legend>Descrição</legend>
                    <input type='text' placeholder='Descrição' value={description} onChange={e => setDescription(e.target.value)} />
                </fieldset>
                {messageDescription &&
                    <span className='warning'>Você deve digitar uma descrição</span>
                }
                <div className='actionButtons'>
                    <span onClick={handleShowModal}>CANCELAR</span>
                    <span onClick={sendTask}>SALVAR</span>
                </div>
            </div>
        </div>
    )
}