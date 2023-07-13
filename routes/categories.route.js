const {Router} = require('express');
const { categoryController } = require('../controllers/categories.controller');

const router = Router();

router.post('/Categories', categoryController.addCategory);
router.delete('/Categories/:id', categoryController.deleteCategory);
router.get('/Categories', categoryController.getAllCategories);

module.exports = router;