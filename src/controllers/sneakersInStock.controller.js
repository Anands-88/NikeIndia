const express = require("express");
const router = express.Router();
const crudController = require("./crudController")
const sneakersinstock = require("../models/sneakersInStock.model")


router.post("",crudController(sneakersinstock).post)
router.get("", crudController(sneakersinstock).getAll)
router.get("/:id", crudController(sneakersinstock).getOne);
router.patch("/:id", crudController(sneakersinstock).patch);
router.delete("/:id", crudController(sneakersinstock).delete);


module.exports = router;