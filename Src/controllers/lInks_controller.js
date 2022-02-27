
const links = require("../models/links_model")

const express = require("express");

const router = express.Router();

router.get("/cart",(req,res) =>
{
    return res.render("cart");
})

router.get("/kids_clothing",(req,res) =>
{
    return res.render("kids_clothing");
})

router.get("/customize",(req,res) =>
{
    return res.render("customize");
})

router.get("/join_us",(req,res) =>
{
    return res.render("join_us");
})

router.get("/kids",(req,res) =>
{
    return res.render("kids");
})

router.get("/men_clothing",(req,res) =>
{
    return res.render("men_clothing");
})

router.get("/men",(req,res) =>
{
    return res.render("men");
})

router.get("/men_shoes",(req,res) =>
{
    return res.render("men_shoes");
})

router.get("/product_show",(req,res) =>
{
    return res.render("product_show");
})

router.get("/shoes2",(req,res) =>
{
    return res.render("shoes2");
})

router.get("/sneakers",(req,res) =>
{
    return res.render("sneakersfeed");
})

router.get("/sneakersinstock",(req,res) =>
{
    return res.render("sneakersinstock");
})

router.get("/sneakersupcoming",(req,res) =>
{
    return res.render("sneakersupcoming");
})

router.get("/wishlist",(req,res) =>
{
    return res.render("wishlist");
})

router.get("/women_clothing",(req,res) =>
{
    return res.render("women_clothing");
})

router.get("/women",(req,res) =>
{
    return res.render("women");
})

router.get("/women_shoes",(req,res) =>
{
    return res.render("women_shoes");
})

router.get("/checkout",(req,res) =>
{
    return res.render("checkout");
})

router.get("/sales",(req,res) =>
{
    return res.render("sales");
})


module.exports = router;