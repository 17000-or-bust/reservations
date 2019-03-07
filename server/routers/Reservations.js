const express = require('express');
const router = express.Router();
const controllers = require('../controllers');
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();

router.get('/load/:id', (req, res) => {
  const { id } = req.params;
  controllers.getBookingsToday(id)
    .then(bookings_today => {
      res.statusCode = 200;
      res.send(bookings_today);
    })
    .catch(err => {
      res.statusCode = 400;
      console.log(err);
      res.send(err);
    });
});

router.get('/query/:id/:date/:time', (req, res) => {
  const { id, date, time } = req.params;
  controllers.getReservationsForDate(id, date, time)
    .then(results => {
      res.statusCode = 200;
      res.send(results);
    })
    .catch(err => {
      console.log(err);
      res.statusCode = 400;
      res.send(err);
    });
});

router.post('/book/:id/:date/:time', jsonParser, (req, res) => {
  const { id, date, time } = req.params;
  controllers.createReservation(id, date, time)
    .then(result => {
      res.statusCode = 201;
      res.send(result);
    })
    .catch(err => {
      res.statusCode = 400;
      res.send(err);
    });
});

module.exports = router;

