import { useEffect, useState } from 'react';

import './sidebar.css'

export default function ProfileHeroView(username) {
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER
  const [user, setUser] =  useState({});

  useEffect(() =>{
    const fetchUser = async () => {
      const res = await fetch(`/users?userId=${ username}`);
      setUser(res.data)
    };
    fetchUser();
  }, [username]);

  return (
    <>
      <div className="banner">
        <img className="bannerImg" src={user.banner || PublicFolder+"./default-profile"} alt="Banner"/>
      </div>
      <div className="profilePicture">
        <img className="profilePictureImg" src={user.profilePicture || PublicFolder+"./default-profile"} alt="Profile"/>
      </div>
      <div className="profileInfo">
        <div className="profileName">
          <span>{user.firstName}</span>
          <span>{user.lastName}</span>
        </div>
        <div className="profileBio">{user.bio}</div>
      </div>
      <div>
        <button className="followProfile">Follow</button>
        <button className="unfollowProfile">Unfollow</button>
      </div>
    </>
  )
}