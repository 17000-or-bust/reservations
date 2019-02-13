import React from 'react';
import $ from 'jquery';

let Party = props => {
  return (
    <div id="party">
      <select
        defaultValue="2"
        onChange={e => {
          var partySize = $('#party select')[0].nodeValue;
          props.change(e, partySize);
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
