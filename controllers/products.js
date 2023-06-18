const mongoose = require("mongoose");
const Products = require("../models/products");

const newItem = async (req, res) => {
    try{
         const { title, img, category, price } = req.body
 
         //Store new user in DB
         const newProduct = new Products({
            _id: new mongoose.Types.ObjectId(),
             title: title,
             img: img,
             category: category,
             price: price,
           });
 
         //Adding new document to DB
         await newProduct.save()
 
         //Sucess
         res.status(200).json("Product Added")
    }catch(err){
        res.status(500).json({message: err})
    }
}

const getItem = async (req, res) => {
    try{
        Products.find().lean().sort({ created_at: -1 })
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({message: err})
        });
    } catch(err){
        res.status(500).json({message: err})
    }
}

module.exports = { newItem, getItem }