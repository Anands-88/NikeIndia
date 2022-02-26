const express = require("express");
const router = express.Router();
const crudController = require("./crudController")
const sneakersfeed = require("../models/sneakersFeed.model");


router.post("",crudController(sneakersfeed).post)
router.get("", crudController(sneakersfeed).getAll)
router.get("/:id", crudController(sneakersfeed).getOne);
router.patch("/:id", crudController(sneakersfeed).patch);
router.delete("/:id", crudController(sneakersfeed).delete);


module.exports = router;