const express = require("express");
require("dotenv").config()
const cors = require("cors")
const connect = require("./config/db")
const menshoesController =  require("./controllers/nikeMenShoes.controller")
const menclothController =  require("./controllers/nikeMenCloth.controller")
const womenshoeController = require("./controllers/nikeWomenShoes.controller")
const womenclothController = require("./controllers/nikeWomenCloth.controller")
const kidsshoesController = require("./controllers/nikeKidsShoes.controller")
const kidsclothController = require("./controllers/nikekidsCloths.controller")
const saleController = require("./controllers/nikesales.Controller")
const sneakersFeedController = require("./controllers/sneakersFeed.controller")
const sneakersUpcomingController = require("./controllers/sneakersUpcoming.controller")
const sneakersInStockController = require("./controllers/sneakersInStock.controller")
const cartController = require("./controllers/cart.controller")
const userController = require("./controllers/user_controller")
const linksController = require("./controllers/lInks_controller")

const home = require("./controllers/home_controller")
const bodyParser = require("body-parser");

const app = express();

app.set("view engine","ejs")
app.use(express.static("Public"))

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.urlencoded({ extended: true }))

app.use("",home)
app.use("/in",userController)
app.use("/in",linksController)
app.use("/menShoes",menshoesController) 
app.use("/menCloth",menclothController)
app.use("/womenShoes",womenshoeController)
app.use("/womenCloth",womenclothController)
app.use("/kidsShoes",kidsshoesController)
app.use("/kidsCloth",kidsclothController)
app.use("/sneakersUpcoming",sneakersUpcomingController)
app.use("/sale",saleController)
app.use("/sneakerFeed",sneakersFeedController)
app.use("/sneakersInStock",sneakersInStockController)
app.use("/cart",cartController)

const port = process.env.PORT || 3000;
app.listen(port,async() => {
    try{
        await connect()
        console.log(`Listening Port number ${port}`)
    }
    catch(error)
    {
        console.error(error)
    }
})