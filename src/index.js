const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json())
const cors = require('cors');

app.use(require("cors")()); // allow Cross-domain requests



require('./app/routes/routes')(app,cors, mongoose);


app.set('port', process.env.PORT || 1234);


app.listen(app.get('port'), () => {
  console.log("Server is listening on port:"+app.get('port'));
});