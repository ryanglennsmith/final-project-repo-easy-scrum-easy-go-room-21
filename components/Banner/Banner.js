import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { Input, TextField } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

// CSS
import {
  bannerBox,
  bannerContainer,
  bannerTypographyWeb,
  bannerTypographyMobile,
  bannerStack,
  bannerTextFieldWeb,
  bannerTypographySubWeb,
  bannerTypographySubMobile,
  bannerButton,
} from '../../globalCss.js';
import NavBar from '@components/navBar/navBar.js';
import { useState } from 'react';
import { Router, useRouter } from 'next/router';

// grab input from navbar with useState - DONE
// use onClick() = > on the button
// pass the data as props to the "dynamic" [results] page.
// use get server side props on the results page.

// params = string

export default function Banner() {
  const matches = useMediaQuery('(min-width:700px)');
  const router = useRouter();

  const [input, setInput] = useState('');

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

  return (
    <Box sx={bannerBox}>
      <NavBar logoLink={'https://i.lensdump.com/i/rLRO3c.png'} />

      <Container maxWidth="sd" sx={bannerContainer}>
        {matches && (
          <Typography
            component="h1"
            variant="h2"
            align="center"
            gutterBottom
            sx={bannerTypographyWeb}
          >
            {`Find The Perfect {Tutor}`}
          </Typography>
        )}
        {!matches && (
          <Typography
            component="h1"
            variant="h2"
            align="center"
            gutterBottom
            sx={bannerTypographyMobile}
          >
            {`Find The Perfect {Tutor}`}
          </Typography>
        )}

        {!matches && (
          <Typography
            variant="h5"
            align="center"
            paragraph
            sx={bannerTypographySubMobile}
          >
            Build, monetize, manage, and grow membership sites, courses,
            subscriptions, communities, events, or the digital product of your
            dreams
          </Typography>
        )}
        {matches && (
          <Typography
            variant="h5"
            align="center"
            paragraph
            sx={bannerTypographySubWeb}
          >
            Build, monetize, manage, and grow membership sites, courses,
            subscriptions, communities, events, or the digital product of your
            dreams
          </Typography>
        )}
        <Stack
          sx={bannerStack}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          {/* Search input for larger than 700px */}
          {matches && (
            <TextField
              id="outlined-basic"
              variant="outlined"
              value={input}
              onChange={handleChange}
              sx={bannerTextFieldWeb}
            />
          )}
          {/* Search input for smaller than 700px */}
          {!matches && (
            <TextField
              id="outlined-basic"
              variant="outlined"
              value={input}
              onChange={handleChange}
              sx={{
                background: '#fff',
                borderRadius: '6px',
                width: '10rem',
              }}
            />
          )}
          <Button variant="contained" sx={bannerButton} onClick={onClick}>
            Search
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
