const express = require("express");
const router = express.Router();

router.get("",(req,res) =>
{
    const message = "Welcome to Nike India"
    return res.render("index",{message});
})

module.exports = router;