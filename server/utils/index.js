const moment = require('moment');

const timeStrToMinutes = time => {
  const split = time.split(':');
  const hours = parseInt(split[0]);
  const minutes = parseInt(split[1]);
  return (hours * 60) + minutes;
};

const minutesToTimeStr = minutes => {
  let remainder = minutes % 60;
  let hours = Math.floor(minutes / 60);
  remainder = remainder === 0 ? `${remainder}0` : remainder;
  hours = hours < 10 ? `0${hours}` : hours;
  return `${hours}:${remainder}`;
};

const addMinutes = (initial, amount, direction) => {
  let minutes = initial;
  if (direction === '-') {
    minutes -= amount;
    if (minutes < 0) return (24 * 60) - Math.abs(minutes);
    return minutes;
  }
  minutes += amount;
  if (minutes > (24 * 60)) return minutes - (24 * 60);
  return minutes;
};

const timeNotReserved = (reservations, time) => {
  for (let j = 0; j < reservations.length; j++) {
    if (moment(reservations[j].time, 'HH:mm:ss').format('HH:mm') === time) {
      return false;
    }
  }
  return true;
};

const getOpenTimes = (resObject, time) => {
  const { reservations, interval } = resObject;
  const times = [];
  const min = addMinutes(timeStrToMinutes(time), 150, '-');
  const max = addMinutes(timeStrToMinutes(time), 150);

  for (let i = min; i <= max; i += interval) {
    const currTime = minutesToTimeStr(i);
    if (timeNotReserved(reservations, currTime)) {
      times.push(currTime);
    }
  }
  return times;
};

module.exports = {
  getOpenTimes,
};

