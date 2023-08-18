import service from '../services/user.services';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await service.getAllUsers();
      res.json(users);
    } catch (error) {
      console.error('Erro ao obter todos os usuários:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },
  getUserById: async (req, res) => {
    try {
      const { id } = req.params;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'ID de usuário inválido' });   
      }
      const user = await service.getUserById(id);
      res.json(user);
    } catch (error) {
      console.error('Erro ao obter usuário por ID:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },
  getUserByUsername: async (req, res) => {
    try {
      const { id } = req.params;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'ID de usuário inválido' });
      }
      const user = await service.getUserById(id);
      res.json(user);
    } catch (error) {
      console.error('Erro ao obter usuário por ID:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },
  createUser: async (req, res) => {
    try {
      const { email, password, username, role } = req.body;
      if (username === "" || username === null) {
        username = email.split('@')[0];
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const userData = { email, username, password: hashedPassword, role };
      const user = await service.createUser(userData);
      res.status(201).json(user);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  updateUser: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, email, birth, gender, zipCode, street, number, district, city, state, country } = req.body;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'ID de usuário inválido' });
      }

      console.log("Body", req.body)

      const userData = { name, email, birth, gender, zipCode, street, number, district, city, state, country };
      const updatedUser = await service.updateUser(id, req.body);

      res.json(updatedUser);
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'ID de usuário inválido' });
      }
      const deletedUser = await service.deleteUser(id);
      res.json(deletedUser);
    } catch (error) {
      console.error('Erro ao excluir usuário:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },
};

export default userController;
