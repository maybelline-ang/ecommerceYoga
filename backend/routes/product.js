const router = require("express").Router();
const Product = require("../models/Product");
const { verifyTokenAndAdmin } = require("./verifyToken");

//////////////////////////////////////////////
//CREATE
/////////////////////////////////////////////
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

///////////////////////////////////////////
//UPDATE
///////////////////////////////////////////
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  console.log(req.body);

  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

/////////////////////////////////////////////////
//DELETE
/////////////////////////////////////////////////

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

///////////////////////////////////////////////
//GET PRODUCT
///////////////////////////////////////////////
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

/////////////////////////////////////////////////
//GET ALL PRODUCTS
////////////////////////////////////////////////
router.get("/", async (req, res) => {
  const newQuery = req.query.new;
  const queryCategory = req.query.category;
  try {
    let products;

    if (newQuery) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (queryCategory) {
      products = await Product.find({
        // if categories inside the array, fetch the products
        categories: {
          $in: [queryCategory],
        },
      });

      // if not all categories inside database
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
