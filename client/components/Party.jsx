import React from 'react';

let Party = props => {
  return (
    <div id="party">
      <select
        defaultValue="2"
        onChange={event => {
          var partySize = event.target.value;
          props.change(event, partySize);
        }}
      >
        {Array.from(Array(20).keys()).map(size => (
          <option key={size}>{size + 1}</option>
        ))}
      </select>
    </div>
  );
};

export default Party;
