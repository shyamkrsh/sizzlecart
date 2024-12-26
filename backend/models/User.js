const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  otp: { type: String },
  phone: { type: String },
  addresses: [
    {
      street: String,
      city: String,
      state: String,
      postalCode: String,
      country: String,
      isDefault: { type: Boolean, default: false },
    }
  ],
  orders: [
    {
      orderId: String,
      orderDate: Date,
      totalAmount: Number,
      status: String,
    }
  ],
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  cart: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: { type: Number, default: 1 },
    }
  ],
  isAdmin: { type: Boolean, default: false },
  profileImage: { type: String },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
