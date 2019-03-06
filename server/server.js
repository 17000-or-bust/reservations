const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const moment = require('moment');
const cors = require('cors');
const ReservationRouter = require('./routers/Reservations.js');

const PORT = 3003;

let app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(__dirname + '/../public'));
app.use('/api/reserve', ReservationRouter);

app.get('*.js', function(req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use('/:id', express.static(__dirname + '/../public'));

app.listen(PORT, err => {
  if (err) {
    console.error('Server error: ', err);
    return;
  } else {
    console.log('Listening at Port', PORT);
  }
});
