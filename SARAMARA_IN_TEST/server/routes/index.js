const express = require('express');
const registerRouter = require('./register');

const router = express.Router();

router.use('/register', registerRouter);

module.exports = router;