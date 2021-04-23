import express from 'express'
import { createServer } from 'http'
import { Server, Socket } from 'socket.io'

import './database'
import { routes } from './routes'

const app = express()

const http = createServer(app) // Criando Protocólo HTTP
const io = new Server(http) // Criando Protocólo WebSocket

io.on('connection', (socket: Socket) => {
    console.log(`${socket.id} se conectou`)
})

app.use(express.json())

app.use(routes)

http.listen(3000, () => console.log('🚀 O servidor está rodando na porta 3000'))