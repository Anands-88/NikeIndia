const express = require("express");
const router = express.Router();
const crudController = require("./crudController")
const kidsshoe = require("../models/nikekidsShoes.model");


router.post("",crudController(kidsshoe).post)
router.get("", crudController(kidsshoe).getAll)
router.get("/:id", crudController(kidsshoe).getOne);
router.patch("/:id", crudController(kidsshoe).patch);
router.delete("/:id", crudController(kidsshoe).delete);


module.exports = router;