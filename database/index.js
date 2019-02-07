let mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'reservations'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to mysql server: ', err);
    return;
  } else {
    console.log('Connected as id: ', connection.threadId);
  }
});

module.exports.connection = connection;
