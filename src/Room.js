import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button'; 

const Room = () => {
    return (
        <div>
            Scrum Poker Room 
            <Link to="/"> 
                <Button variant="contained" color="primary">
                    Exit
                </Button>
            </Link>
        </div>
    );
};

export default Room;