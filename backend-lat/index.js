const express = require('express')
const httpServer = require('http')
const cors = require('cors')
const socketIO = require('socket.io')

const PORT = process.env.PORT || 2021

const app = express()
app.use(express.json())
app.use(cors)

const server = httpServer.createServer(app)
const io = socketIO(server)


let arrMsg =[]
let user = []

app.get('/', (req, res) => res.status(200).send('<h4>Cobacoba Chat API</h4>'))

io.on('connection', socket => {
    //untuk membuat koneksi, atau join koneksi
    socket.on('JoinChat', data => {
        console.log(socket.id, data)
        io.emit("notif", `has Joined chat, and Your ID is ${socket.id}`)
    })
    socket.on("chatMessage",chat=>{
        arrMsg.push(chat)
        io.emit("updateMessage", arrMsg)
    })
    //untuk keluar koneksi
    socket.on('disconnect', () => {

    })
})

server.listen(PORT, () => console.log("Connect to chat API", PORT))
