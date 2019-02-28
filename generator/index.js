const fs = require('fs');
const faker = require('faker');
const moment = require('moment');
const startTime = Date.now();
console.log(`Starting generator at ${moment().format('HH:MM:SS')}`);

const getRandomHour = (min, max) => {
  return `${faker.random.number({ min, max })}:00`;
};

const getRandomDateUpToNMonths = maxMonths => {
  return moment(faker.date.between(moment().format('YYYY-MM-DD'), moment().add(maxMonths, 'months').format('YYYY-MM-DD'))).format('YYYY-MM-DD');
};

const seedRestaurants = () => {
  const restWriteable = fs.createWriteStream('../database/restaurants.csv');
  let buffer = '';
  for (let j = 0; j < 1000; j++) {
    for (var i = 0; i < 10000; i++) {
      const id = (j * 10000) + i;
      let maxPartySize = Math.round(Math.random() * 16 + 4);
      let maxDaysToBook = Math.round(Math.random() * 83 + 7);
      let hasRewards = Math.round(Math.random());
      if (Math.round(Math.random())) {
        var timeSlotInterval = '00:15:00';
      } else {
        var timeSlotInterval = '00:30:00';
      }
      let startHour = getRandomHour(0, 12);
      let endHour = getRandomHour(13, 24);
      let bookingsToday = Math.round(Math.random() * 150);

      buffer += `${id},${maxPartySize},${maxDaysToBook},${hasRewards},"${timeSlotInterval}","${startHour}","${endHour}",${bookingsToday}\n`;
    }
    restWriteable.write(buffer);
    buffer = '';
  }
};

const seedReservations = n => {
  const resWriteable = fs.createWriteStream('../database/reservations.csv');
  let buffer = '';
  for (let j = 0; j < 1000; j++) {
    for (var i = 0; i < 10000; i++) {
      const id = (j * 10000) + i;
      let restaurantId = faker.random.number(9999999);
      let date = getRandomDateUpToNMonths(3);
      let time = getRandomHour(0, 24);

      buffer += `${id},${restaurantId},"${date}","${time}"\n`;
    }
    resWriteable.write(buffer);
    buffer = '';
  }
};

console.log(`Generating restaurant data....`);
seedRestaurants();
console.log(`Generating reservations data....`);
seedReservations();
console.log(`Writing data to files....`);
const endTime = Date.now();
console.log(`Success. Elapsed time: ${moment(endTime).diff(moment(startTime), 'seconds')} seconds`);
