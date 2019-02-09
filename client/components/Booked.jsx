import React from 'react';
import $ from 'jquery';

class Booked extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timesBooked: 0
    };
  }

  componentDidMount() {
    $.ajax({
      url: 'http://localhost:3003/api/reserve/load/' + this.props.rest,
      method: 'GET',
      success: nTimes => {
        if (nTimes[0]) {
          this.setState({ timesBooked: nTimes[0].bookings_today });
        }
      },
      error: err => console.error('Failed to load: ', err)
    });
  }

  render() {
    return <div id="booked">Booked {this.state.timesBooked} times today</div>;
  }
}

export default Booked;
