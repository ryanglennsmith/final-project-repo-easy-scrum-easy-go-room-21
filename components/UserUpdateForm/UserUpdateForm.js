import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import {
  courseCardButton,
  profileTextfields,
  submitBtnBox,
  centerContentCol,
  subHeadingTypoProfile,
  addCourseComponentBoxWrap2,
  profileUpdateTextfields,
  dashboardSubminBtn,
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
            `${process.env.NEXT_PUBLIC_LOCALHOST}/api/users` ||
            'https://servicestack.netlify.app/api/users';
          req = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(update),
          };
        } else if (!createNew) {
          url =
            `${process.env.NEXT_PUBLIC_LOCALHOST}/api/users/${userId}` ||
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
    <div className="userUpdateFormWrap">
      <Box sx={centerContentCol}>
        {createNew && (
          <Typography sx={subHeadingTypoProfile}>
            Enter your user info
          </Typography>
        )}

        <Box
          className="addCourseComponentBoxWrap2"
          sx={addCourseComponentBoxWrap2}
        >
          <TextField
            variant="standard"
            multiline={true}
            id="user-email"
            defaultValue={email}
            disabled={true}
            label="email"
            sx={{ ...profileTextfields, ...profileUpdateTextfields }}
            inputProps={{ maxLength: 40 }}
          />

          <TextField
            variant="standard"
            multiline={true}
            onChange={(e) =>
              setUpdate({ ...update, first_name: e.target.value })
            }
            id="user-first-name"
            label="first name"
            defaultValue={firstName}
            sx={{ ...profileTextfields, ...profileUpdateTextfields }}
            inputProps={{ maxLength: 40 }}
          />
          <TextField
            variant="standard"
            multiline={true}
            onChange={(e) =>
              setUpdate({ ...update, last_name: e.target.value })
            }
            id="user-last-name"
            label="last name"
            defaultValue={lastName}
            sx={{ ...profileTextfields, ...profileUpdateTextfields }}
            inputProps={{ maxLength: 40 }}
          />
          <TextField
            variant="standard"
            multiline={true}
            onChange={(e) => setUpdate({ ...update, phone: e.target.value })}
            id="user-telephone"
            label="phone number"
            defaultValue={phone}
            sx={{ ...profileTextfields, ...profileUpdateTextfields }}
            inputProps={{ maxLength: 40 }}
          />
        </Box>
      </Box>
      <Box className="submitBtnBox" sx={{ ...submitBtnBox }}>
        <Button
          sx={{ ...courseCardButton, ...dashboardSubminBtn }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default UserUpdateForm;
