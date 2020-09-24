var mongoose = require("mongoose");
var Skills = require("./models/skill");

var data = [
    {
        name: "Computer Networks", 
        image: "https://images.unsplash.com/photo-1598946114934-8cf259aa241d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        link: "http://plaza.eng.uci.edu/course/eecs/148/outline/2017-2018"
    },
    {
        name: "Design and use of Database Management Systems using SQL", 
        image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "http://catalogue.uci.edu/allcourses/compsci/"
    },
    {
        name: "Proficient at Java, Python, and C++, with limited experience in many more!", 
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        link: "http://catalogue.uci.edu/allcourses/compsci/"
    },
    {
        name: "Worked on compilers, interpreters and operating systems",
        image: "https://images.unsplash.com/photo-1469981283837-561b3779462f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        link: "http://catalogue.uci.edu/allcourses/compsci/"
    },
    {
        name: "Design and analysis of algorithms",
        image: "https://images.unsplash.com/photo-1574390353491-92705370c72e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1313&q=80",
        link: "http://catalogue.uci.edu/allcourses/compsci/",
    },
    {
        name: "Design of Embedded systems for various applications",
        image: "https://images.unsplash.com/photo-1551703616-e5a729ff0185?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80",
        link: "http://catalogue.uci.edu/allcourses/compsci/"
    },
    {
        name: "Knowledge of Data Structures, their use and implementation",
        image: "https://images.unsplash.com/photo-1493476523860-a6de6ce1b0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        link: "http://catalogue.uci.edu/allcourses/compsci/"
    },
    {
        name: "Knowledge of full stack systems - this website was built entirely by me, using the MERN stack!",
        image: "https://images.unsplash.com/photo-1564760290292-23341e4df6ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        link: "https://en.wikipedia.org/wiki/Web_developer"
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