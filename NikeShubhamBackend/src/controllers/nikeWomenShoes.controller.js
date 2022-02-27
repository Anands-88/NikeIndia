const express = require("express");
const router = express.Router();
const crudController = require("./crudController")
const womenShoes = require("../models/nikeWomenShoes.model");


router.post("",crudController(womenShoes).post)
router.get("", crudController(womenShoes).getAll)
router.get("/:id", crudController(womenShoes).getOne);
router.patch("/:id", crudController(womenShoes).patch);
router.delete("/:id", crudController(womenShoes).delete);


module.exports = router;