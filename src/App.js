import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import configFile from './firebaseConfig';
import logo from './logo.svg';
import './App.css';

let config = {};

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    config=configFile;
} else {
    config = {
      apiKey: process.env.firebase_api,
      authDomain: process.env.firebase_authDomain,
      databaseURL: process.env.firebase_databaseURL,
      projectId: process.env.firebase_projectId,
      storageBucket: process.env.firebase_storageBucket,
      messagingSenderId: process.env.firebase_messagingSenderId,
      appId: process.env.firebase_appId
    };
}

const firebaseApp = firebase.initializeApp(config);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

function App(props) {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = props;
  return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          user
            ? <p>Hello, {user.displayName}</p>
            : <p>Please sign in.</p>
        }
        {
          user
            ? <button onClick={signOut}>Sign out</button>
            : <button onClick={signInWithGoogle}>Sign in with Google</button>
        }
      </header>
    </div>
  );
}



export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
