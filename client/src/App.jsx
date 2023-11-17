import {Routes, Route} from 'react-router-dom';

import Header from "./components/header/Header"
import Home from './components/home/Home';
import Theaters from './components/theaters/Theaters';

function App() {

    return (
        <>
            <Header />

            <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/theaters' element={<Theaters />} />
            </Routes>
        </>
    )
}

export default App
