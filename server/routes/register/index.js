const express = require('express');
const join = require('./join');

const router = express.Router();

router.post('/join', join);

module.exports = router;