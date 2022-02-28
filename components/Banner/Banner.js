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

export default function Banner() {
  const matches = useMediaQuery('(min-width:700px)');

  return (
    <Box sx={bannerBox}>
      <NavBar logoLink={'https://i1.lensdump.com/i/reF4Pa.png'} />

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
              sx={bannerTextFieldWeb}
            />
          )}
          {/* Search input for smaller than 700px */}
          {!matches && (
            <TextField
              id="outlined-basic"
              variant="outlined"
              sx={{
                background: '#fff',
                borderRadius: '6px',
                width: '10rem',
              }}
            />
          )}
          <Button variant="contained" sx={bannerButton}>
            Search
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
