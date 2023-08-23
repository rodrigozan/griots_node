import Book from '../models/books.models';

const chapterService = {
  getAllChapters: async (bookId) => {
    try {
      const book = await Book.findById(bookId);
      return book.chapters;
    } catch (error) {
      throw error;
    }
  },

  getChapterById: async (bookId) => {
    try {
      const book = await Book.findById(bookId);

      const chapter = book.chapters._id;

      return chapter;
    } catch (error) {
      throw error;
    }
  },

  createChapter: async (bookId, chapterData) => {
    try {
      const book = await Book.findById(bookId);
      console.log("Eita lelê, olhao book ai: ", book)

      const newChapter = { ...chapterData };
      book.chapters.push(newChapter);      
      return await book.save();;
    } catch (error) {
      throw error;
    }
  },

  updateChapter: async (bookId, chapterId, chapterData) => {
    // try {
    //   const chapter = await Chapter.findByIdAndUpdate(id, data, { new: true });
    //   return chapter;
    // } catch (error) {
    //   console.error('Erro ao atualizar o capítulo', error);
    // }
    try {
      const book = await Book.findById(bookId);
      if (!book) {
        throw new Error('Book not found');
      }

      const chapter = book.chapters.id(chapterId);
      if (!chapter) {
        throw new Error('Chapter not found');
      }

      chapter.set(chapterData);
      await book.save();

      return chapter;
    } catch (error) {
      throw error;
    }
  },

  deleteChapter: async (bookId, chapterId) => {
    try {
      const book= await Book.findById(bookId)
       .then(success => {
          console.log(success)
       })
       .catch(err => console.error('Erro ao excluir o capítulo:', err.message, bookId))
      

      const chapter = book.chapters.id(chapterId);
      if (!chapter) {
        throw new Error('Chapter not found');
      }

      chapter.remove();
      await book.save();

      return chapter;
    } catch (error) {
      console.error('Erro ao excluir o capítulo:', error.message);
    }
  },
};

export default chapterService;
