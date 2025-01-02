const Product = require('../models/Product');

module.exports.getTrendingProducts = async (req, res) => {
    const products = await Product.find({}).limit(4);
    res.status(200).json(products);
}