import LoginButton from './LoginButton';
import React from 'react';

const Login = ({ setUserAuth }) => {
    return (
        <div>
            <br></br>
            <br></br>
            Please login
            <LoginButton setUserAuth={setUserAuth} />
        </div>
    )
};

export default Login;