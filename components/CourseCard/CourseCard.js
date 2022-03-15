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
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';

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
  navbarButton,
  tagsBtn,
  tagsBtnMainpage,
} from '../../globalCss.js';
import Link from 'next/link';
import { Link as MUILink } from '@mui/material';
//plan -  fetch data from ryan's mock api

//pass mock data as prop
export default function CourseCard({ cards, setSearch }) {
  const matches = useMediaQuery('(min-width:700px)');
  const router = useRouter();
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
            style={{ paddingTop: '60px' }}
          >
            <Link
              href={`/courses/${card.course_id}`}
              style={{
                textDecoration: 'none',
              }}
            >
              <MUILink underline="none">
                <Card sx={courseCardCardSection}>
                  {/* courseCardCardMedia from globalCss isn't working for img  */}

                  <CardMedia
                    component="img"
                    sx={
                      (courseCardCardMedia,
                      {
                        padding: '20px',
                        borderRadius: '20px',
                        height: '255px',
                      })
                    }
                    image={card.images.thumb}
                    alt={card.teacher_name}
                  />

                  {/* tags   */}
                  <CardActions sx={{ padding: 0, width: '325px' }}>
                    <div
                      className=" displayInlineBlock "
                      data-cy="course-tutor-tags"
                    >
                      {card.course_tags.map((item, index) => {
                        function onClick(e) {
                          e.preventDefault();
                          if (setSearch === '') {
                            console.log('yes');
                          } else {
                            setSearch(item);
                          }
                          router.push(`/search/${item}`);
                        }

                        return (
                          <Box className="tagsBtnContainer" key={index}>
                            <Button
                              onClick={onClick}
                              sx={{
                                ...tagsBtnMainpage,
                                fontSize: '10px',
                              }}
                            >
                              {item}
                            </Button>
                          </Box>
                        );
                      })}
                    </div>
                  </CardActions>

                  <CardContent sx={courseCardCardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className="courseCardContentTitle"
                      sx={courseCardContentTitle}
                    >
                      {card.course_title}
                    </Typography>

                    <Typography
                      className="courseCardContentTeacherName"
                      sx={courseCardContentTeacherName}
                    >
                      {card.teacher_name}
                    </Typography>
                    <Typography
                      className="courseCardContentCourseBrief"
                      sx={courseCardContentCourseBrief}
                    >
                      {card.course_brief}
                    </Typography>
                  </CardContent>
                  <CardActions sx={courseCardActions}>
                    {/* star-rating add sx */}
                    {/* need to resize for smaller view portr */}
                    <Rating
                      name="read-only"
                      // defaultValue={Number(card.rating.toFixed(1))}
                      defaultValue={
                        card.reviews.length === 0
                          ? 0
                          : Number(
                              (
                                card.reviews
                                  .map((review) => review.rating)
                                  .reduce((a, b) => a + b) / card.reviews.length
                              ).toFixed(1)
                            )
                      }
                      precision={0.1}
                      readOnly
                    />
                    {/* teacher rating as a number add sx margin right */}
                    <Typography sx={courseCardRateAvg}>{`${
                      card.reviews.length === 0
                        ? 0
                        : Number(
                            (
                              card.reviews
                                .map((review) => review.rating)
                                .reduce((a, b) => a + b) / card.reviews.length
                            ).toFixed(1)
                          )
                    }`}</Typography>
                    {/* number of the comments  */}
                    <Typography
                      className="courseCardReviewCount"
                      sx={{ ...courseCardReviewCount }}
                    >
                      ({card.reviews.length})
                    </Typography>
                    {matches && (
                      <Button variant="outlined" sx={courseCardButton}>
                        More Info
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </MUILink>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
