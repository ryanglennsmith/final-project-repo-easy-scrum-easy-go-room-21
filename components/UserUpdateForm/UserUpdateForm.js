import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';

const UserUpdateForm = ({
  email,
  firstName,
  lastName,
  phone,
  userId,
  createNew,
  setNewUserSuccess,
}) => {
  const [sendUpdate, setSendUpdate] = useState(false);
  const [update, setUpdate] = useState({
    email: email,
    first_name: firstName,
    last_name: lastName,
    phone: phone,
  });

  console.log('update: ', update, 'updateReady: ', sendUpdate);
  console.log('createNew: ', createNew);

  const handleSubmit = () => {
    // if validated? ->
    setSendUpdate(true);
  };

  useEffect(() => {
    if (sendUpdate) {
      const sendIt = async () => {
        let url;
        let req;
        console.log('update inside sendIt: ', update);
        if (createNew) {
          url = `http://localhost:3609/users`;
          req = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(update),
          };
        } else if (!createNew) {
          url = `http://localhost:3609/users/${userId}`;
          req = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(update),
          };
        }
        const res = await fetch(url, req);
        const data = await res.json();
        console.log('result of post is: ', data);
        if (data.email === email) {
          setNewUserSuccess(true);
        }
      };
      sendIt();
    }
  }, [sendUpdate]);
  return (
    <>
      {createNew && <>enter your user info</>}

      <TextField
        id="user-email"
        defaultValue={email}
        disabled={true}
        label="email"
        sx={{
          margin: '10px 0 10px 0',
          padding: '15px',
        }}
      />

      <TextField
        onChange={(e) => setUpdate({ ...update, first_name: e.target.value })}
        id="user-first-name"
        label="first name"
        defaultValue={firstName}
        sx={{
          margin: '10px 0 10px 0',
          padding: '15px',
        }}
      />
      <TextField
        onChange={(e) => setUpdate({ ...update, last_name: e.target.value })}
        id="user-last-name"
        label="last name"
        defaultValue={lastName}
        sx={{
          margin: '10px 0 10px 0',
          padding: '15px',
        }}
      />
      <TextField
        onChange={(e) => setUpdate({ ...update, phone: e.target.value })}
        id="user-telephone"
        label="phone number"
        defaultValue={phone}
        sx={{
          margin: '10px 0 10px 0',
          padding: '15px',
        }}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </>
  );
};

export default UserUpdateForm;
