var { connection } = require('./index.js');

let getBooksOnLoad = (id, callback) => {
  connection.query(
    {
      sql: 'SELECT bookings_today FROM restaurants WHERE id = ' + id + ';',
      timeout: 2000
    },
    (err, response) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, response);
      }
    }
  );
};

let getOpenTimes = (id, date, time, callback) => {
  connection.query(
    {
      sql: `SELECT * FROM reservations WHERE restaurant_id = ${id} AND date LIKE '%${date}%' AND time = '${time}'`,
      timeout: 2000
    },
    (err, response) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, response);
      }
    }
  );
};

module.exports.getBooksOnLoad = getBooksOnLoad;
module.exports.getOpenTimes = getOpenTimes;
