import React from 'react';
import moment from 'moment';

let Date = () => {
  var days = [];
  var firstWeek = moment()
    .startOf('month')
    .week();
  var lastWeek = firstWeek + 5;

  for (var i = firstWeek; i <= lastWeek; i++) {
    for (var j = 0; j <= 6; j++) {
      var day = moment()
        .week(i)
        .startOf('week')
        .add(j, 'day');
      days.push(day);
    }
  }

  return (
    <div id="date">
      {days.map(day => {
        return <div>{day.format('D')}</div>;
      })}
    </div>
  );
};

export default Date;
