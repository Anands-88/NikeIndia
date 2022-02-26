const express = require('express');
const connect = require('./src/config/db')
const cors = require("cors")
const app = express();
const menshoesController =  require("./src/controllers/nikeMenShoes.controller")
const menclothController =  require("./src/controllers/nikeMenCloth.controller")
const womenshoeController = require("./src/controllers/nikeWomenShoes.controller")
const womenclothController = require("./src/controllers/nikeWomenCloth.controller")
const kidsshoesController = require("./src/controllers/nikeKidsShoes.controller")
const kidsclothController = require("./src/controllers/nikekidsCloths.controller")
const saleController = require("./src/controllers/nikesales.Controller")
const sneakersFeedController = require("./src/controllers/sneakersFeed.controller")
const sneakersUpcomingController = require("./src/controllers/sneakersUpcoming.controller")
const sneakersInStockController = require("./src/controllers/sneakersInStock.controller")
const cartController = require("./src/controllers/cart.controller")

app.use(cors())

app.use(express.json())
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


const port = process.env.PORT || 3100;
const start = async ()=>{
    await connect()
    app.listen(port, ()=>{
        console.log(`Connected on port${port}`);
    })
}
start();