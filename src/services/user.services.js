import User from '../models/user.models';

const userService = {
  getAllUsers: async () => {
    try {
      const users = await User.find();
      return users;
    } catch (error) {
      console.error('Erro ao obter todos os usuários:', error);
      throw new Error('Erro interno do servidor');
    }
  },
  getUserById: async (id) => {
    try {
      const user = await User.findById(id);
      if (user) {
        return user;
      } else {
        throw new Error('Usuário não encontrado');
      }
    } catch (error) {
      console.error('Erro ao obter usuário por ID:', error);
      throw new Error('Erro interno do servidor');
    }
  },
  createUser: async (data) => {
    try {
      const new_user = new User(data);
      const user = await new_user.save();
      return user;
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      throw new Error('Erro interno do servidor');
    }
  },
  updateUser: async (id, data) => {
    try {
      const user = await User.findByIdAndUpdate(id, data, { new: true });
      if (user) {
        return user;
      } else {
        throw new Error('Usuário não encontrado');
      }
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      throw new Error('Erro interno do servidor');
    }
  },
  deleteUser: async (id) => {
    try {
      const user = await User.findByIdAndDelete(id);
      if (user) {
        return user;
      } else {
        throw new Error('Usuário não encontrado');
      }
    } catch (error) {
      console.error('OH no!!! no!no!no!no!no!:', error);
    }
  },
};

export default userService;
