const express = require('express');

const PageRouter = express.Router();

const merchandiseModel = require('../model/merchandises');


PageRouter.get('/' , (req , res)=>{
    const page = Number(req.query.page);
    const pageSize = Number(req.query.pageSize);

    console.log(page);
    console.log(pageSize);

    merchandiseModel.find( {})
    .sort({ price: -1 })
    .limit(Number(pageSize))
    .skip((Number(page) - 1)*Number(pageSize))
    .then(merchandiseList =>{
        // console.log(merchandiseList);
        merchandiseModel.count({}).then(total =>{
            res.json({
                success: true,
                totalPage: Math.ceil(total/Number(pageSize)),
                data: merchandiseList,
            })
            
        })
            
    }).catch(error => {
        console.log(error);
        res.status(500).json({
            success: false,
            error,
        })
    })
})

module.exports = PageRouter;