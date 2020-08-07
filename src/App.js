import React, { useEffect } from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import routes from './routes';
import Nav from './components/Nav/Nav';
import { connect } from 'react-redux';
import { getUser } from './redux/actionCreators'
// import Sass from './components/SassTesting/SassTesting';
// import Dropdown from './components/LEARNING COMPONENTS/DropDown';
// import DZA from './LEARNING COMPONENTS/DropzoneAmazon';

function App(props) {
  useEffect(() => {
    props.getUser()
  }, []);
  return (
    <div className="App">
      {props.location.pathname === '/login' || props.location.pathname === '/register'
        ? null
        : <Nav />}
      {/* <Sass /> */}
      {/* <Dropdown /> */}
      {/* <DZA /> */}
      {routes}
    </div>
  );
};

const mapDispatchToProps = {
  getUser
}

export default withRouter(connect(null, mapDispatchToProps)(App));
