import React, { useState } from "react";
import "./modal-category.css";

export default function ModalRandom() {
  const [modal, setModal] = useState(false);

  const [activity, setActivity] = useState('');
  const [type, setType] = useState('');
  const [participants, setParticipants] = useState('');
  const [actId, setActId ]= useState('');
  const [accessibility, setAccessibility] = useState('');

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
    setActId(data.key);
    setAccessibility(data.accessibility);
    return
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
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    
    </>
  );
}