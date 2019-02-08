import React from 'react';

class Booked extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      times: 0
    };
  }

  render() {
    return <div id="booked">Booked {this.state.times} times today</div>;
  }
}

export default Booked;
