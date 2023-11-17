import { Routes, Route } from 'react-router-dom';

import Header from "./components/header/Header"
import Home from './components/home/Home';
import Theaters from './components/theaters/Theaters';
import Add from './components/add/Add';
import Account from './components/account/Account';
import Login from './components/login/Login';
import Register from './components/register/Register';

function App() {

    return (
        <>
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/theaters' element={<Theaters />} />
                <Route path='/add' element={<Add />} />
                <Route path='/account' element={<Account />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </>
    )
}

export default App
