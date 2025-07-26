
import './App.css';
import { Router, Routes, Route } from 'react-router-dom';
import Login from './component/log-in/Login.js';
import Index from './component/index/Index.js';
import Sign from './component/sign-up/Sign.js';
import Profile from './component/profile/Profile.js';
import Message from './component/MessagePage/Message.js';
import Main from './component/main/Main.js';
// import Reel from './component/reel/Reel.js';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/log-in" element={<Login />} />
      <Route path='/sign-up' element={<Sign />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/Message' element={<Message />} />
      <Route path='/Main' element={<Main />} />
      {/* <Route path='/reel' element={<Reel />} /> */}
    </Routes>

  );
}
export default App;
