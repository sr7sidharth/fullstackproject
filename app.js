var express = require("express"), 
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    skills = require("./models/skill"),
    seedDB = require("./seeds");

mongoose.connect("mongodb://localhost/skills", { useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
//seedDB();

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/skills", function(req, res){
    skills.find({}, function(err, allSkills){
        if (err){
            console.log(err);
        }else{
            res.render("skills", {skills: allSkills});
        }
    });
});

app.get("/workoutgen", function(req, res){
    res.render("workout");
});

app.post("/workoutgen", function(req,res){
    var maxes = {bench: req.body.bench, 
        squat: req.body.squat,
        press: req.body.press,
        deadlift: req.body.deadlift,
        units: req.body.unit,
        program: req.body.program};
    res.render("template", {maxes: maxes});
});

app.listen(3000, function(){
    console.log("Listening on Port 3000");
});