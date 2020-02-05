import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button'; 
import "./Room.css";

const Room = () => {
    return (
        <div> 
            <div>
                <h2>  Scrum Poker Room </h2>
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
                    <button class="cards"> ? </button>
                </div>
            </div>

            <div> 
                <Link to="/"> 
                    <Button variant="contained" color="primary">
                        Exit
                    </Button>
                </Link>
                
                    <Button variant="contained" color="primary">
                            Vote 
                    </Button>
                
            </div>
        </div>
    );
};

export default Room;