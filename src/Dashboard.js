import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import logo from './logo.svg';
import './App.css';
import Header from './Header';

require('dotenv').config()

function Dashboard(props) {
  return (
      <div className="Dashboard">
      <Header />
      <div id="content">
        <img src={logo} className="App-logo" alt="logo" />
        
    </div>
    </div>
  );
}

export default Dashboard;
