import express from 'express'
import userController from './controllers/user.controllers'
import loginController from './controllers/login.controllers'
import passwordTokenController from './controllers/passwordToken.controllers'
import authMiddleware from '../middlewares/authMiddleware'

import bookController from './controllers/books.controllers';
import feedbackController from './controllers/feedbacks.controllers';
import chapterController from './controllers/chapters.controllers';
import commentController from './controllers/comments.controllers';

import plotController from './controllers/planning/plot.controllers';
import worldbuildingController from './controllers/planning/worldbuilding.controllers';
import characterController from './controllers/planning/character.controllers'; 

const router = express.Router()

router.get('/users', userController.getAllUsers) // ok
router.get('/users/:id', userController.getUserById) // ok
router.post('/users', userController.createUser) // ok
router.put('/users/:id', authMiddleware, userController.updateUser) // ok
router.delete('/users/:id', authMiddleware, userController.deleteUser) // ok

router.post('/login', loginController.login) // ok

router.post('/forgot-password', passwordTokenController.generateToken)
router.get('/reset-password/:token', passwordTokenController.verifyToken)
router.delete('/reset-password/:token', passwordTokenController.deleteToken)
router.put('/change-password/:token', authMiddleware, passwordTokenController.changePassword)

router.get('/books', authMiddleware, bookController.getAllBooks); // ok
router.get('/books/:id', authMiddleware, bookController.getBookById); // ok
router.post('/books', authMiddleware, bookController.createBook); // ok
router.put('/books/:id', authMiddleware, bookController.updateBook); // ok
router.delete('/books/:id', authMiddleware, bookController.deleteBook); // ok

router.get('/feedbacks', authMiddleware, feedbackController.getAllFeedbacks); // ok
router.get('/feedbacks/:id', authMiddleware, feedbackController.getFeedbackById); // ok
router.post('/feedbacks', authMiddleware, feedbackController.createFeedback); // ok
router.put('/feedbacks/:id', authMiddleware, feedbackController.updateFeedback); // ok
router.delete('/feedbacks/:id', authMiddleware, feedbackController.deleteFeedback); // ok

router.get('/chapters', authMiddleware, chapterController.getAllChapters); // ok
router.get('/chapters/:id', authMiddleware, chapterController.getChapterById); // ok
router.post('/chapters', authMiddleware, chapterController.createChapter); // ok
router.put('/chapters/:id', authMiddleware, chapterController.updateChapter); // ok
router.delete('/chapters/:id', authMiddleware, chapterController.deleteChapter);
 // ok
router.get('/comments', authMiddleware, commentController.getAllComments); // ok
router.get('/comments/:id', authMiddleware, commentController.getCommentById); // ok
router.post('/comments', authMiddleware, commentController.createComment); // ok
router.put('/comments/:id', authMiddleware, commentController.updateComment); // ok
router.delete('/comments/:id', authMiddleware, commentController.deleteComment); // ok

router.get('/plots', authMiddleware, plotController.getAllPlots);
router.get('/plots/:id', authMiddleware, plotController.getPlotById);
router.post('/plots', authMiddleware, plotController.createPlot);
router.put('/plots/:id', authMiddleware, plotController.updatePlot);
router.delete('/plots/:id', authMiddleware, plotController.deletePlot);

router.get('/worldbuildings', authMiddleware, worldbuildingController.getAllWorldbuildings);
router.get('/worldbuildings/:id', authMiddleware, worldbuildingController.getWorldbuildingById);
router.post('/worldbuildings', authMiddleware, worldbuildingController.createWorldbuilding);
router.put('/worldbuildings/:id', authMiddleware, worldbuildingController.updateWorldbuilding);
router.delete('/worldbuildings/:id', authMiddleware, worldbuildingController.deleteWorldbuilding);

router.get('/characters', authMiddleware, characterController.getAllCharacters);
router.get('/characters/:id', authMiddleware, characterController.getCharacterById);
router.post('/characters', authMiddleware, characterController.createCharacter);
router.put('/characters/:id', authMiddleware, characterController.updateCharacter);
router.delete('/characters/:id', authMiddleware, characterController.deleteCharacter);

export default router
