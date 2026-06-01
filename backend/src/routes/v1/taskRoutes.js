const express = require('express');
const { createTask, getTasks, updateTask, deleteTask } = require('../../controllers/taskController');
const authMiddleware = require('../../middleware/authMiddleware');
const { validateCreateTask, validateUpdateTask } = require('../../validators/taskValidator');
const { handleValidationErrors } = require('../../middleware/validationMiddleware');

const router = express.Router();

router.use(authMiddleware);
router.post('/', validateCreateTask, handleValidationErrors, createTask);
router.get('/', getTasks);
router.put('/:id', validateUpdateTask, handleValidationErrors, updateTask);
router.delete('/:id', deleteTask);

module.exports = router;