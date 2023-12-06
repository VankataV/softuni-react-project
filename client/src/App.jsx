import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

import Header from "./components/header/Header"
import Home from './components/home/Home';
import Plays from './components/theaters/Plays';
import Add from './components/add/Add';
import Account from './components/account/Account';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Logout from './components/logout/Logout';
import PlayDetails from './components/playDetails/PlayDetails';

import image from './images/backgroundImage.png'
import { login, register } from './services/authService';

function App() {
    const [authData, setAuthData] = useState({})
    const navigate=useNavigate()

    const onLoginSubmit = async (values) => {
        const result = await login(values.email, values.password)

        const data = {
            email: result.email,
            password: result.password,
        }

        setAuthData(data)
        localStorage.setItem('accessToken', result.accessToken)
        navigate('/')
    }

    const onRegisterSubmit = async (values) => {
        const result = await register(values.email, values.password, values.firstName, values.lastName)

        const data = {
            email: result.email,
            password: result.password,
            firstName: result.firstName,
            lastName: result.lastName,
        }
        setAuthData(data)
        localStorage.setItem('accessToken', result.accessToken)
        navigate('/')
    }

    const logoutHandler=()=>{
        setAuthData({})
        localStorage.removeItem('accessToken')
        navigate('/')
    }

    function detailsPage(){
        const {playId} = useParams()
    }

    const isAuthenticated = !!authData.email

    return (
        <div style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            minHeight: `100vh`,
            backgroundRepeat: 'no-repeat',
        }}>

            <Header isAuthenticated={isAuthenticated} />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/plays' element={<Plays isAuthenticated={isAuthenticated}/>} />
                <Route path='/plays/:playId' element={<PlayDetails detailsPage={detailsPage}/>} />
                <Route path='/add' element={<Add />} />
                <Route path='/account' element={<Account />} />
                <Route path='/login' element={<Login onLoginSubmit={onLoginSubmit} />} />
                <Route path='/register' element={<Register onRegisterSubmit={onRegisterSubmit} />} />
                <Route path='/logout' element={<Logout logoutHandler={logoutHandler}/>} />
            </Routes>
        </div   >
    )
}

export default App
