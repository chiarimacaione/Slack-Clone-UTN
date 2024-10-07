import React from 'react'

const CreateWorkSpace = () => {

    const handleSubmCreateWS = (evento) => {
        evento.preventDefault()
        const form = new FormData(evento.target)
        const nombreWS = form.get('WSname')
        console.log(`Nombre del WS: ${nombreWS}`)
        const nombreCH = form.get('CHname')
        console.log(`Nombre del Canal: ${nombreCH}`)
    }


    return (
        <div>
            <h3>Crear Workspace</h3>

            <form onSubmit={handleSubmCreateWS}>
                <p>Nombre del Workspace</p>
                <input placeholder='Nombre del Workspace' name='WSname' />

                <p>Nombre del Canal</p>
                <input placeholder='Nombre del Canal' name='CHname' />

                <button type='submit'>crear</button>
            </form>

        </div>


    )
}

export default CreateWorkSpace