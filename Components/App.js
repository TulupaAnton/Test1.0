import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Resume from './Resume';

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path='/' Component={Home} />
        <Route path='/:username' Component={Resume} />
      </Switch>
    </Router>
  );
}
