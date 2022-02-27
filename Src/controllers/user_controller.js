const express = require("express");
const User = require("../models/user_model")
const router = express.Router();
const {body,validationResult} = require("express-validator")

var name;
router.post("/signin",async(req,res)=> {

    if(req.body.email == "" || req.body.password == "")
    {
        const message = "Please enter email and password"
        return res.render("signin",{message});
    }
    const user = await User.findOne({email:req.body.email}).lean().exec()
    try{
        if(req.body.email == user.email && user.password == req.body.password)
        {
            name = `${user.firstname} ${user.lastname}`;
            return res.redirect("/in/home")
        }
        else
        {
            const message = "Incorrect Email or password"
            return res.render("signin",{message});

        } 
    }
    catch(error)
    {
        return res.redirect("/in/register");
    }
});

router.get("",async(req,res)=> {
    try{
        const user = await User.find().lean().exec()
        return res.redirect("/in/register");
    }
    catch(error)
    {
        return res.status(500).send(["ERROR",error])
    }
});

router.post("/register", body("email").isEmail()
                            .custom(async value => {
                                const user = await User.findOne({ email: value });
                                if (user) {
                                    return Promise.reject('Email already in use');
                                }
                            }),
                        body('password').isLength({ min: 8 }).withMessage("Password must be length 8 characters"),
                        body("firstname").isAlpha().notEmpty().isLength({min:3}).withMessage("First Name should be of 4 characters"),
                        body("lastname").isAlpha().notEmpty().withMessage("Required Last Name Should not be empty"),
        async(req,res)=> {
        try{
            const errors = validationResult(req)
            if(!errors.isEmpty())
            {
                const message = {}
                for(msg of errors.errors)
                {
                    if(msg.param == "firstname" || msg.param == "lastname")
                    {
                        msg.msg = "Name should be in Alphabet"
                    }
                   message[msg.param] = msg.msg
                }
                return res.render("signup",{message});
            }
            else
            {   
                const user = await User.create(req.body)
                return res.redirect("/in/signin");
            } 
        }
        catch(error)
        {
            return res.redirect("/in/register");
        }
});

router.get("/register",(req,res)=>
{   
    const message = "Registration Page"
    return res.render("signup.ejs",{message})
})

router.get("/signin",(req,res)=>
{   
    const message = "Sign in to visit Home page";
    return res.render("signin",{message});
})
router.get("/home",(req,res)=>
{  
    if(name == undefined)
    {
        name = "HELLO"
    }
     const message = name;
    return res.render("index",{message});
})
module.exports = router;