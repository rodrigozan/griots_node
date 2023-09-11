import { io } from '../../config/express';
import chatService from '../services/chats.services';

class ChatController {
  async sendMessage(req, res) {
    const { message, author } = req.body;

    try {
      const newMessage = await chatService.sendMessage(message, author);
      io.emit('chat-message', newMessage)
      return res.status(201).json(newMessage);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao enviar a mensagem' });
    }
  }
}

export default new ChatController();
