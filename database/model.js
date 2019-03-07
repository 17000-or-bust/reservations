const pool = require('./pgConnect.js');

const getBooksOnLoad = id => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT bookings_today from restaurants WHERE id=$1';
    const params = [id];
    const runQuery = async function() {
      const client = await pool.connect();
      try {
        const res = await client.query(query, params);
        resolve(res.rows);
      } finally {
        client.release();
      }
    };
    runQuery()
      .catch(e => {
        reject(e.stack);
      });
  });
};

const getReservationsForDate = (id, date) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT rs.time_slot_interval AS interval, rv.time AS time, rv.date as date FROM reservations rv RIGHT JOIN restaurants rs ON (rv.restaurant_id=rs.id) WHERE rs.id=$1';
    const params = [id];
    (async () => {
      const client = await pool.connect();
      try {
        const res = await client.query(query, params);
        const interval = parseInt(res.rows[0].interval.split(':')[1]);
        const reservations = [];
        for (let i = 0; i < res.rows.length; i++) {
          if (res.rows[i].date === date) reservations.push(res.rows[i]);
        }
        resolve({ reservations, interval });
      } finally {
        client.release();
      }
    })().catch(e => {
      reject(e.stack);
    });
  });
};

const createReservation = (id, date, time) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO reservations (restaurant_id, date, time) VALUES ($1, $2, $3)';
    const params = [id, date, time];
    (async () => {
      const client = await pool.connect();
      try {
        const res = await client.query(query, params);
        resolve(res);
      } finally {
        client.release();
      }
    })().catch(e => {
      reject(e.stack);
    });
  });
};

module.exports = {
  getBooksOnLoad,
  getReservationsForDate,
  createReservation,
};

