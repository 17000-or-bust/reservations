require('newrelic');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const moment = require('moment');
const cors = require('cors');
const compression = require('compression');
const ReservationRouter = require('./routers/Reservations.js');

const PORT = 80;
const USE_MORGAN = false;

let app = express();
if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });

} else {
  console.log(`Worker ${process.pid} started`);
  app.use(cors());
  if (USE_MORGAN) app.use(morgan('dev'));
  app.use(express.static(__dirname + '/../public'));

  app.get('*.js', function(req, res, next) {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    next();
  });

  app.use('/api/reserve', ReservationRouter);

  app.use('/:id', express.static(__dirname + '/../public'));

  app.listen(PORT, err => {
    if (err) {
      console.error('Server error: ', err);
      return;
    } else {
      console.log('Listening at Port', PORT);
    }
  });
}
