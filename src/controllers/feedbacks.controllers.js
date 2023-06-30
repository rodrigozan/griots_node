import feedbackService from '../services/feedbacks.services';

const feedbackController = {
  getAllFeedbacks: async (req, res) => {
    try {
      const feedbacks = await feedbackService.getAllFeedbacks();
      res.json(feedbacks);
    } catch (error) {
      console.error('Erro ao buscar os feedbacks:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  getFeedbackById: async (req, res) => {
    try {
      const { id } = req.params;
      const feedback = await feedbackService.getFeedbackById(id);
      if (!feedback) {
        return res.status(404).json({ error: 'Feedback não encontrado' });
      }
      res.json(feedback);
    } catch (error) {
      console.error('Erro ao buscar o feedback:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  createFeedback: async (req, res) => {
    try {
      const feedbackData = req.body;
      const feedback = await feedbackService.createFeedback(feedbackData);
      res.status(201).json(feedback);
    } catch (error) {
      console.error('Erro ao criar o feedback:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  updateFeedback: async (req, res) => {
    try {
      const { id } = req.params;
      const feedbackData = req.body;
      const updatedFeedback = await feedbackService.updateFeedback(id, feedbackData);
      res.json(updatedFeedback);
    } catch (error) {
      console.error('Erro ao atualizar o feedback:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  deleteFeedback: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedFeedback = await feedbackService.deleteFeedback(id);
      res.json(deletedFeedback);
    } catch (error) {
      console.error('Erro ao excluir o feedback:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },
};

export default feedbackController;
