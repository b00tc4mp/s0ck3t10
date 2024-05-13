import './App.css'
import { io } from 'socket.io-client'

const socket = io('ws://localhost:3000')

socket.on('connect', () => {
  console.log(socket.id)

  socket.on('share', data => {
    const { socketId, message } = data

    if (!socketId || socketId === socket.id)
      console.log(message)
  })
})

function App() {
  const shareMessage = event => {
    event.preventDefault()

    const form = event.target

    const socketId = form.socketId.value
    const message = form.message.value

    const data = { socketId, message }

    console.log('share', data)

    socket.emit('share', data)
  }

  return <>
    <h1>hello client</h1>

    <form onSubmit={shareMessage}>
      <input type="text" name="socketId" placeholder="socketId" />
      <input type="text" name="message" placeholder="message" />
      <button type="submit">Share</button>
    </form>
  </>
}

export default App
