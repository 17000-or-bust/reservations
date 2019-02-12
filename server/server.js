let express = require('express');
let morgan = require('morgan');
let bodyParser = require('body-parser');
let moment = require('moment');

const port = 3003;
const { connection } = require('../database/index.js');
const { getBooksOnLoad, getOpenTime } = require('../database/model.js');

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
  var testTimes = [];
  var times = [];

  for (var i = 1; i <= 5; i++) {
    var laterTime =;
    var earlierTime = i *
    testTimes.push(laterTime, earlierTime);
  }

  var queriesLeft = testTimes.length - 1;

  let sendTimes = (err, time) => {
    if (err) {
      console.error(err);
      return;
    } else {
      times.push(time);
      res.status(200).send(times);
    }
  };

  let nextQuery = (err, time) => {
    if (err) {
      console.error(err);
      return;
    } else if (queriesLeft) {
      if (time[0]) {
        times.push(time);
      }
      queriesLeft--;
      getOpenTime(id, date, time, nextQuery);
    } else {
      getOpenTime(id, date, time, sendTimes);
    }
  };

  getOpenTime(id, date, time, nextQuery);
});

app.listen(port, err => {
  if (err) {
    console.error('Server error: ', err);
    return;
  } else {
    console.log('Listening at Port', port);
  }
});
