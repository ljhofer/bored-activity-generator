import Home from './pages/home/Home';
import LoginForm from './pages/login/LoginForm';
import Profile from './pages/profile/Profile';
import Navbar from './components/navbar-footer/Navbar';
import Setting from './pages/setting/Setting';
import SignupForm from './pages/signup/SignupForm';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/signup" element={<SignupForm/>}/>
        <Route path="/setting" element={<Setting/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
      </Routes>
    </Router>
  );
}

export default App;

