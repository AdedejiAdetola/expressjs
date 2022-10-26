const express = require('express');
const router = express.Router();

const path = require('path');

const rootDir = require('../utils/baseDir');
const products = [];


//this route is defined as /admin/add-product => GET
router.get('/add-product',(req, res, next) => {
    //  console.log('In the middle of the back-end!');
     res.status(200).render('add-product', { pageTitle: 'oAdd-products Page'});
});

//this route is defined as /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    
    products.push({ title: req.body.title});
    // console.log('admin',products);
    res.redirect('/');
});

exports.routes = router;
exports.products = products;