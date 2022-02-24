import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SignupButton = ({ setUserAuth }) => {
    const { user, loginWithRedirect } = useAuth0();

    const handleClick = () => {
        setUserAuth(user);
        loginWithRedirect({
            screen_hint: 'signup',
        });
    };

    return (
        <>
            <br></br>
            <br></br>
            <button onClick={() => handleClick()} className='btn btn-secondary'>
                Sign Up
            </button>
        </>
    )
};


export default SignupButton;