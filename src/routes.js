import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Logbook from './components/Logbook/Logbook';
import Uspa from './components/Uspa/Uspa';

export default (
  <Switch>
    <Route exact path='/' component={Dashboard} />
    <Route path='/login' component={Login} />
    <Route path='/register' component={Register} />
    <Route path='/logbook/:id' component={Logbook} />
    <Route path='/membership/:id' component={Uspa} />
  </Switch>
);