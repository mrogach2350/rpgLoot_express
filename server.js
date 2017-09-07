var express = require('express'),
    app     = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}));

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var db = require('./models/item');

app.listen(process.env.PORT || 8080, function(){
    console.log('Express server is running on http://localhost:8080/');
});