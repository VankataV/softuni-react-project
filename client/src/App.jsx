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
import { login, register } from './services/authService';

function App() {
    const [authData, setAuthData] = useState()

    const onLoginSubmit = async (values) => {
        const result = await login(values.email, values.password)

        const data = {
            email:result.email,
            password:result.password,
        }

        setAuthData(data)
    }

    const onRegisterSubmit = async (values) => {
        const result = await register(values.email, values.password, values.firstName, values.lastName)

        const data = {
            email:result.email,
            password:result.password,
            firstName:result.firstName,
            lastName:result.lastName,
        }
        setAuthData(data)
    }

    const isAuthenticated=!!authData.email

    return (
        <div style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            minHeight: `100vh`,
            backgroundRepeat: 'no-repeat',
        }}>

            <Header isAuthenticated={isAuthenticated}/>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/plays' element={<Plays />} />
                <Route path='/add' element={<Add />} />
                <Route path='/account' element={<Account />} />
                <Route path='/login' element={<Login onLoginSubmit={onLoginSubmit} />} />
                <Route path='/register' element={<Register onRegisterSubmit={onRegisterSubmit} />} />
            </Routes>
        </div   >
    )
}

export default App
