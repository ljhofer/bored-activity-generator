import { useEffect, useState, useContext } from 'react';
import Card from "../card/Card";
import "./feed-profile.css";

export default function FeedProfile(props) {
  const [ activities, setActivities ] = useState([])

  // make an api call to get activities for this user
  const getActivities = async () => {
    const resp = await fetch("/api/activities?id=" + props.user._id)
    const data = resp.json()
    console.log(data)
    //setActivities(data)
  }

  useEffect( () => {
    console.log(props.user)
    getActivities()
  }, [])
  
 

  return (
    <div className="feedContainer">
      {activities.map( act => (
        <div className="card" key={act._id}>


        </div>
      ))}
    </div>
  );
}