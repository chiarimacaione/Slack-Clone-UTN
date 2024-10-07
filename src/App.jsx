import React from "react"
import Channels from "./Components/Channels/Channels"
import Messages from "./Components/Messages/Messages"
import CreateWorkSpace from "./Components/Workspaces/CreateWorkSpace"

function App() {

  const messages = [
    {
      hour: '11:06 PM',
      author: 'Pepe Suarez',
      text: 'Hola a todos!',
      id: 1
    },
    {
      hour: '11:05 AM',
      author: 'Martina Sánchez',
      text: 'Qué tal?',
      id: 2
    },
    {
      hour: '11:17 AM',
      author: 'Juancito López',
      text: 'Muy mal, no se nada de HTML para el examen!!!',
      id: 3
    }
  ]

  const channels = [
    {
      id: 1,
      nombre: 'Consultas'
    },
    {
      id: 2,
      nombre: 'General'
    },
    {
      id: 3,
      nombre: 'Tareas'
    }
  ]

  return (
    <>
      <h1>Chat</h1>
      <Messages messages={messages}></Messages>
      <h1>Canales</h1>
      <Channels channels={channels}></Channels>
      <h1>Espacios de Trabajo</h1>
      <CreateWorkSpace/>
    </>
  )

}

export default App