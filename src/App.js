import React, { useState, useEffect } from 'react';
import {
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import { initSocket } from './socket';
import Main from './Main';
import Room from './Room';
import './App.css';

const App = () => {
  const [state, setState] = useState({
    users: {}
  });
  const history = useHistory();

  useEffect(() => {
    initSocket(setState, history);
  }, []);
  return (
    <div className="App">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/room/:roomId">
            <Room users={state.users} />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
