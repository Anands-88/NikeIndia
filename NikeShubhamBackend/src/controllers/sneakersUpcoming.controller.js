const express = require("express");
const router = express.Router();
const crudController = require("./crudController")
const sneakersupcoming = require("../models/sneakersUpcoming.model")


router.post("",crudController(sneakersupcoming).post)
router.get("", crudController(sneakersupcoming).getAll)
router.get("/:id", crudController(sneakersupcoming).getOne);
router.patch("/:id", crudController(sneakersupcoming).patch);
router.delete("/:id", crudController(sneakersupcoming).delete);


module.exports = router;