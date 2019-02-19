import React from 'react';
import styled from 'styled-components';

let Party = props => {
  return (
    <PartySection>
      <Title>Party Size</Title>
      <CurrentParty
        onClick={e => {
          e.preventDefault();
          if (
            document.getElementById('partySizeDrop').style.display !== 'flex'
          ) {
            document.getElementById('partySizeDrop').style.display = 'flex';
          } else {
            document.getElementById('partySizeDrop').style.display = 'none';
          }
        }}
      >
        <div>For {props.size}</div>
        <i className="fas fa-angle-down" />
      </CurrentParty>
      <DropDown id="partySizeDrop">
        {Array.from(Array(20).keys()).map(size => (
          <Size
            key={size}
            onClick={event => {
              props.change(event, size + 1);
              document.getElementById('partySizeDrop').style.display = 'none';
            }}
          >
            {size + 1}
          </Size>
        ))}
      </DropDown>
    </PartySection>
  );
};

export default Party;

const PartySection = styled.div`
  position: relative;
  float: right;
`;

const Title = styled.div`
  width: 140px;
  height: 19px;
  font-size: 85%;
  font-weight: 400;
`;

const CurrentParty = styled.div`
  border: 0px;
  background-color: white;
  width: 300px;
  height: 34px;
  border-bottom: 1px solid #d8d9db;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 85%;
  &:hover {
    cursor: pointer;
    box-shadow: 0 1px 0 #da3743;
  }
`;

const DropDown = styled.div`
  display: none;
  position: absolute;
  z-index: 99;
  width: 300px;
  background-color: white;
  font-size: 88%;
  border: 1px solid #d8d9db;
  flex-direction: column;
  justify-content: space-around;
`;

const Size = styled.div`
  &:hover {
    background-color: blue;
    color: white;
  }
`;
