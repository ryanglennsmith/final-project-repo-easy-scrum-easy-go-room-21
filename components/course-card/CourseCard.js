import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Rating from '@mui/material/Rating';
import useMediaQuery from '@mui/material/useMediaQuery';

// Importing CSS
import {
  courseCardContainer,
  courseCardCardSection,
  courseCardCardMedia,
  courseCardCardContent,
  courseCardButton,
  courseCardContentTitle,
  courseCardContentTeacherName,
  courseCardContentCourseBrief,
  courseCardRateAvg,
  courseCardReviewCount,
  courseCardActions,
} from '../../globalCss.js';
import { Link } from '@mui/material';

//plan -  fetch data from ryan's mock api

//pass mock data as prop
export default function CourseCard({ cards }) {
  const matches = useMediaQuery('(min-width:700px)');
  return (
    <Container sx={courseCardContainer} maxWidth="lg">
      {/* End hero unit */}
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid
            item
            key={card.course_id}
            xs={12}
            sm={6}
            md={6}
            lg={4}
            style={{ paddingTop: '50px' }}
          >
            <Link
              href={`/courses/${card.course_id}`}
              style={{ textDecoration: 'none' }}
            >
              <Card sx={courseCardCardSection}>
                {/* courseCardCardMedia from globalCss isn't working for img  */}
                <CardMedia
                  component="img"
                  sx={
                    (courseCardCardMedia,
                    { padding: '20px', borderRadius: '20px', height: '255px' })
                  }
                  image={card.images.thumb}
                  alt={card.teacher_name}
                />
                <CardContent sx={courseCardCardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    sx={courseCardContentTitle}
                  >
                    {card.course_title}
                  </Typography>

                  <Typography sx={courseCardContentTeacherName}>
                    Instructor: {card.teacher_name}
                  </Typography>
                  <Typography sx={courseCardContentCourseBrief}>
                    {card.course_brief}
                  </Typography>
                </CardContent>
                <CardActions sx={courseCardActions}>
                  {/* star-rating add sx */}
                  {/* need to resize for smaller view portr */}
                  <Rating
                    name="read-only"
                    defaultValue={Number(card.rating).toFixed(1)}
                    precision={0.1}
                    readOnly
                  />
                  {/* teacher rating as a number add sx margin right */}
                  <Typography sx={courseCardRateAvg}>{`${Number(
                    card.rating
                  ).toFixed(1)}`}</Typography>
                  {/* number of the comments  */}
                  <Typography sx={courseCardReviewCount}>{`(152)`}</Typography>
                  {matches && (
                    <Button variant="outlined" sx={courseCardButton}>
                      Contact Me
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
