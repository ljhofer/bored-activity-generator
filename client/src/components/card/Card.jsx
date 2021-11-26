import { useEffect, useState } from 'react';
import "./card.css";
import { MoreVert } from "@material-ui/icons";
import {format} from "timeago.js";
import { Link } from "react-router-dom";

// import { AuthContext } from "../../context/AuthContext";




export default function Card({ card }) {
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER

  const [user, setUser] =  useState<null | {user: any}>(null);
  // const { user: userCard } = useContext(AuthContext);




  useEffect(() =>{
    const fetchUser = async () => {
      const res = await fetch(`/users?userId=${ card.userId}`);
      setUser(res.data)
    };
    fetchUser();
  }, [card.userId]);



  return (
    <div className="cardContainer">
        <div className="cardHeader">
          <div className="cardHeaderInfo">
          <Link to={`profile/${user.username}`}>
            <img
              className="cardProfileImg"
              src={user.profilePicture || PublicFolder+"default-profile"}
              alt="Profile Picture"
            />
            </Link>
            <span className="cardUsername">
              { user.firstName && user.lastName }
            </span>
            <span className="cardDate">{format(card.createdAt)}</span>
          </div>
          <div className="cardTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="cardCenter">
          <span className="cardDescription">{card?.description}</span>
          <img className="postImg" src={PublicFolder+card.cardImg} alt="" />
        </div>
        {/* <div className="cardBottom">
          <div className="cardBottomRight">
            <span className="postCommentText">{comment.comment} comments</span>
          </div>
        </div> */}
    </div>
  );
}