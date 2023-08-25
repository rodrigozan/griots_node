import commentService from '../services/comments.services';

const commentController = {
  getAllCommentsByBook: async (req, res) => {
    const fullUrl = req.originalUrl
    const ids = fullUrl.match(/\/([a-f0-9]{24})\//g).map(id => id.replace(/\//g, ''))
    const id = ids[0]
    try {
      const comments = await commentService.getAllCommentsByBook(id);
      res.json(comments);
    } catch (error) {
      console.error('Erro ao buscar os comentários:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  getAllCommentsByChapter: async (req, res) => {
    const fullUrl = req.originalUrl
    const ids = fullUrl.match(/\/([a-f0-9]{24})\//g).map(id => id.replace(/\//g, ''))
    const id = ids[1]
    try {
      const comments = await commentService.getAllCommentsByChapter(id);
      console.log("Rolou os comments: ",comments)
      res.status(200).json(comments);
    } catch (error) {
      console.error('Erro ao buscar os comentários:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  getAllCommentsByAuhor: async (req, res) => {
    const author = req.body.author
    try {
      const comments = await commentService.getAllCommentsByAuhor(author)
      res.json(comments);
    } catch (error) {
      console.error('Erro ao buscar os comentários:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  getCommentById: async (req, res) => {
    try {
      const id = req.params.id
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
      const id = req.params.id
      const commentData = req.body;
      const comment = await commentService.createComment(id, commentData);
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
