const express = require('express');
const cors = require('cors');
const compression = require('compression');
const orderRouter = require('./routers/orderRouters');

// app configuration
const app = express();

app.use(compression())
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// route setup
app.use('/orders/', orderRouter);


module.exports = app;