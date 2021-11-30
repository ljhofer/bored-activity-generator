import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { TextField } from '@material-ui/core';
import Comments from '../comment/Comment';
import SendIcon from '@material-ui/icons/Send';
import "./card.css";
import { Link } from 'react-router-dom';
import { getTopActivities } from '../../utils/api'




function Card(props) {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }





  return (
    <div className="card">
      <div className="post__header">
        <h2>Activity:{props.activity}</h2>
        <p>Type: {props.type}</p>
        <p>Participants: {props.participants}</p>
        <div className="getComment">
        {commentList.map((comment) => 
          <Card key={comment._id} text={comment.text}/>
        )}
        </div>
        <form className="post__form"><TextField label="add comment" size="small" variant="outlined" className="post__input" placeholder="add comment"/>
          <button variant="contained" className="buttonStars" size="small" endIcon={<SendIcon />}>Send</button>
        </form>
        <div style={styles.stars}>
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={24}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                style={{
                  marginRight: 10,
                  cursor: "pointer"
                }}
              />
            )
          })}
        </div>  
      </div>
    </div>
  )
}


export default Card;


const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
};

const styles = {
  containerStars: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textareaStarts: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300
  },
  buttonStars: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  }

};
