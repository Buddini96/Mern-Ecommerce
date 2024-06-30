const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { log } = require("console");
const { type } = require("os");
const { METHODS } = require("http");
const corsConfig = {
  origin: "*",
  credentials: true,
  methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
};

app.use(express.json());
app.use(cors(corsConfig));



//Database connection
mongoose.connect(
  "mongodb+srv://ecommerceMern:user123@cluster0.nrdblkk.mongodb.net/ecommerce-mern?retryWrites=true&w=majority&appName=Cluster0"
);

app.get("/", (req, res) => {
  res.send("Server is running");
});

//image storage
const storage = multer.diskStorage({
  destination: "/tmp/images",  
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage: storage });

//upload image endpoint
app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

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
    default: true,
  },
});



// product add
app.post("/addProduct", async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }

  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });
  console.log(product);
  await product.save();
  console.log("Saved product");
  res.json({
    success: true,
    name: req.body.name,
  });
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

    console.log("Updated product:", updatedProduct);
    res.json({
      success: true,
      updatedProduct,
    });
  } catch (error) {
    console.error("Error updating product:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});


// Delete products
app.delete("/deleteProduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  res.json({
    success: true,
    name: req.body.name,
  });
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
    console.error('Error fetching product details:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// get  products details
app.get("/allProducts", async (req, res) => {
  let products = await Product.find({});
  console.log("got");
  res.send(products);
});

// total products
app.get("/totalProducts", async (req, res) => {
  try {
    let totalProducts = await Product.countDocuments({});
    
    console.log("Total products counted:", totalProducts);
    
    res.send({ totalProducts: totalProducts });
  } catch (error) {
    console.error("Error counting products:", error);
    res.status(500).send("Internal Server Error");
  }
});

// total users
app.get("/totalUsers", async (req, res) => {
  try {
    let totalUsers = await User.countDocuments({});
    
    console.log("Total users counted:", totalUsers);
    
    res.send({ totalUsers: totalUsers });
  } catch (error) {
    console.error("Error counting users:", error);
    res.status(500).send("Internal Server Error");
  }
});


// get all Users
app.get("/allusers", async (req, res) => {
  let users = await User.find({});
  console.log("All Users are fetched");
  res.send(users);
});

// Delete users
app.delete('/deleteUser', async (req, res) => {
  const { name } = req.body;

  console.log('Request to delete user:', name);

  if (!name) {
    return res.status(400).json({ success: false, message: 'Name is required' });
  }

  try {
    const user = await User.findOneAndDelete({ name });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.json({
      success: true,
      name: user.name,
    });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ success: false, message: 'An error occurred while deleting the user' });
  }
});

// Schema user model
const User = mongoose.model("User", {
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Creating endpoint for registering the user
app.post("/signup", async (req, res) => {
  let check = await User.findOne({ email: req.body.email });
  if (check) {
    return res
      .status(400)
      .json({
        success: false,
        errors: "Existing user found with same email address",
      });
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

  const data = {
    user: {
      is: user.id,
    },
  };
  const token = jwt.sign(data, "secret_ecommerce_token");
  res.json({
    success: true,
    token,
  });
});

// Creating endpoint for logging in the user
app.post("/login", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    const passwordMatch = req.body.password === user.password;
    if (passwordMatch) {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, "secret_ecommerce_token");
      res.json({
        success: true,
        token,
      });
    } else {
      res.json({
        success: false,
        errors: "Incorrect password",
      });
    }
  } else {
    res.json({
      success: false,
      errors: "Incorrect email address",
    });
  }
});

// latest products
app.get("/newCollection", async (req, res) => {
  let products = await Product.find({});
  let newCollection = products.slice(1).slice(-8);
  console.log("newscollection fetched");
  res.send(newCollection);
});

// popular products
app.get("/popularProducts", async (req, res) => {
  let products = await Product.find({ category: "men" });
  let popularProducts = products.slice(0, 4);
  console.log("popular products fetched fetched");
  res.send(popularProducts);
});

// find user
const fetchUser = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res
      .status(401)
      .send({ errors: "Please authenticate using a valid login" });
  }

  try {
    const data = jwt.verify(token, "secret_ecommerce_token");
    req.user = data.user;
    next();
  } catch (error) {
    return res
      .status(401)
      .send({ errors: "Please authenticate using a valid token" });
  }
};

//add products in cart data
app.post("/addtocart", fetchUser, async (req, res) => {
  // console.log(req.body, req.user);
  // res.status(200).json({ message: "Item added to cart successfully" });
  console.log("Added", req.body.itemId);
  let userData = await User.findOne({ _id: req.user.id });
  userData.cartData[req.body.itemId] += 1;
  await User.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData }
  );
  res.send('Added');
});

// removing cart data
app.post("/removefromcart", fetchUser, async (req, res) => {
    console.log("Removed", req.body.itemId);
  let userData = await User.findOne({ _id: req.user.id });
  if (userData.cartData[req.body.itemId] > 0)
    userData.cartData[req.body.itemId] -= 1;
  await User.findOneAndUpdate( { _id: req.user.id },{ cartData: userData.cartData }
  );
  res.send('Removed');
});

// get cart data
app.post('/getcart', fetchUser, async(req, res) => {
    console.log('get cart data');
    let userData = await User.findOne({_id:req.user.id});
    res.json(userData.cartData)
})

app.listen(port, (error) => {
  if (!error) {
    console.log("Server is running on port" + port);
  } else {
    console.log("Error: " + error);
  }
});
