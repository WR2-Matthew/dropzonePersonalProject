import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Logbook from './components/Logbook/Logbook';
import Uspa from './components/Uspa/Uspa';
import LoginRequired from './components/LoginRequired/LoginRequired';
import Account from './components/Account/Account';

export default (
  <Switch>
    <Route exact path='/' component={Dashboard} />
    <Route exact path='/login' component={Login} />
    <Route path='/register' component={Register} />
    <Route path='/logbook' component={Logbook} />
    <Route path='/membership' component={Uspa} />
    <Route path='/login/required' component={LoginRequired} />
    <Route path='/account' component={Account} />
  </Switch>
);