const express = require("express");
const router = express.Router();
const crudController = require("./crudController");
const Cart = require("../models/cart.model")

router.post("", crudController(Cart).post);
// router.get("", crudController(Cart).get);

router.get("", async (req, res) => {
    try {
        const cartItem = await Cart.find().populate("product_id").lean().exec();

        res.send(cartItem);
    }
    catch (err) {
        res.status(500).send()
    }
});
router.get("/:id", crudController(Cart).getOne);
router.delete("/:id", crudController(Cart).delete);


module.exports = router;
