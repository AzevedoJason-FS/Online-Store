const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true,
    },
    img:{
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Products", productsSchema);