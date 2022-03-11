import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Rating from '@mui/material/Rating';
import useMediaQuery from '@mui/material/useMediaQuery';

// Importing CSS
import {
  courseCardContainer,
  courseCardCardSection,
  courseCardCardContent,
  fontLato,
  fontRoboto,
} from '../../globalCss.js';

export default function Review({ reviews, visible }) {
  return (
    <Container sx={courseCardContainer} style={{ padding: '10px 0px' }}>
      {/* End hero unit */}
      <Grid container spacing={4}>
        {reviews.slice(0, visible).map((review, index) => (
          <Grid className="testGrid" item key={index} xs={12} sm={6} md={6}>
            <Card sx={courseCardCardSection}>
              <CardContent
                className="testCardContent"
                sx={{ ...courseCardCardContent, width: '90%' }}
              >
                <Typography
                  className="testReviewer"
                  gutterBottom
                  variant="h5"
                  component="h2"
                  sx={{ ...fontLato, color: '#333' }}
                >
                  {review.reviewer}
                </Typography>
                <Typography
                  className="testReviewDate"
                  sx={{ ...fontLato, color: '#999' }}
                >
                  {review.date}
                </Typography>
                <Typography
                  className="testReviewText"
                  sx={{
                    ...fontRoboto,
                    paddingTop: '10px',
                    color: '#555',
                    fontSize: '16px',
                    fontWeight: '300',
                  }}
                >
                  {review.review_text}
                </Typography>
              </CardContent>
              <CardActions
                className="testRatingCardActions"
                sx={{ paddingBottom: '20px' }}
              >
                {/* star-rating add sx */}
                {/* need to resize for smaller view portr */}
                <Rating
                  className="testRating"
                  name="read-only"
                  defaultValue={Number(review.rating)}
                  precision={0.5}
                  readOnly
                />
                {/* teacher rating as a number add sx margin right */}
                <Typography>{`(${review.rating})`}</Typography>
                {/* number of the comments  */}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
