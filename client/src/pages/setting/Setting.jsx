import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import './setting.css'

export default function Setting () {
  return (
    <>
    <Navbar/>
    <div className="formPageContainer">
        <div className="formPageCard">
          <div className="formContainer">
    <input placeholder="Name" className="formInput" />
      <input placeholder="Email" className="formInput" />
      <input placeholder="Bio" className="formInput" />
      <button className="formBtn">Update</button>
    </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}