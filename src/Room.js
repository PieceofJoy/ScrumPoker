import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import "./Room.css";

const Room = ({ users }) => {
    return (
        <div> 
            <div>
                <Link to="/"> 
                <h2>  Scrum Poker Room </h2>
                </Link>
            </div>
            <div> 
            <span className="user-display"> 
                <div className='user-header'> Users </div>
                <div className="user-list">
                    {
                        Object.keys(users).map((key) => (
                            <div>
                                {users[key].name} {users[key].score}
                            </div>
                        ))
                    }
                </div> 
            </span>
            <span className="cards-wrapper">
            <h3> Select a card </h3>
                <div className="cards-button"> 
                    <button className="cards"> 0 </button>
                    <button className="cards"> 1 </button>
                    <button className="cards"> 2 </button>
                    <button className="cards"> 3 </button>
                    <button className="cards"> 5 </button>
                    <button className="cards"> 8 </button>
                </div> 
                <div className="cards-button">
                    <button className="cards"> 13 </button>
                    <button className="cards"> 21 </button>
                    <button className="cards"> 34 </button>
                    <button className="cards"> 55 </button>
                    <button className="cards"> 89 </button>
                    <button className="cards"> Skip </button>
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