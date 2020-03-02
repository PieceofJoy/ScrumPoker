import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button'; 
import "./Room.css";

const Room = () => {
    return (
        <div> 
            <div>
                <Link to="/"> 
                <h2>  Scrum Poker Room </h2>
                </Link>
            </div>
            <div class ="user-display"> 
                <div class = 'user-header'> Users </div>
                <div class = "user-list"> </div> 
            </div> 
            <div>
            <h3> Select a card </h3>
                <div class="cards-button"> 
                    <button class="cards"> 0 </button>
                    <button class="cards"> 1 </button>
                    <button class="cards"> 2 </button>
                    <button class="cards"> 3 </button>
                    <button class="cards"> 5 </button>
                    <button class="cards"> 8 </button>
                </div> 
                <div class="cards-button">
                    <button class="cards"> 13 </button>
                    <button class="cards"> 21 </button>
                    <button class="cards"> 34 </button>
                    <button class="cards"> 55 </button>
                    <button class="cards"> 89 </button>
                    <button class="cards"> Skip </button>
                </div>
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