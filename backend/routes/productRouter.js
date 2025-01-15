const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get("/trending", productController.getTrendingProducts);
router.get("/best", productController.getBestProducts);
router.get("/all", productController.getAllProducts);
router.get("/:id", productController.getOneProduct);



module.exports = router;