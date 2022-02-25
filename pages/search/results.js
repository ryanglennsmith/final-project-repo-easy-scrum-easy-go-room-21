//import link from next
import Image from 'next/image';
import {
  Box,
  Button,
  Rating,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';

//import navBar, course-card and footer from components folder
import Footer from '@components/Footer/Footer';
import NavBar from '@components/navBar/navBar';
import CourseCard from '@components/course-card/CourseCard';

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
  titleTypo,
} from 'globalCss';

// import api data and map through to create card content
import { API } from 'utils/API';
import { useState } from 'react';

// from homepage, user input is taken in  and onclick of search button-----> user input is passed to results page  ----> list of results displayed on results page.

//note to self: search bar components on both pages will operate in different ways. The search component on results page WILL NOT redirect users to another page to display results whereas it will on the homepage.

//connect search button so that when it is pressed, we are redirected to the results page(which then would display course cards related to user input)
const data = API.courses;

// compare input to data.course_title

export default function Results() {
  const matchesMd = useMediaQuery('(max-width:913px)');
  const matchesLrg = useMediaQuery('(min-width:913px)');

  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');

  function handleChange(e) {
    // saves value into the state
    e.preventDefault();
    setInput(e.target.value);
    // console.log(input);
  }

  function onClick(e) {
    // clears the search field when user clicks button
    e.preventDefault();
    setSearch(input);
    setInput('');
    console.log(input);
  }

  const searchResult = data.filter((item) =>
    item.course_title.toUpperCase().includes(search.toUpperCase())
  );

  console.log(searchResult);

  return (
    <Box style={{ height: '100vh' }}>
      {/* Navbar section */}
      <Box sx={navbarSidePageBox}>
        <NavBar logoLink={'https://i.lensdump.com/i/reFewK.png'} />
      </Box>
      {/* Navbar section end*/}
      {/* Search section */}
      <Box sx={profileSearchBar}>
        <TextField
          id="outlined-basic"
          value={input}
          onChange={handleChange}
          variant="outlined"
          sx={{
            background: '#fff',
            borderRadius: '6px',
            width: '60%',
          }}
        />
        <Button variant="contained" sx={navbarButton} onClick={onClick}>
          Search
        </Button>
      </Box>
      {/* Search section end */}
      {searchResult && (
        <Box sx={aboutSection}>
          <Typography variant="h4">Results for {search}</Typography>
          <Typography></Typography>
          {/* search results displayed here as cards */}
          <CourseCard cards={searchResult} />
        </Box>
      )}

      {/* When the screen width reaches atleast 913px, then this css takes place. */}
      {matchesLrg && <Footer styling={footerContainerBoxLgr} />}
      {/* When the screen width reaches at most 913px, then this css takes place. */}
      {matchesMd && <Footer styling={footerContainerBoxMd} />}
    </Box>
  );
}
