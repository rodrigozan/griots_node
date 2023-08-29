import chapterService from '../services/chapters.services'

class ChapterController {
  async createChapter(req, res) {
    try {
      const chapterData = req.body
      const chapter = await chapterService.createChapter(chapterData)
      res.status(201).json(chapter)
    } catch (error) {
      console.log("Não deu para cadastrar o capítulo no controller: ", error.message)
      res.status(404).json({ error: `Não deu para cadastrar o capítulo no controller: ${error.message}` })
    }
  }

  async getChapterById(req, res) {
    try {
      const chapterId = req.params.id
      const chapter = await chapterService.getChapterById(chapterId)
      if (chapter) {
        res.json(chapter)
      } else {
        res.status(404).json({ error: 'Chapter not found' }) 
      }
    } catch (error) {
      res.status(500).json({ error: 'Could not retrieve chapter' })
    }
  }

  async getAllChapters(req, res) {
    try {
      const bookId = req.params.id
      const chapters = await chapterService.getAllChapters(bookId)
      res.status(201).json(chapters)
    } catch (error) {
      res.status(500).json({ error: 'Could not retrieve chapters' })   
    }
  }

  async updateChapter(req, res) {
    try {
      const chapterId = req.params.id
      console.log("chapterId", chapterId)
      const chapterData = req.body
      const updatedChapter = await chapterService.updateChapter(chapterId, chapterData)
      if (updatedChapter) {
        res.json(updatedChapter)
      } else {
        res.status(404).json({ error: 'Chapter not found' })
      }
    } catch (error) {
      res.status(500).json({ error: 'Could not update chapter' })
    }
  }

  async deleteChapter(req, res) {
    try {
      const chapterId = req.params.id
      console.log("chapterId", chapterId)
      const deletedChapter = await chapterService.deleteChapter(chapterId)
      if (deletedChapter) {
        console.log('entrou aqui sô');
        res.json(deletedChapter)
      } else {
        console.log('vishi, zoou cara');
        res.status(404).json({ error: `Não achei o cap` })
      }
    } catch (error) {
      console.log('ai ai ai ai ai... ', error.message);
      res.status(500).json({ error: `ai ai ai ai ai... ${error.message}` })
    }
  }
}

export default new ChapterController()

