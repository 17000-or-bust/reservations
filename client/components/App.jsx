import React from 'react';
import Booked from './Booked.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantId: Math.round(Math.random() * 100) || 0,
      date: '2019-02-14',
      time: '19:00',
      partySize: 2
    };
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
            <select>
              <option>6:30 PM</option>
              <option>7:00 PM</option>
              <option>7:30 PM</option>
            </select>
          </div>
        </div>

        <div id="find">
          <button>Find a Table</button>
        </div>

        <Booked rest={this.state.restaurantId} />

        <div id="count">You're in luck! We still have x timeslots left</div>
      </div>
    );
  }
}

export default App;
