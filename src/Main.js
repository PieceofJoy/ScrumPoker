import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Main.css';

const Main = () => {
    return (
        <div className="main-page">
            <div>
                <h1>Scrum Poker</h1>
            </div>
            <div className="button-wrapper">
                <Link to="/room">
                    <Button variant="contained" color="primary">
                        Join Room
                    </Button>
                </Link>
                <Button variant="contained" color="primary">
                    Create Room 
                </Button>
            </div>
        </div>
    );
};

export default Main;