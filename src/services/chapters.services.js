import Chapter from '../models/chapters.models';

const chapterService = {
  getAllChapters: async () => {
    try {
      const chapters = await Chapter.find();
      return chapters;
    } catch (error) {
      console.error('Erro ao buscar os capítulos', error);
    }
  },

  getChapterById: async (id) => {
    try {
      const chapter = await Chapter.findById(id);
      return chapter;
    } catch (error) {
      console.error('Erro ao buscar o capítulo', error);
    }
  },

  createChapter: async (data) => {
    try {
      const new_chapter = new Chapter(data);
      const chapter = await new_chapter.save();
      return chapter;
    } catch (error) {
      console.error("Kamen Raiiiidaaaa Decade", error)
    }
  },

  updateChapter: async (id, data) => {
    try {
      const chapter = await Chapter.findByIdAndUpdate(id, data, { new: true });
      return chapter;
    } catch (error) {
      console.error('Erro ao atualizar o capítulo', error);
    }
  },

  deleteChapter: async (id) => {
    try {
      const chapter = await Chapter.findByIdAndDelete(id);
      return chapter;
    } catch (error) {
      console.error('Erro ao excluir o capítulo', error);
    }
  },
};

export default chapterService;
