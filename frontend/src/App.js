
import './App.css';
import { Router, Routes, Route } from 'react-router-dom';
import Login from './component/login/Login.js';
import Index from './component/index/Index.js';
import Sign from './component/signin/Sign.js';
import Dashboard from './component/dashboard/Dashboard.js';
import Profile from './component/profile/Profile.js';
function App() {
  return (

    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path='/signup' element={<Sign />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>

  );
}
export default App;
