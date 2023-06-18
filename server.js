const express = require('express');
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require('cors');
const productCtrl = require('./controllers/products')

// Connect to MongoDB
const connectMongo = async () => {
    try{
        const conn = mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,    
        })
        console.log(`MongoDB connected`)
    }
    catch (error){
        console.log(error);
        process.exit(1);
    }
}

app.use(cors())
app.use(express.json());

app.get('/api/items', productCtrl.getItem)
app.post('/api/new-item', productCtrl.newItem)

//Connect to MongoDB before listening
connectMongo().then(() => {
    app.listen(8080, () => {
        console.log(`Ready for Requests`)
    })
})