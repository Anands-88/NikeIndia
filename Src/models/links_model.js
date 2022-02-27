const mongoose = require("mongoose");

const linkschema = new mongoose.Schema()

module.exports = mongoose.model("links",linkschema)