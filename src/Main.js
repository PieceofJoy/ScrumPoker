import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal'; 
import { Input } from '@material-ui/core';
import './Main.css';

const Main = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputeValue] = useState('');

  return (
    <div className="main-page">
      <div>
        <h1>Scrum Poker</h1>
      </div>
      <div className="button-wrapper">
        <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
          Join Room
        </Button>
        <Button variant="contained" color="primary">
          Create Room
        </Button>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="create-modal"> 
          Room ID: 
          <Input value={inputValue} onChange={(e) => setInputeValue(e.target.value)} />
          <Link to="/room"> 
            <Button id="create-room-button" variant="contained" color="primary">  
              Join
            </Button>
          </Link>
        </div>        
      </Modal>
    </div>
  );
};

export default Main;
