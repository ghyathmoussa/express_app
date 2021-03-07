const express = require('express');
const router = express.Router();

const accountC = require('../controllers/accountC');

router.get('/login',accountC.getLogin);
router.post('/login',accountC.postLogin);

router.get('/register',accountC.getRegister);
router.post('/register',accountC.postRegister);

router.get('/logout',accountC.getLogout);
router.post('/logout',accountC.postLogout);

router.get('/reset-password',accountC.getResetPassword);
router.post('/reset-password',accountC.postResetPassword);


module.exports = router
