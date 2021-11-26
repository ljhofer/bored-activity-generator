import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import './login.css'

export default function Login () {
  return (
    <>
    <Navbar/>
    {/* <div  >
    <img className="loginBackground" src="./assets/images/hero10.jpg"/>
    </div> */}
  
      <div className="formPageContainer">
        <div className="formPageCard">
          <div className="formContainer">
            <input placeholder="Email" className="formInput" />
            <input placeholder="Password" className="formInput" />
            <button className="formBtn">Log In</button>
            <button className="formBtn">Create a New Account</button>
            <div className="formForgot">Forgot Password?</div>
          </div>
        </div>
      </div>
      
    <Footer/>
    </>
  )
}