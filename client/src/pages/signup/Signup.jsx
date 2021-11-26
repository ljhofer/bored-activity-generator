import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import './Signup.css'

export default function SignUp () {
  return (
    <>
    <Navbar/>
      <div className="formPageContainer">
        <div className="formPageCard">
          <div className="formContainer">
            <input placeholder="Username" className="formInput" />
            <input placeholder="Email" className="formInput" />
            <input placeholder="Password" className="formInput" />
            <input placeholder="Password Again" className="formInput" />
            <button className="formBtn">Sign Up</button>
            <button className="formBtn">
              Log into Account
            </button>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  )
}