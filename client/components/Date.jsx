import React from 'react';
import moment from 'moment';

let Date = () => {
  var dates = [];
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var firstWeek = moment()
    .startOf('month')
    .week();
  var lastWeek = firstWeek + 5;

  for (var i = firstWeek; i <= lastWeek; i++) {
    var oneWeek = [];
    for (var j = 0; j <= 6; j++) {
      var day = moment()
        .week(i)
        .startOf('week')
        .add(j, 'day');
      oneWeek.push(day);
    }
    dates.push(oneWeek);
  }

  return (
    <div id="date">
      <div id="days">
        {days.map(day => {
          return (
            <div className="day" key={day}>
              {day}
            </div>
          );
        })}
      </div>
      {dates.map(week => {
        return (
          <div className="row" key={week}>
            {week.map(day => {
              return (
                <div className="box" key={day}>
                  {day.format('D')}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Date;
