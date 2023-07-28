import express from 'express'

import controller from '../controllers/local.controllers'
const router = express.Router()

router.get('/', controller.getLogin);  
router.get('/users', controller.getUsers);  
router.post('/login', controller.login);  
router.get('/books', controller.getAllBooks);  

export default router