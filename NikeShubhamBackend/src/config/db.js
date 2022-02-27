const mongoose = require('mongoose');
module.exports = ()=>{
    mongoose.connect('mongodb+srv://shubham:shubham@cluster0.k2osm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
}