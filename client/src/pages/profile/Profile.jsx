import React, { useState, useEffect } from 'react';
import FeedProfile from "../../components/feed/FeedProfile";
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
import { useAuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";


export default function Profile () {
  const authMgr = useAuthContext()

  useEffect( () => {
    console.log(authMgr.authState)
  }, [])

  return (
    <>
      { (authMgr.authState !== null)? (
        <>
          <div className="banner">
            <img className="bannerImg" src="/assets/images/banner.jpg" alt="Banner"/>
          </div>
          <div className="profilePicture">
            <img className="profilePictureImg" src="/assets/images/default-profile.jpg" alt="Profile"/>
          </div>
          <div className="profileInfo">
            <div className="profileName">
              {authMgr.authState.data.username}
            </div>
          </div>
          <div className="profileFeed">
            <FeedProfile user={authMgr.authState.data} />
          </div>
        </>   
      )
      :
      (
        <div className="profileRedirct">
          Please 
          <Link to ={"/Signup"}>
            Sign Up
          </Link>
            or 
          <Link to ={"/Login"}>
            Log In
          </Link>
            To Access Your Profile.
        </div>
      ) }
    </>
  );
}