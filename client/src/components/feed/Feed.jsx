import { useEffect, useState } from 'react';
import Card from "../card/Card";
import "./feed.css";

export default function Feed(username) {
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER

  const [card, setCard] = useState([]);

  useEffect(() =>{
    const fetchCard = async () => {
      const res = username
      ? await fetch(`card/profile/${username}`) 
      : 
      setCard(res.data)
    };
    fetchCard();
  }, []);

  return (
    <div className="feedContainer">
      {card.map((c) => (<Card key={c._id} card={c} />))}
    </div>
  );
}