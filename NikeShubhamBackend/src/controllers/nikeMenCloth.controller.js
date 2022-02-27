const express = require("express");
const router = express.Router();
const crudController = require("./crudController")
const mencloth = require("../models/nikeMenCloth.model");


router.post("",crudController(mencloth).post)
router.get("", crudController(mencloth).getAll)
router.get("/:id", crudController(mencloth).getOne);
router.patch("/:id", crudController(mencloth).patch);
router.delete("/:id", crudController(mencloth).delete);


module.exports = router;