
const express = require("express");

const router = express.Router();

router.get("/sales",(req,res) =>
{
    return res.render("sales");
})


module.exports = router;