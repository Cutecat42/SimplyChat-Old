import '../css/App.css';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Login from './Login';
import Logout from './Logout';
import NavBar from './NavBar';
import Profile from './Profile';
import { useAuth0 } from '@auth0/auth0-react';
import React, { useState } from 'react';

function App () {
  const { user, isLoading } = useAuth0();
  const [userAuth, setUserAuth] = useState("");

  if (isLoading) {
    return (
      <div>
        Logging out...
      </div>
    )
  }

  return (
    <div className='App'>

      <NavBar user={user} />
      <Routes>
        <Route exact path='/Login' element={<Login setUserAuth={setUserAuth} />
        }>
        </Route>
        <Route exact path='/Logout' element={<Logout />
        }>
        </Route>
        <Route exact path='/About' element={<About />
        }>
        </Route>
        <Route exact path='/Profile' element={
          !user ? <Navigate to="/Login" /> : <Profile />
        }>
        </Route>
        <Route exact path='/' element={<Home />
        }>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
