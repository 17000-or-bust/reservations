import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '2019-02-14',
      time: '19:00',
      partySize: 2
    };
  }

  render() {
    return <div>Hello Culinary World</div>;
  }
}

export default App;
