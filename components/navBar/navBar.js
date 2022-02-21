import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Container,
  Link,
  Box,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';

export default function NavBar() {
  const matches = useMediaQuery('(min-width:700px)');

  return (
    <AppBar position="relative">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0px 13rem ',
        }}
      >
        {/* LOGO */}
        <Container sx={{ display: 'flex', flexDirection: 'row' }}>
          <img
            src="https://i1.lensdump.com/i/rSrdZa.png"
            style={{ maxWidth: '4rem' }}
          ></img>
          <Typography variant="h6" color="inherit">
            Service Stack
          </Typography>
        </Container>

        {/* NAV-BAR LINKS */}
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Box
            href="/"
            color="#000000"
            underline="none"
            sx={{ paddingRight: '2rem' }}
          >
            {matches ? 'Home' : ''}
          </Box>

          <Box
            href="/"
            color="#000000"
            underline="none"
            sx={{ paddingRight: '2rem' }}
          >
            {matches ? 'Item' : ''}
          </Box>

          <Box
            href="/"
            color="#000000"
            underline="none"
            sx={{ paddingRight: '2rem' }}
          >
            {matches ? 'Item' : ''}
          </Box>

          <Box
            href="/"
            color="#000000"
            underline="none"
            sx={{ paddingRight: '2rem' }}
          >
            Sign in
          </Box>

          <Button href="/" color="secondary" size="small" variant="outlined">
            Join
          </Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
