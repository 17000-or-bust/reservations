import React from 'react';
import moment from 'moment';
import $ from 'jquery';

let Hour = props => {
  var min = [0, 30];
  var times = [];
  for (var i = 0; i <= 23; i++) {
    for (var j = 0; j <= 1; j++) {
      var time = moment()
        .hour(i)
        .minute(min[j]);
      time = time.format('hh:mm A');
      if (time[0] === '0') {
        time = time.slice(1);
      }
      times.push(time);
    }
  }
  return (
    <div id="hour">
      <select
        defaultValue={'7:00 PM'}
        onChange={e => {
          var hour = $('#hour select')[0].value;
          props.change(e, hour);
        }}
      >
        {times.map(time => {
          return <option key={time}>{time}</option>;
        })}
      </select>
    </div>
  );
};

export default Hour;
