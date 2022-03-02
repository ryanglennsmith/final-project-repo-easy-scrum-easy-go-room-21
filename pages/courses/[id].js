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
  courseCardCardImage,
  daysTypo,
  footerContainerBoxLgr,
  footerContainerBoxMd,
  generalTypo,
  nameTypo,
  navbarButton,
  navbarSidePageBox,
  profileSearchBar,
  profileSearchBarInput,
  ratingTypo,
  titleTypo,
} from 'globalCss';

import { API } from 'utils/API';
import ReviewSection from '@components/reviewSection/reviewSection.js';
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0';
import { useEffect, useState } from 'react';
export default function CoursePage({ data, users }) {

  const router = useRouter();

  const { user, error, isLoading } = useUser();
  // const userData = users.filter((item) => item.email === user.email);
  const course = data;
  const days = course.dates_available.map((date) => {
    return Object.keys(date);
  });
  const available = course.dates_available.map((date) => {
    return Object.values(date).toString();
  });
  const matchesMd = useMediaQuery('(max-width:913px)');
  const matchesLrg = useMediaQuery('(min-width:913px)');
  const [input, setInput] = useState('');
  const [numOfReviews, setNumOfReviews] = useState(course.reviews.length);
  const [userData, setUserData] = useState([]);
  // once the user is loaded by Auth0, useEffect will match the user to our db
  useEffect(() => {
    if (user) {
      const whoAmI = users.filter((item) => item.email === user.email);
      setUserData(whoAmI);
    }
  }, [user]);

  function handleChange(e) {
    // grabbing the text input on search bar
    e.preventDefault();
    setInput(e.target.value);
    // console.log(input);
  }
  function onClick(e) {
    // pushing the text input value to the url
    e.preventDefault();
    router.push(`/search/${input}`);
  }

  function onEnter(e) {
    if (e.key === 'Enter') {
      router.push(`/search/${input}`);
    }
  }

  return (
    <Box style={{ height: '100vh', fontFamily: 'Noto Sans Display' }}>
      {/* Navbar section */}
      <Box sx={navbarSidePageBox}>
        <NavBar logoLink={'https://i1.lensdump.com/i/rLRHNK.png'} />
      </Box>
      {/* Navbar section end*/}
      {/* Search section */}
      <div className="wrapProfileSearchBar">
        <Box sx={{ ...profileSearchBar, height: '40px' }}>
          <TextField
            onKeyDown={onEnter}
            id="outlined-basic"
            variant="outlined"
            onChange={handleChange}
            sx={{ ...profileSearchBarInput, height: '40px' }}
          />
          <Button
            onClick={onClick}
            variant="contained"
            sx={{ ...navbarButton, height: '40px' }}
          >
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
            background: '#efefef',
          }}
        >
          <Image
            src={course.images.full}
            width="550px"
            height="400px"
            alt="painting"
            layout="fixed"
            objectFit="contain"
            priority={true}
          />{' '}
        </Box>
        <Box
          sx={{
            ...titleTypo,
            marginLeft: '30px',
          }}
        >
          <Typography sx={titleTypo}>{course.course_title} </Typography>
          <Typography sx={nameTypo}> {course.teacher_name}</Typography>
          <Typography sx={generalTypo}> {course.course_brief}</Typography>
          <Box sx={centerContentRow}>
            <Rating
              name="read-only"
              defaultValue={
                course.reviews.length === 0
                  ? 0
                  : Number(
                      (
                        course.reviews
                          .map((review) => review.rating)
                          .reduce((a, b) => a + b) / course.reviews.length
                      ).toFixed(1)
                    )
              }
              precision={0.5}
              readOnly
            />

            <Typography sx={{ ...ratingTypo, color: '#df9c00', fontWeight: 500 }}>
              {course.reviews.length === 0
                ? 0
                : Number(
                    (
                      course.reviews
                        .map((review) => review.rating)
                        .reduce((a, b) => a + b) / course.reviews.length
                    ).toFixed(1)
                  )}
            </Typography>
            {/* number of the comments  */}
            <Typography sx={{ ...ratingTypo, paddingLeft: '5px' }}>reviews: {numOfReviews}</Typography>{' '}
            {/* fix the space between the number of reviews and the rating */}

          </Box>

          <Button className="contactBtn" sx={{ display: 'block' }}>
            {course.email}
          </Button>

          {/* tags wrap start */}
          <div className="tagsBtnWrap">
            {course.course_tags.map((item, index) => {
              function onClick(e) {
                e.preventDefault();
                router.push(`/search/${item}`);
              }
              return (
                <Box className="tagsBtnContainer" key={index}>
                  <Button
                    className="tagsBtn"
                    onClick={onClick}
                    sx={navbarButton}
                  >
                    {item}
                  </Button>
                </Box>
              );
            })}
          </div>
          {/* tags wrap ends */}
        </Box>{' '}
        {/* Tag buttons */}
        {/* Tag buttons ends */}
      </Box>
      {/* Profile page image/info section end*/}
      <div className="daysOnlineWrap">
        <Box sx={centerContentRow}>
          {available.map((value, index) => {
            if (value == 'true') {
              return (
                <Typography
                  key={index}
                  variant="string"
                  sx={{
                    ...daysTypo,
                    background: '#872e2e',
                    color: '#fff',
                    fontWeight: '500',
                  }}
                >
                  {` ${days[index]} `}{' '}
                </Typography>
              );
            } else {
              return (
                <Typography
                  key={index}
                  variant="string"
                  sx={{ ...daysTypo, background: '#eee' }}
                >
                  {` ${days[index]} `}{' '}
                </Typography>
              );
            }
          })}
        </Box>
        <Box sx={{ ...centerContentRow, paddingTop: '10px' }}>
          {course.is_offline === 'true' ? (
            <Typography
              variant="string"
              sx={{
                ...daysTypo,
                background: '#48872e',
                color: '#fff',
                fontWeight: '500',
              }}
            >
              Offline
            </Typography>
          ) : (
            <Typography
              variant="string"
              sx={{ ...daysTypo, background: '#eee' }}
            >
              Offline
            </Typography>
          )}
          {course.is_online === 'true' ? (
            <Typography
              variant="string"
              sx={{
                ...daysTypo,
                background: '#48872e',
                color: '#fff',
                fontWeight: '500',
              }}
            >
              Online
            </Typography>
          ) : (
            <Typography
              variant="string"
              sx={{ ...daysTypo, background: '#eee' }}
            >
              Online
            </Typography>
          )}
        </Box>
      </div>
      {/* About section */}
      <Box sx={{ ...aboutSection, borderTop: '1px solid #eee' }}>
        <Typography
          variant="h4"
          sx={{ fontFamily: 'lato', padding: '30px 0 10px 0' }}
        >
          About this class
        </Typography>
        <Typography sx={{ ...generalTypo, color: '#444' }}>
          {course.long_description}
        </Typography>
      </Box>
      {/* About section end */}
      {/* Review section */}
      <ReviewSection
        data={course.reviews}
        setNumOfReviews={setNumOfReviews}
        userData={userData}
      />
      {/*Review section */}
      {/*


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
  const users = API.users;
  return { props: { data, users } };
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
