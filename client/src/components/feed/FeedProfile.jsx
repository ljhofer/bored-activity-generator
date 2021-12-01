import { useEffect, useState, useContext } from 'react';
import Card from "../card/Card";
import "./feed-profile.css";

export default function FeedProfile(props) {
  const [ activityList, setActivityList ] = useState([])

  // make an api call to get activities for this user
  const getActivities = async () => {
    const resp = await fetch(`/api/user/${props.user._id}`);
    const data = await resp.json();
    setActivityList(data.activities);
    // logActivities();
  }

  // const logActivities = () => {
  //   console.log(activityList);
  // }

  useEffect( () => {
    console.log(props)
    getActivities()
  }, [])
  
  

  return (

    <>
      <div className="feedContainer">
        {activityList.map( (act) => 
          <div className="card" key={act._id}>
            <div className="post__header">
              <h2>Activity:{act.activity}</h2>
              <p>Type: {act.type}</p>
              <p>Participants: {act.participants}</p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}