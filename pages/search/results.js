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

// put a temp hyperlink on homepage so we can navigate to the search page with ease

// from homepage, user input is taken in  and onclick of search button-----> user input is passed to results page  ----> list of results displayed on results page.

//note to self: search bar components on both pages will operate in different ways. The search component on results page WILL NOT redirect users to another page to display results whereas it will on the homepage.

//connect search button so that when it is pressed, we are redirected to the results page(which then would display course cards related to user input)

export default function Results() {
  const matchesMd = useMediaQuery('(max-width:913px)');
  const matchesLrg = useMediaQuery('(min-width:913px)');

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
          variant="outlined"
          sx={{
            background: '#fff',
            borderRadius: '6px',
            width: '60%',
          }}
        />
        <Button variant="contained" sx={navbarButton}>
          Search
        </Button>
      </Box>
      {/* Search section end */}
      <Box sx={aboutSection}>
        <Typography variant="h4">Results for ‘Cooking class’</Typography>
        <Typography></Typography>
      </Box>

      {/* When the screen width reaches atleast 913px, then this css takes place. */}
      {matchesLrg && <Footer styling={footerContainerBoxLgr} />}
      {/* When the screen width reaches at most 913px, then this css takes place. */}
      {matchesMd && <Footer styling={footerContainerBoxMd} />}
    </Box>
  );
}
