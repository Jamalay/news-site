const {Router} = require('express');
const { commentsController } = require('../controllers/comments.controller');

const router = Router();

router.post('/Comments', commentsController.addCommentToNews);
router.delete('/Comments/:id', commentsController.deleteComment);
router.get('/Comments/news/:id', commentsController.getAllCommentsFromNews);

module.exports = router;