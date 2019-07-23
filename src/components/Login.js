import React, {useContext, useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
// import Dashboard from './Dashboard';
// import  { Link } from 'react-router-dom';
import {FirebaseContext} from './Firebase';
import  UserContext from './UserContext';

function Login() {
    const firebase = useContext(FirebaseContext);
    const userData = useContext(UserContext);
    const [user, setUser] = useState('');

    function signin() {
        firebase.doSignInWithGoogle().then(authUser => {
            setUser(authUser.user);
        }).catch(error => {
            console.log(error);
        });
    };

    function signout() {
        firebase.doSignOut()
    };

    useEffect(() => {
        firebase.auth.onAuthStateChanged(authUser => {
            authUser
                ? setUser(authUser)
                : setUser(null);
        });
    }, [firebase.auth])

    useEffect(() => {
        userData.updateUser({authUser: user });
    }, [user, userData])

    return (<div className="Login">
        <div className="signup">
            {
                user
                    ? <Button onClick={signout}>Logout</Button>
                    : <Button onClick={signin}>Sign in with Google</Button>
            }

        </div>
        <div className="signin"></div>
    </div>);
}

export default Login;
