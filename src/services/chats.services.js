import { io } from '../../utils/socket.io.js'
import Post from '../models/posts.models';

class ChatService {
  async sendMessage(message, author) {
    const newMessage = new Post({
      content: message,
      author,
      likes: 0,
    });

    await newMessage.save();

    io.emit('chat message', newMessage);

    return newMessage;
  }
}

export default new ChatService();
