const express = require('express');
const router = express.Router();

const path = require('path');

const rootDir = require('../utils/baseDir');

router.get('/', (req, res, next) => {
    // console.log('In the middle of the second back-end!');
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;