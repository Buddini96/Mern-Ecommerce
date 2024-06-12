const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { log } = require("console");

app.use(express.json());
app.use(cors());

//Database connection
mongoose.connect(
  "mongodb+srv://ecommerceMern:user123@cluster0.nrdblkk.mongodb.net/ecommerce-mern?retryWrites=true&w=majority&appName=Cluster0"
);

app.get("/", (req, res) => {
    res.send("Server is running");
})

//image storage
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
})

const upload = multer({storage: storage});

//upload image endpoint
app.use('/images', express.static('upload/images'))
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})

//schema for creating products
const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        required: true,
    },
})

app.post('/addProduct', async(req, res) => {
    const product = new Product({
        id: req.body.id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
        available: req.body.available,
    })
    try {
        await product.save();
        res.json({
            success: 1,
            message: "Product added successfully"
        })
    } catch (error) {
        res.json({
            success: 0,
            message: "Error: " + error
        })
    }
})


app.listen(port, (error) => {
    if(!error) {
        console.log("Server is running on port" + port);
    }else {
        console.log("Error: " + error);
    }
})