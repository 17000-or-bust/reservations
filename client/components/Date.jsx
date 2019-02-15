import React from 'react';
import moment from 'moment';

class Date extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monthDiff: 0
    };
  }

  changeMonth(event, diff) {
    event.preventDefault();
    if (this.state.monthDiff > 0 || diff > 0) {
      this.setState(
        {
          monthDiff: this.state.monthDiff + diff
        },
        () => {
          let arrow = document.getElementById('left');
          // toggle styling on left arrow if is current month
          if (this.state.monthDiff) {
            arrow.classList.remove('fadeBtn');
            arrow.children[0].classList.remove('fadeArrow');
          } else {
            arrow.classList.add('fadeBtn');
            arrow.children[0].classList.add('fadeArrow');
          }
        }
      );
    }
  }

  render() {
    // Determine month/year for calendar header
    var month = moment()
      .add(this.state.monthDiff, 'month')
      .month();
    var year = moment()
      .add(this.state.monthDiff, 'month')
      .year();
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
      .add(this.state.monthDiff, 'month')
      .startOf('month')
      .week();
    var lastWeek = firstWeek + 5;

    for (var i = firstWeek; i <= lastWeek; i++) {
      var oneWeek = [];
      for (var j = 0; j <= 6; j++) {
        var day = moment()
          .add(this.state.monthDiff, 'month')
          .week(i)
          .startOf('week')
          .add(j, 'day');
        oneWeek.push(day);
      }
      dates.push(oneWeek);
    }

    return (
      <div id="dateSection">
        <div className="title">Date</div>
        <div id="dateWrap">
          <div id="date">
            <div id="header">
              <div
                id="left"
                className="sideArrow fadeBtn"
                onClick={e => this.changeMonth(e, -1)}
              >
                <i id="leftArrow" className="fa fa-angle-left fadeArrow" />
              </div>
              <div id="month">{monthYear}</div>
              <div
                id="right"
                className="sideArrow"
                onClick={e => this.changeMonth(e, 1)}
              >
                <i className="fas fa-angle-right" />
              </div>
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
                        onClick={e =>
                          this.props.change(e, day.format('YYYY-MM-DD'))
                        }
                      >
                        {day.format('D')}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Date;
