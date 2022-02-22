import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { Input, TextField } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Banner() {
  const matches = useMediaQuery('(min-width:700px)');

  return (
    <Box
      sx={{
        backgroundImage: 'url("https://i.lensdump.com/i/redSH7.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#555555',
        backgroundSize: '160rem',
        width: '100%',
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          background: 'transparent',
          width: '100vw',
          padding: '5rem 0rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {matches && (
          <Typography
            component="h1"
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignSelf: 'center',
              borderRadius: '6px',
              width: '50rem',
              color: '#fff',
              fontFamily: 'Inter',
              fontSize: '72px',
              fontStyle: 'normal',
              fontWeight: '700',
              lineHeight: '58.09px',
              letterSpacing: '0em',
              textAlign: 'center',
            }}
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
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignSelf: 'center',
              borderRadius: '6px',
              width: '25rem',
              color: '#fff',
              fontFamily: 'Inter',
              fontSize: '60px',
              fontStyle: 'normal',
              fontWeight: '700',
              lineHeight: '58.09px',
              letterSpacing: '0em',
              textAlign: 'center',
            }}
          >
            {`Find The Perfect {Tutor}`}
          </Typography>
        )}

        {!matches && (
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignSelf: 'center',
              borderRadius: '6px',
              width: '20rem',
              color: '#fff',
              fontFamily: 'Inter',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '24px',
              letterSpacing: '0em',
              textAlign: 'center',
            }}
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
            color="text.secondary"
            paragraph
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignSelf: 'center',
              borderRadius: '6px',
              width: '40rem',
              color: '#fff',
              fontFamily: 'Inter',
              fontSize: '26px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '24px',
              letterSpacing: '0em',
              textAlign: 'center',
            }}
          >
            Build, monetize, manage, and grow membership sites, courses,
            subscriptions, communities, events, or the digital product of your
            dreams
          </Typography>
        )}
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          {/* Search input for larger than 700px */}
          {matches && (
            <TextField
              id="outlined-basic"
              variant="outlined"
              sx={{ background: '#fff', borderRadius: '6px', width: '20rem' }}
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
                width: '1rem',
              }}
            />
          )}
          <Button
            variant="contained"
            sx={{
              marginRight: '5rem',
              color: '#fff',
              background: '#FF8957',
              fontFamily: 'Inter',
              fontSize: '18px',
              fontStyle: 'normal',
              fontWeight: '600',
              lineHeight: '40px',
              letterSpacing: '0em',
              textAlign: 'center',
            }}
          >
            Search
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
