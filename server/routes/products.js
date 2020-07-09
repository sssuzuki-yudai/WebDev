const express = require('express');
const router = express.Router();
const Product = require('../mosdel/product');

router.get('', function(req, res) {
    Product.find({}, function(err, foundProducts) {
        return res.json(foundProducts)
    })
    // res.json({ 'ok': true })
})

router.get('/:productId', function(req, res) {
    const productId = req.params.productId
    Product.findById(productId, function(err, foundProduct) {
        if(err) {
            return res.status(422).send({errors: [{title: 'Product error', detail: 'Product not found'}]})
        }
        return res.json(foundProduct)
    })
    // res.json({ 'ok': true })
})


module.exports = router