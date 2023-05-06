import express from 'express'
import http from 'http'
const app = express();
const server = http.createServer(app);
import { Server } from "socket.io"

const io = new Server(server);

app.get('/', (req: express.Request, res: express.Response) => {
  res.sendFile('D:/NodeJs projects/project to include in porfolio/chat-app - backend/src/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});