var mongoose = require("mongoose");
var Forms = require("./models/form");

var data = [
    {
        name: "Bench Press", 
        link: "https://www.youtube.com/embed/vcBig73ojpE",
        search_tags: ["bench", "press", "benchpress"]
    },
    {
        name: "Press", 
        link: "https://www.youtube.com/embed/_RlRDWO2jfg",
        search_tags: ["press", "overheadpress", "ohp"]
    },
    {
        name: "Squat", 
        link: "https://www.youtube.com/embed/bEv6CCg2BC8",
        search_tags: ["squat"]
    },
    {
        name: "Deadlift", 
        link: "https://www.youtube.com/embed/VL5Ab0T07e4",
        search_tags: ["deadlift"]
    },
    {
        name: "Front Squat",
        link: "https://www.youtube.com/embed/v-mQm_droHg" ,
        search_tags: ["squat", "frontsquat"]
    }
]

function seedFormDB(){
    Forms.remove({}, function(err){
        if (err){
            console.log(err);
        }
        data.forEach(function(seed){
            Forms.create(seed, function(err, form){
                if (err){
                    console.log(err);
                }else{
                    console.log("added form");
                }
            });
        });
    });
}

module.exports = seedFormDB;