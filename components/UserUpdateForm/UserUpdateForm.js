import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import {
  centerContentRow,
  courseCardButton,
  profileTextfields,
  centerBoxContent,
  centerContentCol,
  subHeadingTypoProfile,
} from 'globalCss';
import { Box } from '@mui/system';

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
          url =
            `${process.env.LOCALHOST}/api/users` ||
            'https://servicestack.netlify.app/api/users';
          req = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(update),
          };
        } else if (!createNew) {
          url =
            `${process.env.LOCALHOST}/api/users/${userId}` ||
            `https://servicestack.netlify.app/api/courses/${userId}`;
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
    <Box sx={centerContentCol}>
      {createNew && (
        <Typography sx={subHeadingTypoProfile}>Enter your user info</Typography>
      )}
      <Box>
        <TextField
          id="user-email"
          defaultValue={email}
          disabled={true}
          label="email"
          sx={profileTextfields}
          inputProps={{ maxLength: 40 }}
        />

        <TextField
          onChange={(e) => setUpdate({ ...update, first_name: e.target.value })}
          id="user-first-name"
          label="first name"
          defaultValue={firstName}
          sx={profileTextfields}
          inputProps={{ maxLength: 40 }}
        />
        <TextField
          onChange={(e) => setUpdate({ ...update, last_name: e.target.value })}
          id="user-last-name"
          label="last name"
          defaultValue={lastName}
          sx={profileTextfields}
          inputProps={{ maxLength: 40 }}
        />
        <TextField
          onChange={(e) => setUpdate({ ...update, phone: e.target.value })}
          id="user-telephone"
          label="phone number"
          defaultValue={phone}
          sx={profileTextfields}
          inputProps={{ maxLength: 40 }}
        />
      </Box>
      <Box>
        <Button
          sx={{ ...courseCardButton, marginRight: '15px' }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default UserUpdateForm;
