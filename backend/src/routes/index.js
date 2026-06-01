const express = require('express');
const authRoutes = require('./v1/authRoutes');
const taskRoutes = require('./v1/taskRoutes');

const router = express.Router();

// Mount routes directly - NO wildcard '*' here
router.use('/auth', authRoutes);
router.use('/tasks', taskRoutes);

module.exports = router;