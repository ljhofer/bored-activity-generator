// import { Person, Settings, ExitToApp } from '@material-ui/icons';
// // import { AuthContext } from '../../context/AuthContext';
// // import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';


// export default function Navbar(username) {
//   let status = JSON.parse(localStorage.getItem("user")) || null;
//   const history = useNavigate();

//   const nagvigate = () => {
//     history("/");
//   } 
  

//   // const [user, setUser] =  useState<null | {user: any}>(null);
//   // const { user: userCard } = useContext(AuthContext);

//   // useEffect(() =>{
//   //   const fetchUser = async () => {
//   //     const res = await fetch(`/users?userId=${ username }`);
//   //     setUser(res.data)
//   //   };
//   //   fetchUser();
//   // }, [username]);
 
//   const logout = () => {
//     localStorage.clear();
//     nagvigate();
//   }
 

//   return (


//     <div className="navbarContainer">
//       <div className="navbarLogo">
//       <Link to={`/`}>
//         <div className="logo">Bored?</div>
//         </Link>
//       </div>

//       <div className="navbarButtons">
//       { localStorage.getItem("user") ?
//       <>
//       <Link to={`/user/profile/:username`}>
//         <Person/>
//       </Link>
//       <Link to={`/Setting`}>
//         <Settings/>
//       </Link>
//       </>
//       :
//       <>
//       <Link to={`/Login`}>
//         Log In
//       </Link>
//       <Link to={`/Signup`}>
//         Sign Up
//       </Link>
      
//       <button onClick={logout}><ExitToApp/></button>
//       </>
//   }
      
        
//       </div>

//     </div>
//   )
// }

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from '../../pages/signup/SignupForm';
import LoginForm from '../../pages/login/LoginForm';

import Auth from '../../utils/auth';

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="navbarContainer">
        <div className="navbarLogo">
          <Link to={`/`}>
            <div className="logo">Bored?</div>
          </Link>
        </div>
        <div className="navbarBtn">
          {Auth.loggedIn() ? (
            <>
              <Nav.Link as={Link} to='/profile'>
                Your Profile
              </Nav.Link>
              <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
            </>
          ) : (
            <>
            <div className="navbarBtn">
              <Link to={`/login`}>
                Log In
              </Link>
            </div>
            <div className="navbarBtn">
              <Link to={`/signup`}>
              Sign Up
              </Link>
            </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AppNavbar;
