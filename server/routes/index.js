const express = require('express');
const registerRouter = require('./register');
const usersRouter = require('./users')

const router = express.Router();

router.use('/register', registerRouter);
router.use('/users', usersRouter)

module.exports = router;