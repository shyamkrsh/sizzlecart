const Product = require('../models/Product');
const TrendingProduct = require('../models/TrendingProduct');
const BestProduct = require('../models/BestProduct');

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