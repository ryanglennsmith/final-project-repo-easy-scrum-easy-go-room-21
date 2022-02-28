import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import HoverRating from '@components/ReviewRating/review';
import SuccessAlert from '@components/SuccessAlert/SuccessAlert';
import { Box } from '@mui/system';
export default function AddNewReview({
  reviewData,
  setReviewData,
  setShowAddReview,
}) {
  const [name, setName] = useState('');
  // const [date, setDate] = useState("")
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [email, setEmail] = useState('');

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
    
    let dateToday =`${day}-${month}-${year}`
    let today = new Date();
    let day = `${today.getDate() < 10 ? "0" : "" } ${today.getDate()}`;
    let month =`${(today.getMonth() + 1) < 10 ? "0" : ""} ${today.getMonth() + 1}`;
    let year = today.getFullYear();

    const newReview = {
      reviewerName: name,
      // datePosted: new Date(),
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
    <Container>
      <Typography>Leave your review </Typography>
      <Typography>Rate your experience:</Typography>
      
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
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
            placeholder="Your name"
            required
            onChange={(e) => {
              handleChangeName(e);
            }}
            id="reviewer-name"
            label="Your name"
            multiline
            maxRows={4}
            // value={value}
            type={'text'}
            inputProps={{ maxLength: 30 }}
            variant="filled"
          />
          <TextField
            required
            onChange={(e) => {
              handleChangeEmail(e);
            }}
            id="reviewer-email"
            label="Your email"
            multiline
            variant="filled"
            type={'text'}
            inputProps={{ maxLength: 30 }}
          />
        </div>
      </Box>

      <HoverRating setRating={setRating} />
      <Button
        onClick={(e) => {
          setShowAddReview(false);
          handleSubmit(e);
          <SuccessAlert text={'Review successfully submitted'} />;
        }}
      >
        Submit
      </Button>
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
