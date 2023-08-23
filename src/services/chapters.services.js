import Chapter from '../models/chapters.models';

class ChapterService {
  async createChapter(data) {
    try {
      const new_chapter = new Chapter(data);
      console.log("chegou aqui")
      const chapter = await new_chapter.save();
      return chapter;
    } catch (error) {
      console.log("Não deu para cadastrar o capítulo no controller: ", error.message)
    }
  }

  async getChapterById(id) {
    try {
      const chapter = await Chapter.findById(id).populate('book');
      return chapter;
    } catch (error) {
      throw error;
    }
  }

  async getAllChapters() {
    try {
      const chapters = await Chapter.find().populate('book');
      return chapters;
    } catch (error) {
      throw error;
    }
  }

  async updateChapter(id, data) {
    try {
      const chapter = await Chapter.findByIdAndUpdate(id, data, { new: true });
      return chapter;
    } catch (error) {
      throw error;
    }
  }

  async deleteChapter(id) {
    try {
      const chapter = await Chapter.findByIdAndDelete(id);
      return chapter;
    } catch (error) {
      throw error;
    }
  }
}

export default new ChapterService();

