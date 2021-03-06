import React, { useState, useEffect } from "react";
import "./modal-category.css";
import { FaStar } from "react-icons/fa";
import { TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { createActivity, getActivityById, addComment }  from '../../utils/api';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthContext } from "../../context/AuthContext";

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
  const authMgr = useAuthContext()

  const defActivity = { activity: "", type: "", participants: 0, actkey: "" }

  const [modal, setModal] = useState(false);
  const [comment, setComment] = useState('');
  const [ activityId, setActivityId ] = useState('');
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [activityToEdit, setActivityToEdit] = useState(defActivity);
  const [ activityAdded, setActivityAdded ] = useState(false)

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
    const newActivity = {...data, actkey: data.key}
    setActivityToEdit(newActivity)
    let actId = await createActivity(newActivity);
    setActivityId(actId);
    return
  }

  const addActivity = async() => {
        
    const resp = await fetch(
      `/api/user/addactivity/${authMgr.authState.data._id}`,
      { 
        method: "PUT",
        body: JSON.stringify({
          // userId: authMgr.authState.data._id,
          actId: activityId
        }),
        headers: {
          "Content-Type": "application/json",
        }
      }
    )
    const result= await resp.json();
    console.log(result);
    // return result
  }
 
  const whenClick = (e) => {
    e.preventDefault();
    setActivityAdded(true);
    addActivity();
  }
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


  const handleInputChange = (e) => {
    setComment(e.target.value)
  };

  const addComment = async () => {
    const userId = authMgr.authState.data._id 
    const comm = { comment: comment };
    addComment(comm, activityToEdit.actkey, userId);
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
            <h2>Activity: {activityToEdit.activity}:</h2>
            <p>
              Type: {activityToEdit.type}
            </p>
            <p>
              Participants {activityToEdit.participants}
            </p>
            {/* {console.log(authMgr.authState)} */}
            { authMgr.authState !== null && (
              <form className="post__form">
                { activityAdded === false && (
                  <button className="btn" onClick={whenClick}>Add Activity</button>
                )}
                
                { activityAdded === true && (
                  <>
                    <TextField 
                      onChange={handleInputChange} 
                      name="text" value={comment} 
                      label="add comment" 
                      size="small" 
                      variant="outlined" 
                      className="post__input" 
                      placeholder="add comment"
                    />
                    <button className="btn" onClick={addComment}>Add Comment</button>
                  </>
                )}
              </form>
            )}

            {/* <button variant="contained" className="buttonStars" size="small" endIcon={<SendIcon />} onClick={saveComment}>Add Comment</button> */}
  


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