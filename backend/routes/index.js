const express = require('express');
const router = express.Router();

const productRoutes = require('./productRoutes');
const authRoutes = require('./authRoutes');

router.use('/products', productRoutes);
router.use('/auth', authRoutes);


module.exports = router;
