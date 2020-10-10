var mongoose = require("mongoose");
 
var formSchema = new mongoose.Schema({
    name: String,
    link: String,
    search_tags: [
        {
            type: String
        }
    ]
});

module.exports = mongoose.model("Forms", formSchema);