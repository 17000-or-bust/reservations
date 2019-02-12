let express = require('express');
let morgan = require('morgan');
let bodyParser = require('body-parser');

const port = 3003;
const { connection } = require('../database/index.js');
const { getBooksOnLoad, getOpenTimes } = require('../database/model.js');

let app = express();

app.use(express.static(__dirname + '/../public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/reserve/load/:id', (req, res) => {
  var { id } = req.params;
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

app.get('/api/reserve/query/:id/:date/:time', (req, res) => {
  var { id, date, time } = req.params;
  console.log(
    'Searching for open tables in restaurant ',
    id,
    ' at ',
    time,
    ' on ',
    date
  );

  let sendTimes = (err, times) => {
    if (err) {
      console.error(err);
      return;
    } else {
      res.status(200).send(times);
    }
  };

  getOpenTimes(id, date, time, sendTimes);
});

app.listen(port, err => {
  if (err) {
    console.error('Server error: ', err);
    return;
  } else {
    console.log('Listening at Port', port);
  }
});
