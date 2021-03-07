const express = require('express');
const router = express.Router();
const shopC = require('../controllers/shopC')

router.get('/',shopC.getIndex );

router.get('/product',shopC.getProducts );

router.get('/product/:productId',shopC.getProduct );

router.get('/categories/:categoryId',shopC.getProductByCategoryId );

router.get('/details',shopC.getDetails );

router.get('/cart',shopC.getCart );

router.get('/orders',shopC.getOrders );

module.exports = router;