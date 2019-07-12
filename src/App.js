import React from 'react';
import './App.css';
import Main from './Main';
import Login from './Login';
import Dashboard from './Dashboard';
import  { Route, Switch, } from 'react-router-dom';

function App() {
    return (
        <Switch>
        <Route path='/' exact component={Main}/>
        <Route path='/login' component={Login}/>
        <Route path='/dashboard' component={Dashboard}/>
    </Switch>
    );
}

export default App;
