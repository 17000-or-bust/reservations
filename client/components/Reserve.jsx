import React from 'react';
import $ from 'jquery';
import moment from 'moment';

class Reserve extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      times: [],
      error: false
    };

    this.findTimes = this.findTimes.bind(this);
  }

  findTimes(event) {
    event.preventDefault();

    $.ajax({
      url: `http://localhost:3003/api/reserve/query/${this.props.restId}/${
        this.props.date
      }/${this.props.time}`,
      method: 'GET',
      data: {},
      success: times => {
        console.log('We have seats at these times!', times);
        var timeAmPm = times.map(time =>
          moment(time, ['HH:mm']).format('h:mm A')
        );
        this.setState(
          {
            times: timeAmPm
          },
          () => {
            this.props.toggleBtn();
          }
        );
      },
      error: err => {
        console.log('Error getting times: ', err);
      }
    });
  }

  bookTime(time) {
    var timeTwentyFour = moment(time, ['h:mm A']).format('HH:mm');
    $.ajax({
      url: `http://localhost:3003/api/reserve/book/${this.props.restId}/${
        this.props.date
      }/${timeTwentyFour}`,
      method: 'POST',
      data: { time: time },
      success: res => {
        this.props.toggleBtn();
      },
      error: err => {
        console.error(err);
      }
    });
  }

  render() {
    var times = this.state.times;
    var timeTwentyFour = moment(this.props.time, ['HH:mm']).format('h:mm A');

    if (this.props.btn) {
      return (
        <div id="reserve">
          <button id="find" onClick={e => this.findTimes(e)}>
            Find a Table
          </button>
        </div>
      );
    } else {
      if (this.state.error) {
        return (
          <div id="reserve">
            Unfortunately, this restaurant can't accept that reservation. Have
            another time in mind?
          </div>
        );
      } else if (times.length > 0) {
        var count =
          times.length < 5 ? (
            <div id="count">
              You're in luck! We still have {times.length} timeslots left
            </div>
          ) : (
            ''
          );
        return (
          <div id="reserve">
            {times.map(time => {
              return (
                <div
                  className="timeSlot"
                  key={time}
                  onClick={() => this.bookTime(time)}
                >
                  {time}
                </div>
              );
            })}
            <div id="count">{count}</div>
          </div>
        );
      } else {
        return (
          <div id="reserve">
            At the moment, there's no online availability within 2.5 hours of{' '}
            {timeTwentyFour}. Have another time in mind?
          </div>
        );
      }
    }
  }
}

export default Reserve;
