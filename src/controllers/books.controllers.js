import path from 'path'
import fs from 'fs'

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
      const book = await bookService.createBook(bookData);

      res.status(201).json({ data: book, message: "salve rapaziada" });
    } catch (error) {
      console.error('Erro ao criar o livro:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
      res.end()
    }
  },

  updateCoverBook: async (req, res) => {
    try {
      const bookId = req.params.bookId;
      const imagePath = req.file.path;

      await bookService.updateBookCover(bookId, imagePath)

      const imageFileName = path.basename(imagePath);
      const newImagePath = path.join(__dirname, './assets/image', imageFileName);
      await fs.rename(imagePath, newImagePath);

      res.status(201).json({ data: book, message: "salve rapaziada" });
    } catch (error) {
      console.error('Erro ao atualizar a capa do livro:', error);
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
