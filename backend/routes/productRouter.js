const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get("/trending", productController.getTrendingProducts);
router.get("/best", productController.getBestProducts);
router.get("/all", productController.getAllProducts);
router.post("/get-carts", productController.getCartProducts);
router.get("/:id", productController.getOneProduct);
router.post("/:id/order", productController.createOrder);
router.post("/:id/verify", productController.verifyPayment);



module.exports = router;