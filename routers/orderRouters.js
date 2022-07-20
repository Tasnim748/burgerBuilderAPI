const express = require('express');
const { Order } = require('../models/order');
const router = express.Router();

// route functions
const newOrder = async (req, res) => {
    const order = new Order(req.body);
    try {
        await order.save();
        return res.status(201).send("order placed successfully!");
    } catch(err) {
        return res.status(400).send('something went wrong!');
    }
}

const orderList = async (req, res) => {
    const orders = await Order.find({'customer.email': req.query.userEmail})
        .sort({orderTime: -1});
    return res.send(orders);
}

router.route('/')
    .get(orderList)
    .post(newOrder);

module.exports = router;