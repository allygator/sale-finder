import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import Button from '@material-ui/core/Button';
// import Dashboard from './Dashboard';
import  { Link } from 'react-router-dom';

require('dotenv').config()

let config = {
    apiKey: process.env.REACT_APP_FIREBASE_API,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID
};

const firebaseApp = firebase.initializeApp(config);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider()
};

function Login(props) {
    const {user, signInWithGoogle} = props;
    return (<div className="Login">
        {
            user
                ? <Link to="/dashboard" ><Button>Dashboard</Button></ Link>
                : <p>Please sign in.</p>
        }
        {
            user
                ? null
                : <Button onClick={signInWithGoogle}>Sign in with Google</Button>
        }
    </div>);
}

export default withFirebaseAuth({providers, firebaseAppAuth})(Login);
