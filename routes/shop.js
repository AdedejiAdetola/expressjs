const express = require('express');
const router = express.Router();

const path = require('path');

const adminData = require('./admin');

const rootDir = require('../utils/baseDir');

router.get('/', (req, res, next) => {
    console.log('shop', adminData.products)
    const products = adminData.products;
    // console.log('In the middle of the second back-end!');
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    res.status(200).render('shop', { 
        pageTitle : 'iShop Page',
        prods: products,
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
});

module.exports = router;