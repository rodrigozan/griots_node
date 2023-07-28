import Feedback from '../models/feedbacks.models';

const feedbackService = {
  getAllFeedbacks: async () => {
    try {
      const feedbacks = await Feedback.find();
      return feedbacks;
    } catch (error) {
      console.error('Erro ao buscar os feedbacks', error);
    }
  },

  getFeedbackById: async (id) => {
    try {
      const feedback = await Feedback.findById(id);
      return feedback;
    } catch (error) {
      console.error('Erro ao buscar o feedback', error);
    }
  },

  createFeedback: async (data) => {
    try {
      const feedback = new Feedback(data);
      const savedFeedback = await feedback.save();
      return savedFeedback;
    } catch (error) {
      console.error("Luke, eu sou seu pai", error)
    }
  },

  updateFeedback: async (id, data) => {
    try {
      const feedback = await Feedback.findByIdAndUpdate(id, data, { new: true });
      return feedback;
    } catch (error) {
      console.error('Erro ao atualizar o feedback', error);
    }
  },

  deleteFeedback: async (id) => {
    try {
      const feedback = await Feedback.findByIdAndDelete(id);
      return feedback;
    } catch (error) {
      console.error('Erro ao excluir o feedback', error);
    }
  },
};

export default feedbackService;
