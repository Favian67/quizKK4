const quizController = require('../controllers/quiz');
const router = require('express').Router();

router.post('/', quizController.create);
router.get('/', quizController.getAll);
