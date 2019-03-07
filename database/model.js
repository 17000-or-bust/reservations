const pool = require('./pgConnect.js');

const getBooksOnLoad = id => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * from restaurants WHERE id=$1';
    const params = [id];
    (async () => {
      const client = await pool.connect();
      try {
        const res = await client.query(query, params);
        resolve(res.rows);
      } finally {
        client.release();
      }
    })().catch(e => {
      reject(e.stack);
    });
  });
};

const getReservationsForDate = (id, date) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM reservations WHERE restaurant_id=$1 AND date=$2';
    const params = [id, date];
    (async () => {
      const client = await pool.connect();
      try {
        const res = await client.query(query, params);
        resolve(res.rows);
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

