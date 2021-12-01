import React from 'react'
import { useEffect, useRef, useState } from "react";
import FeedHome from "../../components/feed/FeedHome";
import { Search, Person, Chat } from '@material-ui/icons'
import  ModalRandom  from '../../components/modal/ModalRandom';
import  ModalCategoryBusyWork  from '../../components/modal/ModalCategoryBusyWork';
import  ModalCategoryDiy  from '../../components/modal/ModalCategoryDiy';
import  ModalCategoryRecreational  from '../../components/modal/ModalCategoryRecreational';
import  ModalCategoryEducation  from '../../components/modal/ModalCategoryEducation';
import  ModalCategoryMusic from '../../components/modal/ModalCategoryMusic';
import  ModalCategoryRelaxation from '../../components/modal/ModalCategoryRelaxation';
import  ModalCategorySocial from '../../components/modal/ModalCategorySocial';


import './home.css'

export default function Home () {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [isMenuOpen]);

  

  return (
    <>
      <div className="hero">
        <img className="heroImg" src="/assets/images/hero.jpg" alt="Hero"/>
        <div className="modalPosition"><ModalRandom/></div>
          <div className="surrounding">
            <div className="wrapper" ref={ref}></div>
            <button className="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              Find By Category
            </button>
            {isMenuOpen && (
              <ul className="list">
                <li className="list-item"><ModalCategorySocial/></li>
                <li className="list-item"><ModalCategoryMusic/></li>
                <li className="list-item"><ModalCategoryEducation/></li>
                <li className="list-item"><ModalCategoryRelaxation/></li>
                <li className="list-item"><ModalCategoryDiy/></li>
                <li className="list-item"><ModalCategoryRecreational/></li>
                <li className="list-item"><ModalCategoryBusyWork/></li>
              </ul>
            )}
        </div>
      </div>
      <div class="homeHeader">Top Activities</div>
      <div class="homeFeedCards">
        <FeedHome />
      </div>
      <div className="featureContainer">
        <div class="homeHeader">Features</div>
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
    </> 
  )
};