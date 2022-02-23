// import { UsersCheck } from '../database/ConfidenceTexts';
import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt="Italian Trulli" className="img-thumbnail rounded mx-auto d-block mt-3 mb-2"></img>
                <p>Hi {user.name}!</p>
                <p>Hi!</p>
            </div>
        )
    )
};

export default Profile;