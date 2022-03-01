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
} from '../../globalCss.js';

export default function Review({ reviews, visible }) {
  return (
    <Container sx={courseCardContainer} style={{ padding: '10px 0px' }}>
      {/* End hero unit */}
      <Grid container spacing={4}>
        {reviews.slice(0, visible).map((review, index) => (
          <Grid item key={index} xs={12} sm={6} md={6}>
            <Card sx={courseCardCardSection}>
              <CardContent sx={courseCardCardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {review.reviewer}
                </Typography>
                <Typography>{review.date}</Typography>
                <Typography>{review.review_text}</Typography>
              </CardContent>
              <CardActions>
                {/* star-rating add sx */}
                {/* need to resize for smaller view portr */}
                <Rating
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
