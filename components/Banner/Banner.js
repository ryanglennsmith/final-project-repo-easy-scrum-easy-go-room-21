import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { Input, TextField } from '@mui/material';

export default function Banner() {
  return (
    <Box sx={{ background: '#2ABDA3', width: '100vw' }}>
      <Container
        maxWidth="sm"
        sx={{
          background: '#2ABDA3',
          width: '100vw',
          padding: '5rem 0rem',
        }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          {`Find The Perfect {Tutor}`}
        </Typography>

        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          Build, monetize, manage, and grow membership sites, courses,
          subscriptions, communities, events, or the digital product of your
          dreams
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            sx={{ background: '#fff', borderRadius: '6px', width: '20rem' }}
          />
          <Button variant="contained">Search</Button>
        </Stack>
      </Container>
    </Box>
  );
}
