import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import routes from './routes';
import Nav from './components/Nav/Nav';
// import Sass from './components/SassTesting/SassTesting';
import Test from './components/LEARNING COMPONENTS/DropDown';

function App(props) {
  return (
    <div className="App">
      {props.location.pathname === '/login' || props.location.pathname === '/register'
        ? null
        : <Nav />}
      {/* <Sass /> */}
      <Test />
      {/* {routes} */}
    </div>
  );
}

export default withRouter(App);
