const express = require('express');
const router = express.Router();
const adminC = require('../controllers/adminC');
const auth = require('../middlewares/auth');

// /admin/add-product=> GET
router.get('/add-product', auth,
/**we can write many middleware functions to protect links */ adminC.addProduct);

router.post('/add-product', adminC.postProduct);

router.get('/product-list/:productid', adminC.editProduct);

router.post('/product-list', adminC.postEditProduct);

router.get('/product-list', adminC.getProductsList);

router.post('/delete-product',adminC.deleteProduct)

module.exports = router;

/**
    
 */
