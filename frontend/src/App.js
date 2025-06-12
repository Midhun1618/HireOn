
import Home from './pages/Home'

import './App.css';
import { Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Login from './pages/Login';
function App() {
  return (

       <Routes>
        <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/signup" element={<Signup/>} />
              <Route path="/login" element={<Login/>} />

      </Routes>

  );
}

export default App;
