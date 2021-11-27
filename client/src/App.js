import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';

import Setting from './pages/setting/Setting';
import Signup from './pages/signup/Signup';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/setting" element={<Setting/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
      </Routes>
    </Router>
  );
}

export default App;

