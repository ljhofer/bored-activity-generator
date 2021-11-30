import { useState, useEffect } from "react"
import Home from './pages/home/Home';
import LoginForm from './pages/login/LoginForm';
import Profile from './pages/profile/Profile';
import Navbar from './components/navbar-footer/Navbar';
import Setting from './pages/setting/Setting';
import SignupForm from './pages/signup/SignupForm';
import  { AuthProvider } from './context/AuthContext'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  // const [ authState, setAuthState ] = useState({})


  return (
    <Router>
      <AuthProvider>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/signup" element={<SignupForm/>}/>
          <Route path="/setting" element={<Setting/>}/>
          <Route exact path="/profile" element={<Profile/>}/>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;

