import './modalEdit.css'
export const ModalEdit = () => {
    return (
        <div className="modalEdit">
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
                    <span>CANCELAR</span>
                    <span>SALVAR</span>
                </div>
            </div>
        </div>
    )
}