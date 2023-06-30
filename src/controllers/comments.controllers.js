import commentService from '../services/comments.services';

const commentController = {
  getAllComments: async (req, res) => {
    try {
      const comments = await commentService.getAllComments();
      res.json(comments);
    } catch (error) {
      console.error('Erro ao buscar os comentários:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  getCommentById: async (req, res) => {
    try {
      const { id } = req.params;
      const comment = await commentService.getCommentById(id);
      if (!comment) {
        return res.status(404).json({ error: 'Comentário não encontrado' });
      }
      res.json(comment);
    } catch (error) {
      console.error('Erro ao buscar o comentário:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  createComment: async (req, res) => {
    try {
      const commentData = req.body;
      const comment = await commentService.createComment(commentData);
      res.status(201).json(comment);
    } catch (error) {
      console.error('Erro ao criar o comentário:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  updateComment: async (req, res) => {
    try {
      const { id } = req.params;
      const commentData = req.body;
      const updatedComment = await commentService.updateComment(id, commentData);
      res.json(updatedComment);
    } catch (error) {
      console.error('Erro ao atualizar o comentário:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  deleteComment: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedComment = await commentService.deleteComment(id);
      res.json(deletedComment);
    } catch (error) {
      console.error('Erro ao excluir o comentário:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },
};

export default commentController;
