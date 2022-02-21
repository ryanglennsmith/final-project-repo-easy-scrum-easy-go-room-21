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
    <AppBar position="relative" color="primary">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          // alignContent: 'space-around',
        }}
      >
        {/* LOGO */}
        <Container sx={{ display: 'flex', flexDirection: 'row' }}>
          <img
            src="https://i1.lensdump.com/i/rSrdZa.png"
            style={{ maxWidth: '4rem' }}
          ></img>
          <Typography variant="h6" color="inherit">
            Service stack
          </Typography>
        </Container>

        <Box className="navbar-buttons" sx={{ display: 'flex', wrap: 'wrap' }}>
          {matches && (
            <Link
              sx={{ paddingRight: '2rem' }}
              color="#000000"
              underline="none"
            >
              Home
            </Link>
          )}

          {matches && (
            <Link
              sx={{ paddingRight: '2rem' }}
              color="#000000"
              underline="none"
            >
              item 1
            </Link>
          )}

          {matches && (
            <Link
              sx={{ paddingRight: '2rem' }}
              color="#000000"
              underline="none"
            >
              item 2
            </Link>
          )}
          <Link
            sx={{ paddingRight: '2rem', width: '5rem' }}
            color="#000000"
            underline="none"
          >
            Sign in
          </Link>
          <Button
            color="secondary"
            variant="contained"
            sx={{ marginRight: '4rem' }}
          >
            Join
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
