import React from 'react';
import moment from 'moment';
import Hour from './Hour.jsx';
import Booked from './Booked.jsx';
import Reserve from './Reserve.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantId: Math.round(Math.random() * 100) || 1,
      date: '2019-02-14',
      time: '19:00',
      partySize: 2,
      buttonShown: true
    };
  }

  changeTime(event, time) {
    event.preventDefault();
    var timeTwentyFour = moment(time, ['h:mm A']).format('HH:mm');
    this.setState({
      time: timeTwentyFour,
      buttonShown: true
    });
  }

  toggleButton() {
    this.setState({
      buttonShown: !this.state.buttonShown
    });
  }

  render() {
    return (
      <div>
        <h3>Make a reservation</h3>

        <div id="party">
          Party Size
          <select>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>

        <div id="datetime">
          <div id="date">
            <select>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
            </select>
          </div>
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
