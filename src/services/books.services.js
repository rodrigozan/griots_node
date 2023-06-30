import Book from '../models/books.models';

const bookService = {
  getAllBooks: async () => {
    try {
      const books = await Book.find();
      return books;
    } catch (error) {
      console.error('Erro ao buscar os livros', error);
    }
  },

  getBookById: async (id) => {
    try {
      const book = await Book.findById(id);
      return book;
    } catch (error) {
      console.error('Erro ao buscar o livro', error);
    }
  },

  createBook: async (data) => {
    try {
      const new_book = new Book(data);
      const book = await new_book.save();
      return book;
    } catch (error) {
      console.error('Erro ao criar o livro:', error);
    }
  },
  

  updateBook: async (id, data) => {
    try {
      const book = await Book.findByIdAndUpdate(id, data, { new: true });
      return book;
    } catch (error) {
      console.error('Erro ao atualizar o livro', error);
    }
  },

  deleteBook: async (id) => {
    try {
      const book = await Book.findByIdAndDelete(id);
      return book;
    } catch (error) {
      console.error('Erro ao excluir o livro', error);
    }
  },
};

export default bookService;
