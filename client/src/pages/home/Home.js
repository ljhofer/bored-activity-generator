import Navbar from "../../components/navbar/Navbar";
import ModalRandom from "../../components/modal-random/ModalRandom";
import ModalCategory from "../../components/modal-category/ModalCategory";
import Footer from "../../components/footer/Footer";
import './home.css'

export default function Home () {
  return (
    <>
    <Navbar/>
    <ModalRandom/>
    <ModalCategory/>
    <Footer/>
    </>
  )
}