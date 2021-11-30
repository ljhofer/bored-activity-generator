import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';

import { getMe } from '../../utils/api';
import Auth from '../../utils/auth';

const Profile = () => {
  const [userData, setUserData] = useState({});

  // use this to determine if `useEffect()` hook needs to run again
  const userDataLength = Object.keys(userData).length;

  /* When this component loads, it will look for a token in localStorage. If 
  it finds one, it will attempt to get the user data from that token. */
  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
          return false;
        }

        const response = await getMe(token);

        if (!response.ok) {
          throw new Error('something went wrong!');
        }

        const user = await response.json();
        setUserData(user);
      } catch (err) {
        console.error(err);
      }
    };

    getUserData();
  }, [userDataLength]);

  // if data isn't here yet, say so
  if (!userDataLength) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Your Profile</h1>
        </Container>
      </Jumbotron>

      <Container>
        <Card border='dark'>
          <Card.Body>
            <Card.Title>{userData.username}</Card.Title>
            <Card.Text>Email: {userData.email}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Profile;