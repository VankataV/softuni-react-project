import { Routes, Route } from 'react-router-dom';

import Header from "./components/header/Header"
import Home from './components/home/Home';
import Plays from './components/theaters/Plays';
import Add from './components/add/Add';
import Account from './components/account/Account';
import Login from './components/login/Login';
import Register from './components/register/Register';

import image from './images/backgroundImage.png'
import { useState } from 'react';

function App() {
    const [authData, setAuthData]=useState()

    const onLoginSubmit=(values)=>{
        console.log(values);
    }

    const onRegisterSubmit=(values)=>{
        console.log(values);
    }

    return (
        <div style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            minHeight: `100vh`,
            backgroundRepeat: 'no-repeat',
        }}>

            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/plays' element={<Plays />} />
                <Route path='/add' element={<Add />} />
                <Route path='/account' element={<Account />} />
                <Route path='/login' element={<Login onLoginSubmit={onLoginSubmit}/>} />
                <Route path='/register' element={<Register onRegisterSubmit={onRegisterSubmit}/>} />
            </Routes>
        </div   >
    )
}

export default App
