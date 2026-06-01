const express = require('express');
const authRoutes = require('./authRoutes');
const taskRoutes = require('./taskRoutes');

const router = express.Router();

// Mount route groups
router.use('/auth', authRoutes);   // All auth routes start with /auth
router.use('/tasks', taskRoutes);   // All task routes start with /tasks

module.exports = router;