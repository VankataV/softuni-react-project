import { Routes, Route } from 'react-router-dom';

import Header from "./components/header/Header"
import Home from './components/home/Home';
import Plays from './components/theaters/Play';
import Add from './components/add/Add';
import Account from './components/account/Account';
import Login from './components/login/Login';
import Register from './components/register/Register';

import image from './images/backgroundImage.png'

function App() {

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
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </div   >
    )
}

export default App
