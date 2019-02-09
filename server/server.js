let express = require('express');
let morgan = require('morgan');
let bodyParser = require('body-parser');

const port = 3003;
const { connection } = require('../database/index.js');
const { getBooksOnLoad } = require('../database/model.js');

let app = express();

app.use(express.static(__dirname + '/../public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.post('/api/reserve/new', (req, res) => {
//   var shop = req.body.restaurant;
//   console.log('incoming post: ', shop);
//   res.status(201).send('yum! new restaurant');
// });

app.get('/api/reserve/load/:id', (req, res) => {
  var { id } = req.params;
  console.log('Fetching data for restaurant with id: ', id);
  let loadResponse = (err, num) => {
    if (err) {
      console.error(err);
      return;
    } else {
      res.send(num);
    }
  };
  getBooksOnLoad(id, loadResponse);
});

app.listen(port, err => {
  if (err) {
    console.error('Server error: ', err);
    return;
  } else {
    console.log('Listening at Port', port);
  }
});
