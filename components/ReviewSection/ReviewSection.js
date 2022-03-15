import AddNewReview from '@components/AddNewReview/AddNewReview';
import Review from '@components/Review/Review';
import { Button, Container, Alert, Typography } from '@mui/material';
import {
  addReviewBtn,
  addReviewButton,
  centerContentCol,
  centerContentRow,
  courseCardButton,
  showMoreLessButton,
} from 'globalCss';
import React, { useState, useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import { Box } from '@mui/system';
import SuccessAlert from '@components/SuccessAlert/SuccessAlert';

// This component holds all of the review section
// Data is review section of API
export default function ReviewSection({
  data,
  setNumOfReviews,
  userData,
  courseId,
}) {
  // Used useState to re-render review section on addition of new review
  const [reviewData, setReviewData] = useState(data);
  // Used useState to set boolean to trigger AddNewReviewSection
  const [showAddReview, setShowAddReview] = useState(false);
  const [sendReview, setSendReview] = useState(false);
  const { user, error, isLoading } = useUser();
  const [visible, setVisible] = useState(2);
  const [open, setOpen] = React.useState(false);
  const [newReview, setNewReview] = useState();
  function showMoreItems() {
    setVisible(reviewData.length);
    // setShowAddReview(true);
  }
  useEffect(() => {
    if (sendReview) {
      // send to API
      const body = {
        date: newReview.date,
        review_rating: newReview.rating,
        rating: newReview.rating,
        review_text: newReview.review_text,
        reviewer_id: newReview.reviewer_id,
        reviewer: `${userData[0].first_name} ${userData[0].last_name}`,
        course_id: courseId,
      };
      const fetchFunction = async () => {
        const url =
          `${process.env.NEXT_PUBLIC_LOCALHOST}/api/reviews` ||
          `https://servicestack.netlify.app/api/reviews`;
        const res = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(body), // let's make the body disappear
          headers: { 'Content-Type': 'application/json' },
        });
      };
      fetchFunction();
      setReviewData([...reviewData, body]);
    }
    setSendReview(false);
  }, [sendReview]);
  function collapseItems() {
    setVisible(2);
    setShowAddReview(false);
  }

  return (
    <Container sx={centerContentCol}>
      <div className="wrapAddreviewBtn">
        {!showAddReview && (
          <Button
            sx={{ ...courseCardButton, ...addReviewButton }}
            onClick={() => {
              if (!user) {
                alert('Please Log in to add review');
              } else {
                setShowAddReview(true);
              }
            }}
            data-cy="course-review-add-review-button"
          >
            Add review
          </Button>
        )}
      </div>

      <Review visible={visible} reviews={reviewData} />
      <Box sx={centerContentRow}>
        {!showAddReview && visible === 2 && reviewData.length > 2 && (
          <Button
            sx={showMoreLessButton}
            onClick={() => showMoreItems()}
            data-cy="course-review-show-more-button"
          >
            Show more
          </Button>
        )}
        {(showAddReview || visible > 2) && reviewData.length > 2 && (
          <Button sx={showMoreLessButton} onClick={() => collapseItems()}>
            Show less
          </Button>
        )}
      </Box>
      {showAddReview && user && (
        <AddNewReview
          userData={userData}
          reviewData={reviewData}
          setReviewData={setReviewData}
          setShowAddReview={setShowAddReview}
          setSendReview={setSendReview}
          setOpen={setOpen}
          setNumOfReviews={setNumOfReviews}
          sendReview={sendReview}
          setNewReview={setNewReview}
        />
      )}
      <SuccessAlert open={open} setOpen={setOpen} />
    </Container>
  );
}
