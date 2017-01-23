var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var index = require('./routes/index');
var tasks = require('./routes/tasks');

var app = new express();

var port = 3000;

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Set static folder
app.use(express.static(path.join(__dirname, 'client')));

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use('/', index);
app.use('/api', tasks );

app.listen(port, () => {
    console.log("Server started on port " + port);
})
