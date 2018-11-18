import * as React from 'react';
import { Route, Switch } from 'react-router';
import Home from './Home';
import Dashboard from './Dashboard';
const App = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/dashboard' component={Dashboard} />
  </Switch>
);

export  default App