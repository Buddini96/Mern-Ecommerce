const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

//Database connection
mongoose.connect(
  "mongodb+srv://ecommerceMern:user123@cluster0.nrdblkk.mongodb.net/ecommerce-mern?retryWrites=true&w=majority&appName=Cluster0"
);

app.get("/", (req, res) => {
  res.send("Server is running");
});

//image storage
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

//upload image endpoint
app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
  });
});

//schema for creating products
const Product = mongoose.model("Product", {
  id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  new_price: { type: Number, required: true },
  old_price: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  available: { type: Boolean, default: true },
});

// product add
app.post("/addProduct", async (req, res) => {
  let products = await Product.find({});
  let id = products.length > 0 ? products.slice(-1)[0].id + 1 : 1;

  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });

  await product.save();
  res.json({ success: true, name: req.body.name });
});

// edit product
app.put("/editProduct/:id", async (req, res) => {
  const productId = req.params.id;
  
  try {
    const updatedProduct = await Product.findOneAndUpdate(
      { id: productId },
      {
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
      },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    res.json({ success: true, updatedProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// Delete products
app.delete("/deleteProduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  res.json({ success: true, name: req.body.name });
});

// get product acording to product id
app.get('/getProduct/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findOne({ id: productId });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// get  products details
app.get("/allProducts", async (req, res) => {
  let products = await Product.find({});
  res.send(products);
});

// total products
app.get("/totalProducts", async (req, res) => {
  try {
    let totalProducts = await Product.countDocuments({});
    res.send({ totalProducts: totalProducts });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

// total users
app.get("/totalUsers", async (req, res) => {
  try {
    let totalUsers = await User.countDocuments({});
    res.send({ totalUsers: totalUsers });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

// get all Users
app.get("/allusers", async (req, res) => {
  let users = await User.find({});
  res.send(users);
});

// Delete users
app.delete('/deleteUser', async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ success: false, message: 'Name is required' });
  }

  try {
    const user = await User.findOneAndDelete({ name });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.json({ success: true, name: user.name });
  } catch (error) {
    res.status(500).json({ success: false, message: 'An error occurred while deleting the user' });
  }
});

// Schema user model
const User = mongoose.model("User", {
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  cartData: { type: Object },
  date: { type: Date, default: Date.now },
});

// Creating endpoint for registering the user
app.post("/signup", async (req, res) => {
  let check = await User.findOne({ email: req.body.email });
  if (check) {
    return res.status(400).json({ success: false, errors: "Existing user found with same email address" });
  }

  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }

  const user = new User({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });

  await user.save();

  const data = { user: { id: user.id } };
  const token = jwt.sign(data, "secret_ecommerce_token");
  res.json({ success: true, token });
});

// Creating endpoint for logging in the user
app.post("/login", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    const passwordMatch = req.body.password === user.password;
    if (passwordMatch) {
      const data = { user: { id: user.id } };
      const token = jwt.sign(data, "secret_ecommerce_token");
      res.json({ success: true, token });
    } else {
      res.json({ success: false, errors: "Incorrect password" });
    }
  } else {
    res.json({ success: false, errors: "Incorrect email address" });
  }
});

// latest products
app.get("/newCollection", async (req, res) => {
  let products = await Product.find({});
  let newCollection = products.slice(1).slice(-8);
  res.send(newCollection);
});

// popular products
app.get("/popularProducts", async (req, res) => {
  let products = await Product.find({ category: "men" });
  let popularProducts = products.slice(0, 4);
  res.send(popularProducts);
});

// find user
const fetchUser = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).send({ errors: "Please authenticate using a valid login" });
  }

  try {
    const data = jwt.verify(token, "secret_ecommerce_token");
    req.user = data.user;
    next();
  } catch (error) {
    return res.status(401).send({ errors: "Please authenticate using a valid token" });
  }
};

//add products in cart data
app.post("/addtocart", fetchUser, async (req, res) => {
  let userData = await User.findOne({ _id: req.user.id });
  userData.cartData[req.body.itemId] += 1;
  await User.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
  res.send('Added');
});

// removing cart data
app.post("/removefromcart", fetchUser, async (req, res) => {
  let userData = await User.findOne({ _id: req.user.id });
  if (userData.cartData[req.body.itemId] > 0)
    userData.cartData[req.body.itemId] -= 1;
  await User.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
  res.send('Removed');
});

// get cart data
app.post('/getcart', fetchUser, async(req, res) => {
  let userData = await User.findOne({_id:req.user.id});
  res.json(userData.cartData);
})

module.exports = app;
