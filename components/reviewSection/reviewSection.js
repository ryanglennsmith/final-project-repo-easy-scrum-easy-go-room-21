import AddNewReview from '@components/AddNewReview/AddNewReview';
import Review from '@components/Review/Review';
import { Button, Container } from '@mui/material';
import { centerContentCol, courseCardButton } from 'globalCss';
import React, { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0';

// This component holds all of the review section
// Data is review section of API
export default function ReviewSection({ data }) {
  // Used useState to re-render review section on addition of new review
  const [reviewData, setReviewData] = useState(data);
  // Used useState to set boolean to trigger AddNewReviewSection
  const [showAddReview, setShowAddReview] = useState(false);
  const { user, error, isLoading } = useUser();

  return (
    <Container sx={centerContentCol}>
      <Review reviews={reviewData} />

      {!showAddReview && user && (
        <Button  sx={courseCardButton}

          onClick={() => {
            setShowAddReview(true);
          }}
        >
          Add review
        </Button>
      )}
      {!showAddReview && !user && (
        <Button sx={courseCardButton}
          onClick={() => {
            setShowAddReview(true);
          }}
          disabled="true"
        >
          Log in to add review
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
