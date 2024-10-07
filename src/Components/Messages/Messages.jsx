import React, { useState } from 'react'
import ChatItem from './ChatItem'

const Messages = ({ messages }) => {

    const [error, setError] = useState({text: '', isError: false})

    const handleSubmitFormSendMess = (evento) => { /* asociada al evento del formulario */

        evento.preventDefault() /* previene el comportamiento por defecto del evento */

        /* capturar los valores del formulario con la clase FormData */
        const formulario = new FormData(evento.target)
        const mensaje = formulario.get('mensaje')
        if (!mensaje) {
            setError({isError: true, text: 'Mensaje vacío'})
        }
        else{ /* si no hay error, vuelvo al estado inicial */
            setError({text: '', isError: false})
            const nuevoMensaje = {author: 'Chiara Macaione', text: mensaje, id: 5, hour: '20:22'}
            messages.push(nuevoMensaje)
        }
    }

    /* En tu App.jsx por cada elemento del array deberás mostrar un mensaje con la estructura que se ve en la imagen. */

    return (
        <div>
            <div className="mensajes">
                {
                    messages.map(
                        (message) => {
                            return (
                                <ChatItem key={message.id} author={message.author} text={message.text} />
                            )
                        }
                    )
                }
            </div>
            {/* Formulario para enviar mensajes */}
            <form onSubmit={handleSubmitFormSendMess}>
                <input placeholder='Ingrese texto' name='mensaje' />
                {error.isError && <span>{error.text}</span>}
                <button type='submit'>Enviar mensaje</button>
            </form>


        </div>

    )
}

export default Messages