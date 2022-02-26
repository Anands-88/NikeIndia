const express = require("express");
const router = express.Router();
const crudController = require("./crudController")
const menShoes = require("../models/nikeMenShoes.model");


router.post("",crudController(menShoes).post)
router.get("", crudController(menShoes).getAll)
router.get("/:id", crudController(menShoes).getOne);
router.patch("/:id", crudController(menShoes).patch);
router.delete("/:id", crudController(menShoes).delete);


module.exports = router;
