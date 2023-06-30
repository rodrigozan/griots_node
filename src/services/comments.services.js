import Comment from '../models/comments.models';

const commentService = {
  getAllComments: async () => {
    try {
      const comments = await Comment.find();
      return comments;
    } catch (error) {
      console.error('Erro ao buscar os comentários');
    }
  },

  getCommentById: async (id) => {
    try {
      const comment = await Comment.findById(id);
      return comment;
    } catch (error) {
      console.error('Erro ao buscar o comentário', error);
    }
  },

  createComment: async (data) => {
    try {
      const new_comment = new Comment(data);
      const comment = await new_comment.save();
      return comment;
    } catch (error) {
      console.error("Kamen Raiiiidaaaa Decade", error)
    }
  },

  updateComment: async (id, data) => {
    try {
      const comment = await Comment.findByIdAndUpdate(id, data, { new: true });
      return comment;
    } catch (error) {
      console.error('Erro ao atualizar o comentário', error);
    }
  },

  deleteComment: async (id) => {
    try {
      const comment = await Comment.findByIdAndDelete(id);
      return comment;
    } catch (error) {
      console.error('Erro ao excluir o comentário', error);
    }
  },
};

export default commentService;
