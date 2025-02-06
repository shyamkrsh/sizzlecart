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
        const product = await Product.findById(id)
        if (!product) {
            throw new Error("Product does not exists");
        }
        res.status(200).json({
            data: product,
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
        let products = await Product.find({ _id: {$in : itemIds}});
        if(products.length == 0){
            products = await TrendingProduct.find({ _id: {$in : itemIds}})
            if(products.length == 0){
                products = await Product.find({ _id: {$in : itemIds}});
                if(products.length == 0){
                    throw new Error("Products not available in cart");
                }
            }
        }
        res.status(200).json({
            message: 'Sending data...',
            data: products,
            success: true,
            error: false,
        })
    }catch(err){
        res.json({
            data: [],
            success: false,
            error: true,
        })
    }
}