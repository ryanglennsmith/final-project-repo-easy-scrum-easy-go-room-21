import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Container,
  Box,
  Link,
} from '@mui/material';
import React from 'react';

export default function NavBar() {
  return (
    <AppBar position="relative" style={{ background: '#fff' }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0px 13rem ',
        }}
      >
        <Container sx={{ display: 'flex' }} maxWidth={'sm'}>
          <Typography variant="h6" color="inherit" noWrap>
            <img
              src="https://i1.lensdump.com/i/rSrdZa.png"
              style={{ maxWidth: '4rem' }}
            ></img>{' '}
            Service Stack
          </Typography>
        </Container>

        <Container
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Link
            href="/"
            color="#000000"
            underline="none"
            sx={{ paddingRight: '2rem' }}
          >
            nav-item
          </Link>

          <Link
            href="/"
            color="#000000"
            underline="none"
            sx={{ paddingRight: '2rem' }}
          >
            nav-item
          </Link>

          <Link
            href="/"
            color="#000000"
            underline="none"
            sx={{ paddingRight: '2rem' }}
          >
            nav-item
          </Link>

          <Link
            href="/"
            color="#000000"
            underline="none"
            sx={{ paddingRight: '2rem' }}
          >
            Sign in
          </Link>

          <Button href="/" color="secondary" size="small" variant="outlined">
            Join
          </Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
