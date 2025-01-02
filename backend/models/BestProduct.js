const mongoose = require('mongoose');

const bestProductSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    finalPrice: { type: Number },
    isAvailable: { type: Boolean, default: true },
    weight: { type: String },
    images: { type: [String], required: true },
    thumbnail: { type: String },
    rating: { type: Number, default: 0 },
    reviews: [
        {
            userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            review: { type: String },
            rating: { type: Number },
            date: { type: Date, default: Date.now },
        }
    ],
    origin: { type: String },
    brand: { type: String },
}, { timestamps: true });

const BestProduct = mongoose.model('BestProduct', bestProductSchema);

module.exports = BestProduct;
