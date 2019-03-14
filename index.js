const port = 8081;
var express = require('express');
var bodyParser = require('body-parser');

var router = require('./routes/routes');

var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);



app.listen(port, () => console.log(`Server running at http://127.0.0.1:${port}/`));




// Console will print the message