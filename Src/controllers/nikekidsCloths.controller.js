const express = require("express");
const router = express.Router();
const crudController = require("./crudController")
const kidscloth = require("../models/nikekidsCloths.model");


router.post("",crudController(kidscloth).post)
router.get("", crudController(kidscloth).getAll)
router.get("/:id", crudController(kidscloth).getOne);
router.patch("/:id", crudController(kidscloth).patch);
router.delete("/:id", crudController(kidscloth).delete);


module.exports = router;