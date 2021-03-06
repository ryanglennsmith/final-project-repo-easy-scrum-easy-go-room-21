import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { Input, TextField } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typewriter from 'typewriter-effect';

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
import NavBar from '@components/NavBar/NavBar.js';
import { useState } from 'react';
import { useRouter } from 'next/router';

// grab input from navbar with useState - DONE
// use onClick() = > on the button
// pass the data as props to the "dynamic" [results] page.
// use get server side props on the results page.

// params = string

const dynamicTextArray = [
  '{Paint}',
  '{Cook}',
  '{Crochet}',
  '{Speak Mandarin}',
  '{Craft Jewelry}',
  '{Play Guitar}',
  '{Knit}',
];

const dynamicTextRandom =
  dynamicTextArray[Math.floor(Math.random() * dynamicTextArray.length)];
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
  function onEnter(e) {
    if (e.key === 'Enter') {
      router.push(`/search/${input}`);
    }
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
            <span>
              {'I Want to Learn to'}

              <Typewriter
                options={{
                  strings: dynamicTextArray,
                  autoStart: true,
                  loop: true,
                  pauseFor: 2000,
                }}
                // .typeString(`I Want To Learn How To {${dynamicText}}`)
              />
            </span>
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
            {`I Want To Learn How To {${dynamicTextRandom}}`}
          </Typography>
        )}

        {!matches && (
          <Typography
            variant="h5"
            align="center"
            paragraph
            sx={bannerTypographySubMobile}
          >
            <p>
              Here at WeShare, we believe that everyone has something to learn
              and something to teach.
            </p>
            <p>
              Our platform offers users the opportunity to exchange skills on a
              class-for-class basis.
            </p>
          </Typography>
        )}
        {matches && (
          <Typography
            variant="h5"
            align="center"
            paragraph
            sx={bannerTypographySubWeb}
          >
            <span>
              Here at <span className="bold">WeShare</span>, we believe that{' '}
              <span className="bold">everyone</span> has{' '}
              <span className="bold">
                something to learn and something to teach.
              </span>
            </span>
            <span>
              <span className="bold">Our platform</span> offers users{' '}
              <span className="bold">the opportunity to exchange skills</span>{' '}
              on a class-for-class basis.
            </span>
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
              onKeyDown={onEnter}
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
              onKeyDown={onEnter}
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
