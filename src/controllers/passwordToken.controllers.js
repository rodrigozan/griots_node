import crypto from 'crypto';
import passwordTokenService from '../services/passwordToken.services.js';

const passwordTokenController = {
  generateToken: async (req, res) => {
    try {
      const { email } = req.body;

      // Gerar um token aleatório
      const token = crypto.randomBytes(20).toString('hex');

      // Salvar o token no banco de dados associado ao usuário
      const savedToken = await passwordTokenService.createToken(email, token);

      res.json(savedToken);
    } catch (error) {
      console.error('Erro ao gerar token de redefinição de senha:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  verifyToken: async (req, res) => {
    try {
      const { token } = req.params;

      // Buscar o token no banco de dados
      const passwordToken = await passwordTokenService.findByToken(token);

      if (!passwordToken) {
        return res.status(404).json({ error: 'Token inválido ou expirado' });
      }

      // Token válido
      res.json({ message: 'Token válido' });
    } catch (error) {
      console.error('Erro ao verificar token de redefinição de senha:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  deleteToken: async (req, res) => {
    try {
      const { token } = req.params;

      // Excluir o token do banco de dados
      const deletedToken = await passwordTokenService.deleteToken(token);

      if (!deletedToken) {
        return res.status(404).json({ error: 'Token não encontrado' });
      }

      res.json({ message: 'Token excluído com sucesso' });
    } catch (error) {
      console.error('Erro ao excluir token de redefinição de senha:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  changePassword: async (req, res) => {
    try {
      const { token } = req.params;
      const { password } = req.body;

      // Buscar o token no banco de dados
      const passwordChangeToken = await passwordChangeTokenService.findByToken(token);

      if (!passwordChangeToken) {
        return res.status(404).json({ error: 'Token inválido ou expirado' });
      }

      // Atualizar a senha do usuário associado ao token
      const updatedUser = await userService.updateUserPassword(passwordChangeToken.user, password);

      // Excluir o token do banco de dados
      await passwordChangeTokenService.deleteToken(token);

      res.json(updatedUser);
    } catch (error) {
      console.error('Erro ao trocar a senha:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },
};

export default passwordTokenController;
