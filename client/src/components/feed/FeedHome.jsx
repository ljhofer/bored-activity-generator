import { useState, useEffect } from "react";
import Card from "../card/Card";
import { getTopActivities } from '../../utils/api'

export default function FeedHome( ) {
  const [activityList, setActivityList] = useState([]);

  const getActivity = async () => {
    try {
      const res = await getTopActivities();
      if (!res.ok) {
        throw new Error('No Activities');
      }
      const activityList = await res.json();
      console.log(activityList);
      setActivityList(activityList)
    } catch(err) {
      console.error(err);
    }
  };
  
  useEffect(() => {
    getActivity();

  }, []);
  
  return (
    <>
      <div className="homeFeed">

        {activityList.map((activity) => 
          <Card key={activity._id} activity={activity.activity} type={activity.type} participants={activity.participants}/>
        )}
      </div>
    </>
  );
}