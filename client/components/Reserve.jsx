import React from 'react';
import $ from 'jquery';

class Reserve extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      times: []
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
      },
      error: err => {
        console.log('Error getting times: ', err);
      }
    });
  }

  render() {
    if (this.props.error) {
      return (
        <div id="reserve">
          Unfortunately, this restaurant can't accept that reservation. Have
          another time in mind?
        </div>
      );
    } else {
      return (
        <div id="reserve">
          <button onClick={e => this.findTimes(e)}>Find a Table</button>
        </div>
      );
    }
  }
}

export default Reserve;
