import bookService from '../services/books.services';

const bookController = {
  getAllBooks: async (req, res) => {
    try {
      const books = await bookService.getAllBooks();
      res.status(201).json(books);
    } catch (error) {
      console.error('Erro ao buscar os livros:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  getBookById: async (req, res) => {
    try {
      const { id } = req.params;
      const book = await bookService.getBookById(id);
      if (!book) {
        return res.status(404).json({ error: 'Livro não encontrado' });
      }
      res.status(201).json(book);
    } catch (error) {
      console.error('Erro ao buscar o livro:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  createBook: async (req, res) => {
    try {
      const bookData = req.body;
      console.log("Book data controller",bookData)
      const book = await bookService.createBook(bookData);
      res.status(201).json({data:book});
    } catch (error) {
      console.error('Erro ao criar o livro:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  updateBook: async (req, res) => {
    try {
      const { id } = req.params;
      const bookData = req.body;
      const updatedBook = await bookService.updateBook(id, bookData);
      res.json(updatedBook);
    } catch (error) {
      console.error('Erro ao atualizar o livro:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  deleteBook: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedBook = await bookService.deleteBook(id);
      res.json(deletedBook);
    } catch (error) {
      console.error('Erro ao excluir o livro:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },
};

export default bookController;
