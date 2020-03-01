import React, { useContext } from 'react';
import {
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Main from './Main';
import Room from './Room';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/room/:roomId">
            <Room />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
