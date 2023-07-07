import User from '../models/user.models';

const loginService = {
  getUserByUsername: async (username) => {
    try {
      const user = await User.findOne({ username });
      return user;
    } catch (error) {
      console.error('Erro ao obter usuário por nome de usuário:', error);
      throw new Error('Erro interno do servidor');
    }
  },
};

export default loginService;
