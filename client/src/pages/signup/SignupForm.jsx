import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { createUser } from '../../utils/api';
import Auth from '../../utils/auth';

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  /* When a new user is created, the server will send back a token 
  for that user, as well as the user's data. The Auth.login() method 
  will then save that token to localStorage. */

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const response = await createUser(userFormData);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { token, user } = await response.json();
      Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      <div className="formPageContainer">
        <div className="formPageCard">
          <div className="formContainer">
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
              {/* show alert if server response is bad */}
              <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                Something went wrong with your signup!
              </Alert>
                <Form.Label htmlFor='username'>Username</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Your username'
                  name='username'
                  onChange={handleInputChange}
                  value={userFormData.username}
                  required
                  className="formInput"
                />
                <Form.Label htmlFor='email'>Email</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Your email address'
                  name='email'
                  onChange={handleInputChange}
                  value={userFormData.email}
                  required
                  className="formInput"
                />
                <Form.Label htmlFor='password'>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Your password'
                  name='password'
                  onChange={handleInputChange}
                  value={userFormData.password}
                  required
                  className="formInput"
                />
              <Button className="formBtn"
                disabled={!(userFormData.username && userFormData.email && userFormData.password)}
                type='submit'
                variant='success'>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
