const models = require('../../database/model.js');
const utils = require('../utils');

const controllers = {
  getBookingsToday: id => {
    return new Promise((resolve, reject) => {
      models.getBooksOnLoad(id)
        .then(res => {
          resolve(res);    
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  getReservationsForDate: (id, date, time) => {
    return new Promise((resolve, reject) => {
      models.getReservationsForDate(id, date, time)
        .then(reservations => {
          resolve(utils.getOpenTimes(reservations, time));
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  createReservation: (id, date, time) => {
    return new Promise((resolve, reject) => {
      models.createReservation(id, date, time)
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
};

module.exports = controllers; 

