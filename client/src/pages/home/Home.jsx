import Navbar from "../../components/navbar/Navbar";
// import ModalCategory from "../../components/modal-category/ModalCategory";
import Sidebar from "../../components/sidebar/Sidebar";
import CardNew from "../../components/card-new/CardNew";
import Feed from "../../components/feed/Feed";
import Footer from "../../components/footer/Footer";
import { Search, Person, Chat } from '@material-ui/icons'
// import Card from "../../components/card/Card"
import './home.css'

export default function Home () {
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      <Navbar/>
        <div className="hero">
          <img className="heroImg" src="/assets/images/hero.jpg" alt="Hero Image"/>
          <div className="heroBtnPosition"><button className="heroBtn"> <a href="#m1-o" class="link-1" id="m1-c">Modal 1</a></button></div>
          <nav>
              <label for="touch"><span>Search by Category</span></label>               
              <input type="checkbox" id="touch"/> 
                <ul class="slide">
                  <li><a href="#">1</a></li> 
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                </ul>
            </nav> 
          </div>
        
          <div className="featureContainer">
          <div class="site-section">
          <div class="site-section-inside">
            <div class="feature-box">
              <Search/>
                <h5>Find an Activity</h5>
                <p>Just think of how easy this is to use. Toddlers can do it. So can you!</p>
            </div>
            <div class="feature-box">
                <Person/>
                <h5>Share Your Activty </h5>
                <p>Show your Friends the awesome skills you have learned!</p>
            </div>
            <div class="feature-box">
                <Chat/>
                <h5>You'll Love It</h5>
                <p>See What Your Friends Are Up To!</p>
            </div>
          </div>
          </div>

        </div>
      {/* <Footer/> */}
    </>
  )
}