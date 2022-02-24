import { useAuth0 } from '@auth0/auth0-react';
import React, { useState, useEffect } from 'react';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    const { name, picture, email } = user;
    const [isActive, setActive] = useState("false");

    const handleClick = (e) => {
        setActive(!isActive);
    };


    return (
        isAuthenticated && (
            <div>
                <div className="row align-items-center profile-header">
                    <div className="col-md-2 mb-3 mt-3">
                        <img
                            src={picture}
                            alt="Profile"
                            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                        />
                    </div>
                    <div className="col-md text-center text-md-left">
                        <h2>{name}</h2>
                        <p className="lead text-muted">{email}</p>
                    </div>
                </div>
                <div className="row">
                    <pre className="col-12 text-light bg-dark p-4">
                        {JSON.stringify(user, null, 2)}
                    </pre>

                    <br></br>
                    <button onClick={() => handleClick()} className='btn btn-secondary mt-2'>
                        Edit Profile
                    </button>
                </div>


                <div className={isActive ? "invisible" : "visible"}>
                    <form id='form'>
                        {/* <label for="fname">Full Name:</label><br></br>
                        <input type="text" id="fname" name="fname" defaultValue={user.name}></input><br></br> */}
                        <label for="url">URL:</label><br></br>
                        <input type="text" id="url" name="url" className='mb-1'></input><br></br>

                    </form>
                    <button className='btn btn-secondary mt-2'>
                        Confirm Changes
                    </button>
                </div>

            </div>


        )
    )
};

export default Profile;