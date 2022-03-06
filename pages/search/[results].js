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
import Header from '@components/Header/Header.js';

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

// import api data and map through to create card content
import { API } from 'utils/API';
import { useState, useEffect, useRef } from 'react';
import { createContext } from 'vm';

// const data = API.courses;

//gets search input from params of url
export async function getServerSideProps(context) {
  const homepageSearch = await context.query.results;
  // console.log(context);

  const api = await fetch(`http://localhost:3609/courses`);
  const data = await api.json();
  // console.log(text);
  return {
    props: {
      inputData: homepageSearch,
      apiData: data,
    },
  };
}

export default function Results({ inputData, apiData }) {
  const matchesMd = useMediaQuery('(max-width:913px)');
  const matchesLrg = useMediaQuery('(min-width:913px)');

  const data = apiData;

  console.log(`Data`, data);

  const [input, setInput] = useState('');
  const [search, setSearch] = useState(inputData);

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
    // console.log(input);
  }

  function onEnter(e) {
    if (e.key === 'Enter') {
      setSearch(input);
      setInput('');
    }
  }
  // explore page filter
  const searchResult = data.filter(
    (item) =>
      item.course_title.toUpperCase().includes(search.toUpperCase()) ||
      item.course_tags.includes(search.toLowerCase())
  );

  const siteTitle = 'WeShare Results - Inspirational work by real Freelancers';

  return (
    <div className="wrap">
      <Box style={{ height: '100vh', fontFamily: 'Noto Sans Display' }}>
        <Header title={siteTitle}></Header>
        {/* Navbar section */}

        <div className="topWrap">
          <Box sx={navbarSidePageBox}>
            <NavBar logoLink={'https://i1.lensdump.com/i/rLRHNK.png'} />
          </Box>
          {/* Navbar section end*/}
          {/* Search section */}
          <div className="wrapProfileSearchBar">
            <Box sx={{ ...profileSearchBar, height: '40px' }}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                onChange={handleChange}
                onKeyDown={onEnter}
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
        </div>
        {/* Search section end */}
        <div className="containerWrap">
          {search === 'results' ? (
            <Box sx={aboutSection}>
              <Typography>Search for item</Typography>
            </Box>
          ) : searchResult.length > 0 && search ? (
            <Box sx={aboutSection}>
              <Header
                title={`Search results for ${search} | WeShare `}
              ></Header>

              <Typography variant="h4">Results for "{search}"</Typography>
              <Typography></Typography>
              {/* search results displayed here as cards */}
              <CourseCard cards={searchResult} setSearch={setSearch} />
            </Box>
          ) : searchResult.length === 0 && search ? (
            <Box sx={aboutSection}>
              <Header
                title={`Search results for ${search} | WeShare `}
              ></Header>{' '}
              <Typography>Search results for "{search}" not found</Typography>{' '}
            </Box>
          ) : (
            <Box sx={aboutSection}>
              <Typography>Search for item</Typography>
            </Box>
          )}
        </div>

        {/* When the screen width reaches atleast 913px, then this css takes place. */}
        {matchesLrg && <Footer styling={footerContainerBoxLgr} />}
        {/* When the screen width reaches at most 913px, then this css takes place. */}
        {matchesMd && <Footer styling={footerContainerBoxMd} />}
      </Box>
    </div>
  );
}
