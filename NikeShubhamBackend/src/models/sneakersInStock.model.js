const mongoose = require("mongoose");

const sneakersinstockSchema = new mongoose.Schema(
  {
    product_image: [{ type: String, required: true }],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = mongoose.model("sneakersinstock", sneakersinstockSchema);
