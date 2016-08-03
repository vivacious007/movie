var express = require('express');
var app = express();

//Serving static files in public folder
app.use(express.static(__dirname + '/public'));

app.listen(3001);
console.log("Server running on port 3001");