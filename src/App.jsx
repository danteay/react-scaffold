import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';

import { UserContext } from './context';

import './App.sass';

const App = () => {
  const [user, setUser] = useState({ isLogin: false });

  return (
    <Router>
      <Switch>
        <UserContext.Provider value={{ user, setUser }}>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </UserContext.Provider>
      </Switch>
    </Router>
  );
};

export default App;
