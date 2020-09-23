var mongoose = require("mongoose");
 
var formSchema = new mongoose.Schema({
    name: String,
    link: String
});

module.exports = mongoose.model("Forms", formSchema);