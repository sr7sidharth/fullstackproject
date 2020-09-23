var mongoose = require("mongoose");
 
var skillsSchema = new mongoose.Schema({
    name: String,
    image: String,
    link: String
});


module.exports = mongoose.model("Skills", skillsSchema);