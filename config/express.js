import express from 'express';
import http from 'http'
import cors from 'cors';
import path from 'path'
import socketIO from 'socket.io'

import connectDatabase from './database';
import router from '../src/routes'
import local from '../src/router/local.routes'

const app = express();

connectDatabase();

const server = http.createServer(app)

const io = socketIO(server, {
    transports: ['polling'],
    cors: {
        cors: {
            origin: "http://localhost:4000"
        }
    }
})

io.on('connection', (socket) => {
    console.log('A user is connected');

    socket.on('message', (message) => {
        console.log(`message from ${socket.id} : ${message}`);
    })

    socket.on('disconnect', () => {
        console.log(`socket ${socket.id} disconnected`);
    })
})

export { io }

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../src/views'));

app.use('/api', router);
app.use('/local', local)

export default app