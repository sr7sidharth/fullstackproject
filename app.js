const form = require("./models/form");

var express = require("express"), 
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    skills = require("./models/skill"),
    form_links = require("./models/form"),
    seedDB = require("./seeds"),
    seedFormDB = require("./formSeeds");

//Tried to connect 2 databases with 2 different schemas but was not working, instructions online were not clear
//Instead, using a database main with skills and forms as 2 schemas in it
mongoose.connect("mongodb://localhost/main", { useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
//seedDB();
//seedFormDB();

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
    form_links.find({}, function(err, allForms){
        if (err){
            console.log(err);
        }else{
            res.render("workout", {form_links : allForms});
        }
    });
});

app.post("/workoutgen", function(req, res){
    form_links.find({name: {$regex: req.body.search_exercises} }, function(err, allForms){
        if (err){
            console.log(err);
        }else{
            res.render("workout", {form_links : allForms});
        }
    });
});

app.post("/template", function(req,res){
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