import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Profil from './pages/Profil';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />} /> {/* Base Route */}
                <Route path='/register' element={<Register />} />
                <Route path='/profil' element={<Profil />} />
            </Routes>
        </Router>
    );
};

export default App;
