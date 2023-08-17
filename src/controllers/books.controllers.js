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
      const data = await bookService.createBook(bookData);

      res.status(201).json(data);
    } catch (error) {
      console.error('Erro ao criar o livro:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
      res.end()
    }
  },

  // updateCoverBook: async (req, res) => {
  //   try {
  //     const bookId = req.params.id;
  //     const imagePath = req.file.path;

  //     console.log(bookId)

  //     await bookService.updateBookCover(bookId, imagePath)

  //     const imageFileName = path.basename(imagePath)
  //     const newImagePath = path.join(__dirname, './assets/image', imageFileName);
  //     await fs.rename(imagePath, newImagePath);

  //     res.status(201).json({ data: book, message: "salve rapaziada" });
  //   } catch (error) {
  //     console.error('Erro ao atualizar a capa do livro:', error);
  //     res.status(500).json({ error: 'Erro interno do servidor' });
  //   }
  // },

  updateCoverBook: async (req, res) => {
    try {
      const bookId = req.params.id;
      const imagePath = req.file.path;

      const image = imagePath.replace('/app', '')
  
      console.log({"id do livro": bookId, "imagem path": image});
  
      const updatedBook = await bookService.updateBookCover(bookId, imagePath.replace('/app', ''))
      .then(success => console.log("livro atualizado com sucesso", success))
      .catch(error => console.log("hum... tá tenso", error))
  
      if (!updatedBook) {
        return res.status(404).json({ error: 'Livro não encontrado' });
      }
  
      const imageFileName = path.basename(imagePath);
      console.log("image filename", imageFileName)
      const newImagePath = path.join(__dirname, './assets/image', imageFileName);
  
      const img = await fs.promises.rename(imagePath, newImagePath);
      console.log("Atualizando o nome do diretório", img)
  
      res.status(201).json({ data: updatedBook, message: "Capa do livro atualizada com sucesso" });
    } catch (error) {
      console.error('Erro ao atualizar a capa do livro:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },
  

  updateBook: async (req, res) => {
    try {
      const { id } = req.params;
      const bookData = req.body;
      const data = await bookService.updateBook(id, bookData);
      res.status(201).json(data);
    } catch (error) {
      console.error('Erro ao atualizar o livro:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  deleteBook: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await bookService.deleteBook(id);
      res.status(200).json(data);
    } catch (error) {
      console.error('Erro ao excluir o livro:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },
};

export default bookController;
