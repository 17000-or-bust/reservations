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

  var max = 5;
  var window = 30;
  var splitTime = time.split(':');
  var dummyTime = moment()
    .hour(splitTime[0])
    .minute(splitTime[1])
    .subtract(max * window, 'minute');
  var testTimes = [dummyTime.format('HH:mm')];
  var times = [];

  // scan from 2.5 hours before queried time to 2.5 hours after
  for (var i = 1; i <= max * 2; i++) {
    var laterTime = dummyTime.add(window, 'minute').format('HH:mm');

    testTimes.push(laterTime);
  }

  var queriesLeft = testTimes.length - 1;
  console.log('Searching for seats at these times:', testTimes);

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
      getOpenTime(id, date, testTimes[queriesLeft], nextQuery);
    } else {
      getOpenTime(id, date, testTimes[queriesLeft], sendTimes);
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
