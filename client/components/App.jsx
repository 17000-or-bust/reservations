import React from 'react';
import moment from 'moment';
import Date from './Date.jsx';
import Hour from './Hour.jsx';
import Booked from './Booked.jsx';
import Reserve from './Reserve.jsx';
import Party from './Party.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantId: Math.round(Math.random() * 100) || 1,
      date: moment().format('YYYY-MM-DD'),
      time: '19:00',
      partySize: 2,
      buttonShown: true
    };

    this.changeDate = this.changeDate.bind(this);
    this.changeParty = this.changeParty.bind(this);
  }

  changeDate(event, date) {
    event.preventDefault();
    if (moment().isSameOrBefore(date, 'day')) {
      this.setState(
        {
          date: date
        },
        () => {
          console.log('save the date!', this.state.date);
        }
      );
    }
  }

  changeTime(event, time) {
    event.preventDefault();
    var timeTwentyFour = moment(time, ['h:mm A']).format('HH:mm');
    this.setState({
      time: timeTwentyFour,
      buttonShown: true
    });
  }

  changeParty(event, party) {
    event.preventDefault();
    this.setState({
      partySize: party
    });
  }

  toggleButton() {
    this.setState({
      buttonShown: !this.state.buttonShown
    });
  }

  render() {
    return (
      <div id="reservation">
        <h3>Make a reservation</h3>

        <Party size={this.state.partySize} change={this.changeParty} />

        <div id="datetime">
          <Date change={this.changeDate} date={this.state.date} />
          <div id="time">
            <Hour hour={this.state.time} change={this.changeTime.bind(this)} />
          </div>
        </div>

        <Reserve
          btn={this.state.buttonShown}
          restId={this.state.restaurantId}
          date={this.state.date}
          time={this.state.time}
          toggleBtn={this.toggleButton.bind(this)}
        />

        <Booked rest={this.state.restaurantId} />
      </div>
    );
  }
}

export default App;
