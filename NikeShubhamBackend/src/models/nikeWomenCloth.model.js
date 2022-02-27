const mongoose = require("mongoose");

const womenclothSchema = new mongoose.Schema(
  {
    product_image: [{ type: String, required: true }],
    product_name: { type: String, required: true },
    product_price: { type: Number, required: true },
    product_category: { type: String, required: true },
    product_description:{type:String,required:true}
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = mongoose.model("womencloth", womenclothSchema);
