const Product = require('../models/Product');
const TrendingProduct = require('../models/TrendingProduct');
const BestProduct = require('../models/BestProduct');
const Razorpay = require("razorpay");
const crypto = require("crypto");
const Order = require("../models/Order");

const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
})

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

module.exports.createOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const results = await Promise.all([
            Product.findById(id),
            TrendingProduct.findById(id),
            BestProduct.findById(id)
        ])
        const products = results.filter(product => product != null);
        if (products.length === 0) {
            throw new Error("Product not found in any collection");
        }
        const options = {
            amount : Number((products[0].finalPrice + 10) * 100),
            currency: 'INR',
            receipt: crypto.randomBytes(10).toString('hex'),
        }

        razorpayInstance.orders.create(options, (error, orders) => {
            if (error) {
                console.log(error);
                res.status(500).json({ message: "Something Went Wrong!" })
            }
            console.log(orders);
            res.status(200).json({ data: orders });
        })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error!" });
        console.log(error);
    }
}

module.exports.verifyPayment = async (req, res) => {
    try {
        const { id } = req.params;
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, inputData } = req.body;
        const results = await Promise.all([
            Product.findById(id),
            TrendingProduct.findById(id),
            BestProduct.findById(id) 
        ])
        const products = results.filter(product => product != null);
        if (products.length === 0) {
            throw new Error("Product not found in any collection");
        }
        const sign = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSign = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(sign.toString())
            .digest('hex');
        const isAuthentic = expectedSign === razorpay_signature;
        if (isAuthentic) {

            
            const order = new Order({
                user: req.userId,
                items: {
                    products : id,
                    
                }
            })

            

           console.log("Input Data - ", inputData);
            res.status(201).json({
                message: "New Application created",
                data: [],
                error: false,
                success: true,
            })
        }
        
    } catch (err) {
        res.json({
            message: err.message || err,
            data: [],
            error: true,
            success: false,
        })
    }
}