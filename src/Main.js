import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal'; 
import { Input } from '@material-ui/core';
import State from './State';
import { createRoom, initSocket } from './socket';
import './Main.css';

const Main = () => {
  const [joinOpen, setJoinOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [roomId, setRoomId] = useState('');
  const [userName, setUserName] = useState('');
  const state = useContext(State);
  const history = useHistory();

  useEffect(() => {
    initSocket(state, history);
  }, []);
  return (
    <div className="main-page">
      <div>
        <h1>Scrum Poker</h1>
      </div>
      <div className="button-wrapper">
        <Button variant="contained" color="primary" onClick={() => setJoinOpen(true)}>
          Join Room
        </Button>
        <Button variant="contained" color="primary" onClick={() => setCreateOpen(true)}>
          Create Room
        </Button>
      </div>
      <Modal open={joinOpen} onClose={() => setJoinOpen(false)}>
        <div className="create-modal"> 
          <div>
            Room ID: 
            <Input value={roomId} onChange={(e) => setRoomId(e.target.value)} />
          </div>
          <div>
            User Name: 
            <Input value={userName} onChange={(e) => setUserName(e.target.value)} />
          </div>
          <Link to="/room"> 
            <Button id="create-room-button" variant="contained" color="primary">  
              Join
            </Button>
          </Link>
        </div>        
      </Modal>
      <Modal open={createOpen} onClose={() => setCreateOpen(false)}>
        <div className="create-modal"> 
          User Name: 
          <Input value={userName} onChange={(e) => setUserName(e.target.value)} />
            <Button id="create-room-button" variant="contained" color="primary" onClick={createRoom}>  
              Create
            </Button>
        </div>        
      </Modal>
    </div>
  );
};

export default Main;
