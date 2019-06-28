import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './Main';
import Login from './Login';
import Dashboard from './Dashboard';
import  { Route, Switch, Redirect } from 'react-router-dom';

require('dotenv').config()

function App(props) {
    return (<Switch>
        <Route exact="exact" path='/' component={Main}/>
        <Route path='/login' component={Login}/>
        <Route path='/dashboard' component={Dashboard}/>
    </Switch>
    );
}

export default App;
