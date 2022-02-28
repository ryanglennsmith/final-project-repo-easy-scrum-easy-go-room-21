import { Button, Container, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';

export default function AddNewReview({ reviewData, setReviewData }) {
  const [name, setName] = useState('');
  // const [date, setDate] = useState("")
  // const [rating, setRating] = useState(0)
  // const [text, setText] = useState("")

  // function makeNewReview(){
  //     const newReview =         {
  //         reviewerName: name,
  //         datePosted: date,
  //         ratingGiven: rating,
  //         reviewText: text,
  //       },

  // }
  function handleChange(e) {
    setName(e.target.value);
    console.log(name);
  }

  return (
    <Container>
      <TextField
        onChange={(e) => {
          handleChange(e);
        }}
      ></TextField>
      <Button></Button>
    </Container>
  );
}

/*
    Import and add InputFields for form from MUI
    Import and add  submit button from MUI 

    - Typography ("Leave your review")
    - Typography ("Rate your experience:")
    - Rating (changeAble)
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
