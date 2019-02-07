let express = require('express');
let morgan = require('morgan');
let bodyParser = require('body-parser');
const port = 3003;
const { connection } = require('../database/index.js');

let app = express();

app.use(express.static(__dirname + '/public'));
app.use(morgan('devl'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, err => {
  if (err) {
    console.error('Server error: ', err);
    return;
  } else {
    console.log('Listening at Port', port);
  }
});
