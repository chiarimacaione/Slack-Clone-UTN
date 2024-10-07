import React from 'react'

const Channels = ({channels}) => {


    /* En tu app.jsx por cada elemento del array de canales deberas mostrar el canal con la estructura de la imagen */

    return (
            channels.map(
                (channel) => {
                    return (
                        <div key={channel.id}>
                            <a href='#'>{channel.nombre}</a>
                        </div>
                    )
                }
            )
    )
}

export default Channels