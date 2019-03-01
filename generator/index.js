const moment = require('moment');
const DataGenerator = require('./DataGenerator.js');

// Constants
const CHUNK_SIZE = 20000;
const MAX_ROWS = 10 * 1000 * 1000;

// Helper functions
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomHour = (min, max) => {
  return `${getRandomInt(min, max)}:00`;
};

const getRandomDateUpToNMonths = maxMonths => {
  const date = new Date().getTime();
  let futureDate = new Date();
  const dateFromNow = futureDate.setMonth(futureDate.getMonth() + maxMonths);
  return moment(getRandomInt(date, dateFromNow)).format('YYYY-MM-DD');
};

const generateRestaurant = () => {
  const maxPartySize = Math.round(Math.random() * 16 + 4);
  const maxDaysToBook = Math.round(Math.random() * 83 + 7);
  const hasRewards = Math.round(Math.random());
  if (Math.round(Math.random())) {
    var timeSlotInterval = '00:15:00';
  } else {
    var timeSlotInterval = '00:30:00';
  }
  const startHour = getRandomHour(0, 12);
  const endHour = getRandomHour(13, 24);
  const bookingsToday = Math.round(Math.random() * 150);

  return `${maxPartySize},${maxDaysToBook},${hasRewards},"${timeSlotInterval}","${startHour}","${endHour}",${bookingsToday}`;
};

const generateReservation = () => {
  const restaurantId = getRandomInt(0, 9999999);
  const date = getRandomDateUpToNMonths(3);
  const time = getRandomHour(0, 24);

  return `${restaurantId},"${date}","${time}"`;
};

// Generate csv files
const restaurantGenerator = new DataGenerator(generateRestaurant, CHUNK_SIZE, MAX_ROWS, '../database/restaurants.csv');
const reservationGenerator = new DataGenerator(generateReservation, CHUNK_SIZE, MAX_ROWS, '../database/reservations.csv');

restaurantGenerator.generate();
reservationGenerator.generate();
