import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import HoverRating from '@components/ReviewRating/review';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';

import { useUser } from '@auth0/nextjs-auth0';

import {
  centerContentCol,
  courseCardButton,
  courseCardContentCourseBrief,
  generalTypo,
} from 'globalCss';
import SuccessAlert from '@components/SuccessAlert/SuccessAlert';
export default function AddNewReview({
  reviewData,
  setReviewData,
  setShowAddReview,
}) {
  // const [name, setName] = useState('');
  // const [date, setDate] = useState("")
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  // const [email, setEmail] = useState('');
  const { user, error, isLoading } = useUser();
  console.log('user is: ', user);
  // setName(user.name);
  // setEmail(user.email);

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

  function submitData() {
    setReviewData([...reviewData, makeNewReview()]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    submitData();
  }

  function makeNewReview() {
    let today = new Date();
    let day = `${today.getDate() < 10 ? '0' : ''} ${today.getDate()}`;
    let month = `${today.getMonth() + 1 < 10 ? '0' : ''}${
      today.getMonth() + 1
    }`;
    let year = today.getFullYear();
    let dateToday = `${day}-${month}-${year}`;

    const newReview = {
      reviewerName: name,
      datePosted: dateToday,
      ratingGiven: rating,
      reviewText: review,
    };
    return newReview;
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
    console.log(e.target.value);
  }
  function handleChangeReview(e) {
    setReview(e.target.value);
    console.log(e.target.value);
  }
  function handleChangeName(e) {
    setName(e.target.value);
    console.log(e.target.value);
  }

  return (
    <Container sx={centerContentCol}>
      <Typography sx={generalTypo}>Leave your review: </Typography>

      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '60ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            onChange={(e) => {
              handleChangeReview(e);
            }}
            id="review"
            label="Write a review"
            multiline
            rows={4}
            variant="filled"
            type={'text'}
            inputProps={{ maxLength: 200 }}
          />
          <TextField
            placeholder={user.name}
            disabled={true}
            // required
            onChange={(e) => {
              handleChangeName(e);
            }}
            id="reviewer-name"
            label={user.name}
            multiline
            maxRows={4}
            // value={value}
            type={'text'}
            inputProps={{ maxLength: 30 }}
            variant="filled"
          />
          <TextField
            // required
            onChange={(e) => {
              handleChangeEmail(e);
            }}
            id="reviewer-email"
            disabled={true}
            label={user.email}
            multiline
            variant="filled"
            type={'text'}
            inputProps={{ maxLength: 30 }}
          />
        </div>
      </Box>
      <Typography sx={generalTypo}>Rate your experience:</Typography>

      <HoverRating setRating={setRating} />
      <Button
        sx={courseCardButton}
        onClick={(e) => {
          setShowAddReview(false);
          handleSubmit(e);
       
        }}
      >
        Submit
      </Button>
      <SuccessAlert/>
    </Container>
  );
}

/*
    Import and add InputFields for form from MUI
    Import and add  submit button from MUI 

    - Typography ("Leave your review") done
    - Typography ("Rate your experience:") done
    - Rating (changeAble)done
    - TextField (Large and draggable,placeholderText: "Write a review" )
    - TextField (Small, placeholderText:"Your name")
    - TextField (Small, placeholderText: "Your email")
    - Button (Onclick, createNewReview)
        - createNewReview (
            make an object using the following structure {
            reviewerName: string,
            datePosted: string,
            ratingGiven: number,
            reviewText: string,
          }
          and then spread the review data and add the new review to it. 
        )

*/
