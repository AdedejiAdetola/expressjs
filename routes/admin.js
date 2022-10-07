const express = require('express');
const router = express.Router();

const path = require('path');

const rootDir = require('../utils/baseDir')

//this route is defined as /admin/add-product => GET
router.get('/add-product',(req, res, next) => {
    //  console.log('In the middle of the back-end!');
     res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
});

//this route is defined as /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;