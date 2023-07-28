import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config()

import loginService from '../services/login.services';

const loginController = {
  login: async (req, res) => {  
    try {
      if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ error: 'Requisição vazia' });
      }

      const { username, password, ejs } = req.body

      console.log("Requisição", req.body);
      
      const user = await loginService.getUserByUsername(username);

      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Credenciais inválidas' });
      }

      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
      });

      const data = {
        message: 'Login bem-sucedido', token
      }

      res.status(201).json({data: data});
    } catch (error) {
      console.error('Erro durante o login:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },
};

export default loginController;
