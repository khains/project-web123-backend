const express = require('express');
const ApiRouter =  express.Router();

const userRouter = require('./user');
const authRouter =  require('./auth');
const cartRouter = require('./cart');
const merchandiseRouter = require('./merchandise');
const pageRouter = require("./page");

ApiRouter.get('/' , (req,res)=>{
    res.send('Shop API! ');
})

ApiRouter.use('/merchandise', merchandiseRouter);
ApiRouter.use('/auth', authRouter);
ApiRouter.use('/cart', cartRouter);

ApiRouter.use('/user', userRouter);
ApiRouter.use('/page', pageRouter);


module.exports = ApiRouter;