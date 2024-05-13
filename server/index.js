import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'

const app = express()

const server = createServer(app)

const io = new Server(server, {
    cors: {
        origin: '*',
    }
})

io.on('connection', socket => {
    console.log('connected', socket.id)

    socket.on('disconnect', () => console.log('disconnected', socket.id))

    socket.on('share', data => {
        console.log('share', data)

        socket.broadcast.emit('share', data)
    })
})

server.listen(3000, () => console.log('server up'))