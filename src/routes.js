import express from 'express'

import upload from '../utils/upload_cover'

import userController from './controllers/user.controllers'
import loginController from './controllers/login.controllers'
import passwordTokenController from './controllers/passwordToken.controllers'
import authMiddleware from '../middlewares/authMiddleware' 

import bookController from './controllers/books.controllers'
import feedbackController from './controllers/feedbacks.controllers'
import chapterController from './controllers/chapters.controllers'
import commentController from './controllers/comments.controllers'

import plotController from './controllers/planning/plot.controllers'
import worldbuildingController from './controllers/planning/worldbuilding.controllers'
import characterController from './controllers/planning/character.controllers' 

const router = express.Router()

router.get('/users', userController.getAllUsers) // ok
router.get('/users/:id', userController.getUserById) // ok
router.post('/users', userController.createUser) // ok
router.put('/users/:id', userController.updateUser) // ok
router.delete('/users/:id', authMiddleware, userController.deleteUser) // ok

router.post('/login', loginController.login) // ok

router.post('/forgot-password', passwordTokenController.generateToken)
router.get('/reset-password/:token', passwordTokenController.verifyToken)
router.delete('/reset-password/:token', passwordTokenController.deleteToken)
router.put('/change-password/:token', authMiddleware, passwordTokenController.changePassword)

router.get('/books', bookController.getAllBooks)
router.get('/books/:id', authMiddleware, bookController.getBookById)
router.post('/books', authMiddleware, bookController.createBook)  
router.post('/books/:id/upload-image', authMiddleware, upload.single('image'), bookController.updateCoverBook)    
router.put('/books/:id', authMiddleware, bookController.updateBook)
router.delete('/books/:id', authMiddleware, bookController.deleteBook)

router.get('/books/:id/feedbacks', authMiddleware, feedbackController.getAllFeedbacks)
router.get('/books/:id/feedbacks/:id', authMiddleware, feedbackController.getFeedbackById)
router.post('/books/:id/feedbacks', authMiddleware, feedbackController.createFeedback)
router.put('/books/:id/feedbacks/:id', authMiddleware, feedbackController.updateFeedback)
router.delete('/books/:id/feedbacks/:id', authMiddleware, feedbackController.deleteFeedback)

router.get('/books/:id/chapters', chapterController.getAllChapters) 
router.get('/books/:id/chapters/:id', chapterController.getChapterById)
router.post('/books/:id/chapters', authMiddleware, chapterController.createChapter)
router.put('/books/:id/chapters/:id', authMiddleware, chapterController.updateChapter)
router.delete('/books/:id/chapters/:id', authMiddleware, chapterController.deleteChapter)

// Comments
router.get('/books/:id/chapters/:id/comments/book', commentController.getAllCommentsByBook) 
router.get('/books/:id/chapters/:id/comments/chapter', commentController.getAllCommentsByChapter) 
router.get('/books/:id/chapters/:id/comments/author', commentController.getAllCommentsByAuhor) 
router.get('/books/:id/chapters/:id/comments/:id', authMiddleware, commentController.getCommentById)
router.post('/books/:id/chapters/:id/comments', authMiddleware, commentController.createComment)
router.put('/books/:id/chapters/:id/comments/:id', authMiddleware, commentController.updateComment)
router.delete('/books/:id/chapters/:id/comments/:id', authMiddleware, commentController.deleteComment)

router.get('/plots', authMiddleware, plotController.getAllPlots) 
router.get('/plots/:id', authMiddleware, plotController.getPlotById)
router.post('/plots', authMiddleware, plotController.createPlot)
router.put('/plots/:id', authMiddleware, plotController.updatePlot)
router.delete('/plots/:id', authMiddleware, plotController.deletePlot)

router.get('/worldbuildings', authMiddleware, worldbuildingController.getAllWorldbuildings)
router.get('/worldbuildings/:id', authMiddleware, worldbuildingController.getWorldbuildingById)
router.post('/worldbuildings', authMiddleware, worldbuildingController.createWorldbuilding)
router.put('/worldbuildings/:id', authMiddleware, worldbuildingController.updateWorldbuilding)
router.delete('/worldbuildings/:id', authMiddleware, worldbuildingController.deleteWorldbuilding)

router.get('/characters', authMiddleware, characterController.getAllCharacters)
router.get('/characters/:id', authMiddleware, characterController.getCharacterById)
router.post('/characters', authMiddleware, characterController.createCharacter)
router.put('/characters/:id', authMiddleware, characterController.updateCharacter)
router.delete('/characters/:id', authMiddleware, characterController.deleteCharacter)

export default router
