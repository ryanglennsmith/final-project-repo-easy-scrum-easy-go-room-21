import Image from 'next/image';
import {
  Box,
  Button,
  Rating,
  TextField,
  Typography,
  useMediaQuery,
  Container,
} from '@mui/material';
import Footer from '@components/Footer/Footer';
import NavBar from '@components/navBar/navBar';
// Importing CSS
import {
  aboutSection,
  centerContentRow,
  footerContainerBoxLgr,
  footerContainerBoxMd,
  generalTypo,
  nameTypo,
  navbarButton,
  navbarSidePageBox,
  profileSearchBar,
  profileSearchBarInput,
  titleTypo,
} from 'globalCss';

import { API } from '../../db/reviewData.js';
import Review from '@components/Review/Review.js';
import reviewSection from '@components/reviewSection/reviewSection.js';
import ReviewSection from '@components/reviewSection/reviewSection.js';

export default function CoursePage({ data }) {
  const course = data;
  const days = course.dates_available.map((date) => {
    return Object.keys(date);
  });
  const available = course.dates_available.map((date) => {
    return Object.values(date).toString();
  });
  const matchesMd = useMediaQuery('(max-width:913px)');
  const matchesLrg = useMediaQuery('(min-width:913px)');

  return (
    <Box style={{ height: '100vh', fontFamily: 'Noto Sans Display' }}>
      {/* Navbar section */}
      <Box sx={navbarSidePageBox}>
        <NavBar logoLink={'https://i1.lensdump.com/i/rLRHNK.png'} />
      </Box>
      {/* Navbar section end*/}
      {/* Search section */}
      <div className="wrapProfileSearchBar">
        <Box sx={profileSearchBar}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            style={{ padding: 0 }}
            sx={profileSearchBarInput}
          />
          <Button variant="contained" sx={navbarButton}>
            Search
          </Button>
        </Box>
      </div>
      {/* Search section end */}
      {/* Profile page image/info section */}
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          width: '1200px',
          margin: 'auto',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            minWidth: '260px',
            height: '400px',
            alignItems: 'flex-start',
          }}
        >
          <Image
            src={course.images.full}
            width="400px"
            height="400px"
            alt="painting"
            layout="fixed"
            objectFit="contain"
          />{' '}
        </Box>
        <Box
          sx={{
            ...titleTypo,
            marginLeft: '4rem',
          }}
        >
          <Typography sx={titleTypo}>{course.course_title} </Typography>

          <Typography sx={nameTypo}> {course.teacher_name}</Typography>
          <Typography sx={generalTypo}> {course.course_brief}</Typography>

          <Box sx={centerContentRow}>
            <Rating
              name="read-only"
              defaultValue={Number(course.rating)}
              precision={0.5}
              readOnly
            />
            <Typography>{` (${course.rating})`}</Typography>
            {/* number of the comments  */}
            <Typography>{`  ${course.numOfReviews}`}</Typography>
          </Box>

          <Box sx={centerContentRow}>
            {available.map((value, index) => {
              if (value == 'true') {
                return (
                  <Typography
                    variant="string"
                    sx={{
                      ...generalTypo,
                      fontWeight: 'bold',
                      fontSize: '15px',
                    }}
                  >
                    {` ${days[index]} `}{' '}
                  </Typography>
                );
              } else {
                return (
                  <Typography
                    variant="string"
                    sx={{ ...generalTypo, color: 'gray', fontSize: '15px' }}
                  >
                    {` ${days[index]} `}{' '}
                  </Typography>
                );
              }
            })}
          </Box>

          <Box sx={centerContentRow}>
            {course.is_offline === 'true' ? (
              <Typography sx={{ ...generalTypo, fontWeight: 'bold' }}>
                Offline
              </Typography>
            ) : (
              <Typography sx={{ ...generalTypo, color: 'gray' }}>
                Offline
              </Typography>
            )}{' '}
            |{' '}
            {course.is_online === 'true' ? (
              <Typography sx={{ ...generalTypo, fontWeight: 'bold' }}>
                Online
              </Typography>
            ) : (
              <Typography sx={{ ...generalTypo, color: 'gray' }}>
                Online
              </Typography>
            )}
          </Box>
          <Button sx={navbarButton}>{course.email}</Button>
        </Box>{' '}
      </Box>
      {/* Profile page image/info section end*/}
      {/* About section */}
      <Box sx={aboutSection}>
        <Typography variant="h3">About this class</Typography>
        <Typography>{course.long_description}</Typography>
      </Box>
      {/* About section end */}
      {/* Review section */}
      <ReviewSection data={data.reviews} />
      {/*Review section */}
      {/*
---

- Profile (title, subtext, rating, name, date, aboutClass, content)
- Image (image)
- LessonCard(title, subText, rating, name, date)
- Action Button (text, function) (Child component)
- Description (aboutClass, content) (Child component)
*/}{' '}
      {/* When the screen width reaches atleast 913px, then this css takes place. */}
      {matchesLrg && <Footer styling={footerContainerBoxLgr} />}
      {/* When the screen width reaches at most 913px, then this css takes place. */}
      {matchesMd && <Footer styling={footerContainerBoxMd} />}
    </Box>
  );
}

// export async function getServerSideProps(ctx) {
//   const number = ctx.params;
//   console.log('id:', number);
//   return { props: { id: number } };
// }

export async function getStaticPaths() {
  // call a fetch to all the courses
  // map all courses by id
  // const res = await fetch('http://localhost:3000/api/courses');
  // const data = await res.json();
  const data = API;
  // data.courses
  const paths = data.courses.map((course) => {
    const id = String(course.course_id);
    return {
      params: {
        id: id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  // const res = await fetch(`http://localhost:3000/api/courses/${params.id}`);
  // const data = await res.json();

  const id = params.id - 1;
  const data = API.courses[id];
  return { props: { data } };
}

// data to add to dummy json file
// course_title:
// rating:
// dates_available: {Sunday: false, Monday: true, Tuesday: false, Wednesday: true, Thursday: true, Friday: false, Saturday: true}

// const fakeData = {
//   course_id: 1,
//   teacher_name: 'Simona Mountcastle',
//   email: 'smountcastle0@ebay.co.uk',
//   location: 'Skrwilno',
//   bio_text:
//     'Small batch crucifix helvetica kickstarter messenger bag before they sold out everyday carry viral ethical af next level chillwave hammock succulents pug.  Mixtape YOLO single-origin coffee sartorial, kitsch pitchfork ugh pabst letterpress.  Sartorial wayfarers lumbersexual retro before they sold out plaid etsy chillwave chicharrones portland gastropub VHS artisan tumblr.  Typewriter shaman locavore ramps, tumeric ugh pabst.  Umami kickstarter coloring book kitsch chartreuse, ramps plaid copper mug.  Offal everyday carry intelligentsia glossier, woke deep v microdosing selvage freegan hexagon scenester.  Mlkshk listicle portland raw denim, meditation lyft hoodie mustache hashtag.',
//   long_description:
//     "Heirloom gastropub whatever cardigan neutra listicle wayfarers.  Cardigan you probably haven't heard of them four dollar toast, lumbersexual iceland affogato hexagon pabst poutine live-edge vexillologist af prism.  Man bun live-edge subway tile literally lumbersexual pug.  Hella freegan iceland small batch poke slow-carb.  Try-hard vice ennui pork belly, 90's subway tile echo park heirloom bushwick blog readymade lo-fi kogi flannel street art.  Squid farm-to-table butcher ugh heirloom direct trade.",
//   is_online: 'true',
//   is_offline: 'false',
//   image: 'https://images.unsplash.com/photo-1461344577544-4e5dc9487184',
//   course_brief:
//     'Master cleanse taiyaki ethical bushwick slow-carb migas XOXO direct trade',
//   course_title: 'Painting for idiots',
//   rating: 3.2,
//   dates_available: [
//     {
//       Sunday: false,
//     },
//     { Monday: true },
//     { Tuesday: false },
//     { Wednesday: true },
//     { Thursday: true },
//     { Friday: false },
//     { Saturday: true },
//   ],
// };
