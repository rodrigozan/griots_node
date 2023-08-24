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
      const chapter = await Chapter.findById(id)
      return chapter;
    } catch (error) {
      console.log(error.message)
      throw error.message
    }
  }

  async getAllChapters(bookId) {
    try {
      const chapters = await Chapter.find({ book: bookId })
      return chapters;
    } catch (error) {
      console.log(error.message)
      throw error.message
    }
  }

  async updateChapter(id, data) {
    console.log("-----")
    console.log("chapterId no service", id)
    console.log("Data", data)
    try {
      const chapter = await Chapter.findByIdAndUpdate(id, data, { new: true });
      console.log("Return....", chapter)
      return chapter;
    } catch (error) {
      console.log(error.message)      
      throw error.message
    }
  }

  async deleteChapter(id) {
    try {
      const chapter = await Chapter.findByIdAndDelete(id);
      return chapter;
    } catch (error) {
      console.log(error.message)
      throw error.message
    }
  }
}

export default new ChapterService();

