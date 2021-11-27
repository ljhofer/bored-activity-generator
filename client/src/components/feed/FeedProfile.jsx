import { useEffect, useState, useContext } from 'react';
import CardUser from "../card/CardUser";
import { AuthContext } from '../../context/AuthContext';
import "./feed-profile.css";

export default function FeedProfile({username}) {
  const [cardUser, setCardUser] = useState([]);
  const { user } = useContext(AuthContext)

  useEffect(() =>{
    const fetchCardUser = async () => {
      const res = await fetch(`/user/profile/${username}`) 
      // : await fetch(`/user/feed/${user._id}`);
      setCardUser(
        res.data.sort((a, b) => {
          return new Date(a.createdAt) - new Date(b.createdAt)
        })
      )
    };
    fetchCardUser();
  }, [username]);

  return (
    <div className="feedContainer">
    {(!username || username === user.username) && <CardNew />}

      {cardUser.map((c) => (<CardUser key={c._id} cardUser={c} />))}
    </div>
  );
}