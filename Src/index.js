const express = require("express");
require("dotenv").config()
const app = express();
const connect = require("./config/db")
const userController = require("./controller/user_controller")
const bodyParser = require("body-parser");

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users",userController)
app.set("view engine","ejs")
app.use(express.static("Public"))

const port = process.env.PORT 
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