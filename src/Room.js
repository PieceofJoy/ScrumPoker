import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { vote } from './socket';
import './Room.css';

const Room = ({ users }) => {
  return (
    <div>
      <div>
        <Link to="/">
          <h2> Scrum Poker Room </h2>
        </Link>
      </div>
      <div>
        <span className="user-display">
          <div className="user-header"> Users </div>
          <div className="user-list">
            {Object.keys(users).map((key, index) => (
              <div key={users.name + index}>
                {users[key].name} {users[key].score}
              </div>
            ))}
          </div>
        </span>
        <span className="cards-wrapper">
          <h3> Select a card </h3>
          <div className="cards-button">
            <button className="cards" onClick={() => vote(0)}> 0 </button>
            <button className="cards" onClick={() => vote(1)}> 1 </button>
            <button className="cards" onClick={() => vote(2)}> 2 </button>
            <button className="cards" onClick={() => vote(3)}> 3 </button>
            <button className="cards" onClick={() => vote(5)}> 5 </button>
            <button className="cards" onClick={() => vote(8)}> 8 </button>
          </div>
          <div className="cards-button">
            <button className="cards" onClick={() => vote(13)}> 13 </button>
            <button className="cards" onClick={() => vote(21)}> 21 </button>
            <button className="cards" onClick={() => vote(34)}> 34 </button>
            <button className="cards" onClick={() => vote(55)}> 55 </button>
            <button className="cards" onClick={() => vote(89)}> 89 </button>
            <button className="cards" onClick={() => vote(null)}> Skip </button>
          </div>
        </span>
      </div>
      <div>
        <Button className="show-btn" variant="contained" color="primary">
          Show Results
        </Button>
        <Button variant="contained" color="primary">
          Hide Results
        </Button>
      </div>
    </div>
  );
};

export default Room;
