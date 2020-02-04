import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button'; 
import "./Room.css";

const Room = () => {
    return (
        <div>
            <h2> 
            Scrum Poker Room
            </h2> 
            <h3> 
                Select a card 
            </h3>
            <Link to="/"> 
                <Button variant="contained" color="primary">
                    Exit
                </Button>
            </Link>
            <Button variant="contained" color="primary">
                    Vote 
                </Button>
        </div>
    );
};

export default Room;