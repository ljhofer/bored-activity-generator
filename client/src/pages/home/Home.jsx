import React from 'react'
import { useEffect, useRef, useState } from "react";
import Navbar from "../../components/navbar-footer/Navbar";
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
    <div>
      <Navbar/>
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
        </div>
  )
};
