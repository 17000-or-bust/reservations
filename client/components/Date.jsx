import React from 'react';
import moment from 'moment';

let Date = props => {
  // Determine month/year for calendar header
  var month = moment().month();
  var year = moment().year();
  var monthYear =
    moment()
      .month(month)
      .format('MMMM') +
    ' ' +
    year;

  // Determine days and dates on calendar
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
      <div id="header">
        <div id="month">{monthYear}</div>
      </div>
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
              var classes = 'box';
              if (day.month() === month) {
                classes += ' thisMonth';
              }
              if (moment().isSameOrBefore(day, 'day')) {
                classes += ' future';
              }
              return (
                <div
                  className={classes}
                  key={day}
                  onClick={e => props.change(e, day.format('YYYY-MM-DD'))}
                >
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
