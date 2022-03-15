import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import HoverRating from '@components/ReviewRating/ReviewRating';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import { useUser } from '@auth0/nextjs-auth0';

import {
  addReviewButton,
  centerContentCol,
  contactBtn,
  courseCardButton,
  courseCardContentCourseBrief,
  generalTypo,
} from 'globalCss';
import SuccessAlert from '@components/SuccessAlert/SuccessAlert';
export default function AddNewReview({
  reviewData,
  setReviewData,
  setShowAddReview,
  setOpen,
  setNumOfReviews,
  userData,
  setSendReview,
  sendReview,
  setNewReview,
  setNewRating,
}) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const { user, error, isLoading } = useUser();

  //  <--This function is for when we switch to databases-->

  //   async function sendPostData(postData) {
  //     console.log("POST DATA HERE", postData);
  //     const res = await fetch("URL", {
  //        method: "POST",
  //        body: JSON.stringify(postData),
  //        headers: {
  //           "Content-type": "application/json; charset=UTF-8",
  //        },
  //     });
  //     const data = await res.json();
  //     console.log(data);
  //  }

  const handleClick = () => {
    setOpen(true);
  };
  function submitData() {
    // setReviewData([...reviewData, makeNewReview()]);
    // setNumOfReviews((prevValue) => prevValue + 1);
    makeNewReview();
  }

  function handleSubmit(e) {
    e.preventDefault();
    submitData();
  }

  function makeNewReview() {
    let today = new Date();
    let day = `${today.getDate() < 10 ? '0' : ''}${today.getDate()}`;
    let month = `${today.getMonth() + 1 < 10 ? '0' : ''}${
      today.getMonth() + 1
    }`;
    let year = today.getFullYear();
    let dateToday = `${day}-${month}-${year}`;

    const newReview = {
      // reviewer: `${userData[0].first_name} ${userData[0].last_name}`,
      reviewer_id: userData[0].id,
      date: dateToday,
      rating: rating,
      review_text: review,
    };
    setNewReview(newReview);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }
  function handleChangeReview(e) {
    setReview(e.target.value);
  }
  function handleChangeName(e) {
    setName(e.target.value);
  }

  return (
    <Container sx={centerContentCol}>
      <Typography
        sx={{
          fontFamily: 'lato',
          fontWeight: '600',
          fontSize: '30px',
          width: '100%',
          padding: '40px 0 10px',
          marginTop: '20px',
          color: '#333',
          borderTop: '1px solid #eee',
        }}
      >
        Leave your review
      </Typography>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '60ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="addNewReviewWrap">
          <TextField
            sx={{ width: '1200px!important' }}
            required
            onChange={(e) => {
              handleChangeReview(e);
            }}
            id="review"
            label="Write a review"
            multiline={true}
            maxRows={4}
            variant="standard"
            type={'text'}
            inputProps={{ maxLength: 200 }}
          />
          <TextField
            sx={{ width: '1200px!important' }}
            placeholder={`${userData[0].first_name} ${userData[0].last_name}`}
            disabled={true}
            // required
            onChange={(e) => {
              handleChangeName(e);
            }}
            id="reviewer-name"
            label={`${userData[0].first_name} ${userData[0].last_name}`}
            multiline
            maxRows={4}
            // value={value}
            type={'text'}
            inputProps={{ maxLength: 30 }}
            variant="standard"
          />
          <TextField
            // required
            sx={{ width: '1200px!important' }}
            onChange={(e) => {
              handleChangeEmail(e);
            }}
            id="reviewer-email"
            disabled={true}
            label={user.email}
            multiline
            variant="standard"
            type={'text'}
            inputProps={{ maxLength: 30 }}
          />
        </div>
      </Box>
      <div className="rateYourExperienceWrap">
        <Typography sx={generalTypo}>Rate your experience:</Typography>
        <HoverRating setRating={setRating} />
      </div>
      <Button
        sx={{ display: 'block', ...contactBtn, ...addReviewButton }}
        onClick={(e) => {
          handleSubmit(e);
          handleClick();
          setSendReview(true);
          setShowAddReview(false);
        }}
      >
        Submit
      </Button>
    </Container>
  );
}
