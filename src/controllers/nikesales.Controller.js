const express = require("express");
const router = express.Router();
const crudController = require("./crudController")
const sale = require("../models/nikesales.model");


router.post("",crudController(sale).post)
router.get("", crudController(sale).getAll)
router.get("/:id", crudController(sale).getOne);
router.patch("/:id", crudController(sale).patch);
router.delete("/:id", crudController(sale).delete);


module.exports = router;
