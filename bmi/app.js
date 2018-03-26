var express = require("express");
var app = express();

app.set('view engine', 'ejs'); 
app.set("views", __dirname + "/views");
app.use('/public', express.static(__dirname + '/public'));

app.get("/", function(req, res){
    res.render("pages/landing", {
        title: "BMI",
        nav_active_element: "home"
    });
});
app.get("/result", function(req, res){
    var m = req.query.cm / 100;
    var kg = req.query.kg;
    if(m == 0 || isNaN(m) || kg == 0 || isNaN(kg))
    {
        res.render("pages/error", {
            title: "error",
            nav_active_element: "result",
            alert_heading: "An error occured:",
            message: "Please fill out the form.",
            button_link: "/"
        });
    }
    else
    {
        var bmi = kg/(Math.pow(m, 2));
        bmi = bmi.toFixed(2);
        res.render("pages/result", {
            title: "Result",
            nav_active_element: "result",
            bmi: bmi
        });
    }
});
app.get("/search", function(req, res){
    res.send("under construction");
});

app.listen(8080);