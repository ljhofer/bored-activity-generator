import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import CardNew from "../../components/card-new/CardNew";
import Feed from "../../components/feed/Feed";
import Footer from "../../components/footer/Footer";
import './explore.css'

export default function Explore () {
  return (
    <>
      <Navbar/>
        <div className="exploreContainer">
          <div className="exploreCard">
            <Feed/>
          </div>
        </div>
      <Footer/>
    </>
  )
}