import React from 'react';
import moment from 'moment';

class Hour extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleHoursList(event) {
    event.preventDefault();
    if (document.getElementById('hour').style.display !== 'flex') {
      document.getElementById('hour').style.display = 'flex';
    } else {
      document.getElementById('hour').style.display = 'none';
    }
  }

  render() {
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
    let currentHour = moment(this.props.hour, ['HH:mm']).format('h:mm A');
    return (
      <div id="hourSection">
        <div className="title">Time</div>
        <div className="currentTime" onClick={e => this.toggleHoursList(e)}>
          <div className="currentTimeText">{currentHour}</div>
          <i className="fas fa-angle-down" />
        </div>
        <div id="hour">
          <div className="dropDown">
            {times.map(time => {
              return (
                <div
                  className="timeSlot"
                  key={time}
                  onClick={e => {
                    this.props.change(e, time);
                    this.toggleHoursList(e);
                  }}
                >
                  {time}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Hour;
