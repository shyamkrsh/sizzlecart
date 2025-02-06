const Product = require('../models/Product');
const TrendingProduct = require('../models/TrendingProduct');
const BestProduct = require('../models/BestProduct');
const http_status = require('http-status');

module.exports.getTrendingProducts = async (req, res) => {
    const products = await TrendingProduct.find({}).limit(4);
    res.status(200).json(products);
}

module.exports.getBestProducts = async (req, res) => {
    const products = await BestProduct.find({}).limit(4);
    res.status(200).json(products);
}

module.exports.getAllProducts = async (req, res) => {
    const products = await Product.find({});
    console.log(products);
    res.status(200).json(products);
}

module.exports.getOneProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const results = await Promise.all([
            Product.findById(id),
            TrendingProduct.findById(id),
            BestProduct.findById(id)
        ]);
        const allProducts = results.filter(product => product !== null);
        if (allProducts.length === 0) {
            throw new Error("Product not found in any collection");
        }
        console.log(allProducts[0]);
        res.status(200).json({
            data: allProducts[0],
            success: true,
            error: false,
        })
    } catch (err) {
        res.json({
            message: 'Bad Request',
            data: null,
            success: false,
            error: true,
        })
    }
}

module.exports.getCartProducts = async (req, res) => {
    const items = req.body.data;
    try {
        const itemIds = items.map(item => item.product_id);
        const [products, trendingProducts, bestProducts] = await Promise.all([
            Product.find({ _id: { $in: itemIds } }),
            TrendingProduct.find({ _id: { $in: itemIds } }),
            BestProduct.find({ _id: { $in: itemIds } })
        ]);
        const allProducts = [...products, ...trendingProducts, ...bestProducts];
        res.status(200).json({
            message: 'Sending data...',
            data: allProducts,
            success: true,
            error: false,
        })
    } catch (err) {
        res.json({
            data: [],
            success: false,
            error: true,
        })
    }
}