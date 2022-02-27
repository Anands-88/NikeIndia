const mongoose = require("mongoose");
const pw = process.env.PASSWORD

module.exports = () => {
    return mongoose.connect(`mongodb+srv://ash:${pw}@cluster0.ctbz8.mongodb.net/NikeIndia`)
}