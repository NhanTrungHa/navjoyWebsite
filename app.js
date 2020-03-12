var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const port = 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
    
});

app.get("/games", function (req, res) {
    res.render("games");
});

app.get("/contact", function (req, res) {
    res.render("contact");
});

app.get("/about", function (req, res) {
    res.render("about");
});

app.post("/contact", function(req, res) {
    var from = req.body.email;
    var subject = req.body.subject;
    var text = req.body.message;
	const msg = {
	    to: 'nhantrungha@gmail.com',
	    from: req.body.email,
	    subject: req.body.subject,
	    text: req.body.message,
	    html: '',
	};

    sgMail.send(msg);
    res.redirect("/");
});

//Tell express to listen (start server)
app.listen(port, function () {
    console.log("Server has started!!!");
});