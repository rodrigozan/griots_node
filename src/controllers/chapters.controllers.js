import chapterService from '../services/chapters.services';

const chapterController = {
  getAllChapters: async (req, res) => {
    try {
      const chapters = await chapterService.getAllChapters(req.params.id);
      res.json(chapters);
    } catch (error) {
      console.error('Erro ao buscar os capítulos:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  getChapterById: async (req, res) => {
    try {
      const chapter = await chapterService.getChapterById(req.params.id);
      if (!chapter) {
        return res.status(404).json({ error: 'Capítulo não encontrado' });
      }
      res.json(chapter);
    } catch (error) {
      console.error('Erro ao buscar o capítulo:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  createChapter: async (req, res) => {
    try {
      const chapter = await chapterService.createChapter(req.params.id, req.body);
      res.status(201).json(chapter);
    } catch (error) {
      console.error('Erro ao criar o capítulo:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  updateChapter: async (req, res) => {
    try {
      const { id } = req.params;
      const chapterData = req.body;
      const updatedChapter = await chapterService.updateChapter(id, chapterData);
      res.json(updatedChapter);
    } catch (error) {
      console.error('Erro ao atualizar o capítulo:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  deleteChapter: async (req, res) => {
    try {
      const { id } = req.params;
      console.log(req.body);
      console.log('---')
      console.log(req.params);
      // const deletedChapter = await chapterService.deleteChapter(`${id}`);
      // res.json(deletedChapter);
    } catch (error) {
      console.error('Erro ao excluir o capítulo:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },
};

export default chapterController;
