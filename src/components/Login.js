import LoginButton from './LoginButton';
import SignupButton from './SignupButton';
import React from 'react';

const Login = ({ setUserAuth }) => {
    return (
        <div>
            <br></br>
            <br></br>
            Please login or Sign Up
            <LoginButton setUserAuth={setUserAuth} />
            <SignupButton setUserAuth={setUserAuth} />
        </div>
    )
};

export default Login;