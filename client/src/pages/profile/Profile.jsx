import { useEffect, useState } from 'react';

import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import CardNew from "../../components/card-new/CardNew";
import Feed from "../../components/feed/Feed";
import Footer from "../../components/footer/Footer";
// import ProfileHeroView from "../../components/profile-hero-view/ProfileHeroView";
// import ProfileHeroUser from "../../components/profile-hero-user/ProfileHeroUser"; 
import './profile.css'
import { useParams } from "react-router"


export default function Profile () {
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER

  const [user, setUser] =  useState<null | {user: any}>(null);
  // const { user: userCard } = useContext(AuthContext);
  const params = useParams();
  console.log(params.username);

  // 
  // useEffect(() =>{
  //   const fetchUser = async () => {
  //     const res = await fetch(`/users?userId=${ card.userId}`);
  //     setUser(res.data)
  //   };
  //   fetchUser();
  // }, [card.userId]);

  return (
    <>
      <Navbar/>
      {/* { user ? <ProfileHeroUser/> : <ProfileHeroView/> } */}
        <div className="wholeContainer">
          <div className="asideContainer">
            <Sidebar/>
          </div>
          <div className="mainContainer">
            <CardNew/>
            <Feed username="sophia"/>
          </div>
        </div>
      <Footer/>
    </>
  )
}