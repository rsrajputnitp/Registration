const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function(req, res) {
    res.render('regForm');
});

app.post('/', function(req, res) {
    name = req.body.name;
    mob = req.body.mob;
    dob = req.body.dob;
    email = req.body.email;
    roll = req.body.roll;
    res.redirect('/result');
});

app.get('/result', function(req, res) {
    res.render('result', { name: name, roll1: roll, email: email, dob: dob, mob: mob });
});

app.listen(3000, function() {
    console.log("server running on port 3000");
})