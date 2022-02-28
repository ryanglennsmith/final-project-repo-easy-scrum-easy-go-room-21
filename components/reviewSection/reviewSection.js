import AddNewReview from '@components/AddNewReview/AddNewReview';
import Review from '@components/Review/Review';
import { Button, Container } from '@mui/material';
import React, { useState } from 'react';

// This component holds all of the review section
// Data is review section of API
export default function ReviewSection({ data }) {
  // Used useState to re-render review section on addition of new review
  const [reviewData, setReviewData] = useState(data);
  // Used useState to set boolean to trigger AddNewReviewSection
  const [showAddReview, setShowAddReview] = useState(false);

  return (
    <Container>
      <Review reviews={reviewData} />

      {!showAddReview && (
        <Button
          onClick={() => {
            setShowAddReview(true);
          }}
        >
          Add review
        </Button>
      )}

      {showAddReview && (
        <AddNewReview
          reviewData={reviewData}
          setReviewData={setReviewData}
          setShowAddReview={setShowAddReview}
        />
      )}
    </Container>
  );
}
