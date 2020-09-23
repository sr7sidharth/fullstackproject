var mongoose = require("mongoose");
var Skills = require("./models/skill");

var data = [
    {
        name: "Data Structures", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        link: "https://www.google.com/"
    },
    {
        name: "Desert Mesa", 
        image: "https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg",
        link: "https://www.google.com/"
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        link: "https://www.google.com/"
    }
]

function seedDB(){
    Skills.remove({}, function(err){
        if (err){
            console.log(err);
        }
        data.forEach(function(seed){
            Skills.create(seed, function(err, skill){
                if (err){
                    console.log(err);
                }else{
                    console.log("added skill");
                }
            });
        });
    });
}

module.exports = seedDB;