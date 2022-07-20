const { Schema, model } = require('mongoose');

const orderSchema = Schema({
    ingredients: [{
        type: {type: String},
        amount: Number,
        price: Number
    }],
    customer: {
        email: String,
        deliveryAddress: String,
        phone: String,
        paymentType: String
    },
    price: Number,
    orderTime: { type: Date, default: Date.now }
});

module.exports.Order = model('Order', orderSchema);