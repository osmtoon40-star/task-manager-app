const { body, param } = require('express-validator');

const validateCreateTask = [
  body('title')
    .notEmpty().withMessage('Title is required')
    .isLength({ min: 3 }).withMessage('Title must be at least 3 characters')
];

const validateUpdateTask = [
  param('id')
    .isMongoId().withMessage('Invalid task ID'),
  
  body('title')
    .optional()
    .isLength({ min: 3 }).withMessage('Title must be at least 3 characters'),
  
  body('status')
    .optional()
    .isIn(['pending', 'in-progress', 'completed']).withMessage('Invalid status')
];

module.exports = { validateCreateTask, validateUpdateTask };