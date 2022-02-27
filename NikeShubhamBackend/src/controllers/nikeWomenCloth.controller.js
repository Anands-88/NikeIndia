const express = require("express");
const router = express.Router();
const crudController = require("./crudController")
const womenCloth = require("../models/nikeWomenCloth.model");


router.post("",crudController(womenCloth).post)
router.get("", crudController(womenCloth).getAll)
router.get("/:id", crudController(womenCloth).getOne);
router.patch("/:id", crudController(womenCloth).patch);
router.delete("/:id", crudController(womenCloth).delete);


module.exports = router;