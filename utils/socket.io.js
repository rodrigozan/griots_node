import { Server as SocketServer } from 'socket.io';

export default function configureSocket(server) {
  const io = new SocketServer(server);

  io.on('connection', (socket) => {
    console.log('Novo usuário conectado');

    socket.on('chat message', (message) => {
      io.emit('chat message', message);
    });

    socket.on('disconnect', () => {
      console.log('Usuário desconectado');
    });

    socket.on('get-data', (callback) => {
      // Aqui você pode adicionar a lógica para responder a solicitações GET
      const data = { example: 'data' };
      callback(data);
    });
  });
}
