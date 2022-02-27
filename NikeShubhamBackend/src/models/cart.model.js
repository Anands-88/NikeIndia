const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: "menshoe", required: true }
},
    {
        timestamps: true,
        versionKey: false

    });

module.exports = mongoose.model("cart_products", cartSchema);
