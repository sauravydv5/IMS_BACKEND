const express = require("express");

const router = express.Router();

const Products = require("../Models/Prouducts");

// Inserting(Creating Data)

router.post("/insertproduct", async (req, res) => {
  const { ProductName, ProductPrice, ProductBarcode } = req.body;
  try {
    const pre = await Products.findOne({ ProductBarcode: ProductBarcode });
    console.log(pre);

    if (pre) {
      res.status(422).json({ message: "Product Already Added!!" });
    } else {
      const addProduct = new Products({
        ProductName,
        ProductPrice,
        ProductBarcode,
      });

      await addProduct.save();
      res
        .status(201)
        .json({ message: "Data Insert Sucessfully!!", addProduct });
      console.log(addProduct);
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!!", error });
  }
});

//Getting(Reading) DATA:

router.get("/products", async (req, res) => {
  try {
    const getProducts = await Products.find({});
    console.log(getProducts);
    res.status(200).json(getProducts); // just send array
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!!", error });
  }
});

// Getting(Reading) Indivisual Data:

router.get("/products/:id", async (req, res) => {
  try {
    const getProduct = await Products.findById(req.params.id);
    console.log(getProduct);
    res.status(201).json({ message: "Data Fetch Success!!", getProduct });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!!", error });
  }
});

// Editing(Updating)  Data

router.put("/updateproduct/:id", async (req, res) => {
  const { ProductName, ProductPrice, ProductBarcode } = req.body;

  try {
    const updateProducts = await Products.findByIdAndUpdate(
      req.params.id,
      {
        ProductName,
        ProductPrice,
        ProductBarcode,
      },
      { new: true }
    );
    console.log("Data Updated!!");
    res
      .status(201)
      .json({ message: "Data Update Sucessfully!!!", updateProducts });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!!", error });
  }
});

// Deleting Data

router.delete("/deleteproduct/:id", async (req, res) => {
  try {
    const deleteProduct = await Products.findByIdAndDelete(req.params.id);
    console.log("Data Deleted!!");
    res
      .status(201)
      .json({ message: "Data deleted Sucessfully!!", deleteProduct });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!!", error });
  }
});

module.exports = router;
