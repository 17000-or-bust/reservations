const moment = require('moment');

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

const loadData = (context, events, done) => {
  const randomInt = getRandomInt(0, 9999999);
  const randomDate = getRandomDateUpToNMonths(3);
  const randomTime = getRandomHour(0, 24);
  context.vars['randomInt'] = randomInt;
  context.vars['randomDate'] = randomDate;
  context.vars['randomTime'] = randomTime;
  return done();
};

module.exports = {
  loadData,
};

