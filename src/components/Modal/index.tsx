import './modal.css'
export const Modal = () => {
    return (
        <div className="modal">
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
                    <span>CANCELAR</span>
                    <span>SALVAR</span>
                </div>
            </div>
        </div>
    )
}