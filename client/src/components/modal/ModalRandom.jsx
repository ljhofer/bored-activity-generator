import React, { useState } from "react";
import "./modal-category.css";
import { FaStar } from "react-icons/fa";
import { TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { createActivity, getActivityById }  from '../../utils/api';
import { useNavigate, useParams } from 'react-router-dom';

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

export default function ModalRandom() {
  
  const defActivity = { activity: "", type: "", participants: 0, actkey: "" }

  const [modal, setModal] = useState(false);
  const [activity, setActivity] = useState('');
  const [type, setType] = useState('');
  const [participants, setParticipants] = useState('');
  const [actkey, setActKey ]= useState('');
  const [accessibility, setAccessibility] = useState('');
  const [comment, setComment] = useState('');
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [activityToEdit, setActivityToEdit] = useState(defActivity);
  const navigate = useNavigate();
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

  const getAPI = async () => {
    const url= "http://www.boredapi.com/api/activity?type=";
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            displayResults(data);
            
        })
  }

  const displayResults = async (data) => {
    setActivity(data.activity);
    setType(data.type);
    setParticipants(data.participants);
    setActKey(data.key);
    setAccessibility(data.accessibility);
   
    const act = {actkey: data.key, activity: data.activity, type: data.type, participants: data.participants, accessibility: data.accessibility}
    createActivity(act);
    return
  }
  // const createNewActivity = async (data) => {
  //   const res = await createActivity(data);
  // }
  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    getAPI();   
    toggleModal();
  };
  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }


  const handleInputChange = (event) => {
    const { comment , value } = event.target;
    // setComment(comment.text);
    setActivityToEdit({ ...activityToEdit, [comment]: value });
    console.log(activityToEdit);
  };

  const saveActivity = async (e) => {
    e.preventDefault();
    
    try {
      const res = await getActivityById(actkey);

      if (!res.length) {
        const res = await createActivity(activityToEdit);

        if (!res.ok) {
          throw new Error('something went wrong!');
        }

        const act = await res.json();
        console.log(act);

        navigate(`/activity/${act.actkey}`);
      }

    } catch (err) {
      console.error(err);
    }





    // if( !activityToEdit ){
    //   try {
    //     const res = await createActivity(activityToEdit);

    //     if (!res.ok) {
    //       throw new Error('something went wrong!');
    //     }

    //     const act = await res.json();
    //     console.log(act);

    //     navigate(`/activity/${act.actkey}`);
    //   } catch (err) {
    //     console.error(err);
    //   }
    // } else {
    //   console.log('else');
      // try {
      //   const res = await updateProduct(productToEdit);

      //   if (!res.ok) {
      //     throw new Error('something went wrong!');
      //   }

      //   const prod = await res.json();
      //   console.log(prod)
      //   setProductToEdit(prod)
      // } catch (err) {
      //   console.error(err);
      // }
    // }

  }
  

  return (
    <>
      <button onClick={handleFormSubmit} className="btn-modal">
        Random!
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Activity: {activity}</h2>
            <p>
              Type: {type}
            </p>
            <p>
              Participants {participants}
            </p>

            <form className="post__form"><TextField onChange={handleInputChange} value={activityToEdit.comment} label="add comment" size="small" variant="outlined" className="post__input" placeholder="add comment"/>
              <button variant="contained" className="buttonStars" size="small" endIcon={<SendIcon />} onClick={saveActivity}>Add Comment</button>
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
                <button className="close-modal" onClick={toggleModal}>
                  CLOSE
                </button>
              </div>
            </div>
      )}
    
    </>
  );
}