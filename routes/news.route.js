const { Router } = require('express');
const { newsController } = require('../controllers/news.controller');

const router = Router();

router.get('/News', newsController.getAllNews);
router.get('/News/:id', newsController.getNews);
router.get('/News/category/:id', newsController.getAllNewsInCategory);
router.patch('/News/:id', newsController.changeNews);
router.delete('/News/:id', newsController.deleteNews);
router.post('/News', newsController.addNews);

module.exports = router;