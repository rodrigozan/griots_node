import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()


import service from '../services/user.services'
import login_service from '../services/login.services'
import user_service from '../services/user.services'
import books_service from '../services/books.services'

const localController = {
    getUsers: async (req, res) => {
        try {
            const users = await service.getAllUsers()
            res.render('user', { users: users, title: "Página de Usuários" })
        } catch (error) {
            console.error('Erro ao obter todos os usuários:', error)
            res.status(500).json({ error: 'Erro interno do servidor' })
        }
    },
    getLogin: async (req, res) => {
        try {
            res.render('index', { title: "Login" })
        } catch (error) {
            console.error('Erro ao obter todos os usuários:', error)
            res.status(500).json({ error: 'Erro interno do servidor' })
        }
    },
    login: async (req, res) => {
        try {
            if (req.body == "" && req.body == null) {
                return res.status(404).json({ error: 'Requisição vazia' })
            }

            const { username, password } = req.body

            const user = await login_service.getUserByUsername(username)

            console.log(user.username)

            if (!user) {
                return res.status(404).json({ error: 'Usuário não encontrado' })
            }

            const isPasswordValid = await bcrypt.compare(password, user.password)

            if (!isPasswordValid) {
                return res.status(401).json({ error: 'Credenciais inválidas' })
            }

            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
                expiresIn: '30d',
            })

            res.redirect(`/local/books?token=${token}&username=${user.username}`)
        } catch (error) {
            console.error('Erro durante o login:', error)  
            res.status(500).json({ error: 'Erro interno do servidor' })
        }
    },
    getAllBooks: async (req, res) => {
        try {
            const books = await books_service.getAllBooks()
            books.map(async (item) => {
                const author = await user_service.getUserById(item.author.toString())
                console.log(item._id.toString())
                console.log(item.title)
                item.author = author.username
            })
            res.render("books", { books: books, title: "Livros" })
            res.end()
        } catch (error) {
            console.error('Erro ao buscar os livros:', error)
            res.status(500).json({ error: 'Erro interno do servidor' })
        }
    },
}

export default localController