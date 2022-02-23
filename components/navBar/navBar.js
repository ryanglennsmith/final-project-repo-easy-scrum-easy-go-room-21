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
import Image from 'next/image';
import React from 'react';
import {
  navBarApp,
  navBarToolBar,
  navBarContainer,
  navBarBox,
  navbarButton,
} from 'globalCss.js';

export default function NavBar() {
  const matches = useMediaQuery('(min-width:900px)');

  return (
    <AppBar
      position="relative"
      color="primary"
      sx={navBarApp}
      style={{
        background: 'transparent',
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={navBarToolBar}>
        {/* when screen goes to small screen width switches 100*/}

        {/* LOGO */}
        <Container sx={navBarContainer}>
          <img
            src="https://i1.lensdump.com/i/re9GT7.md.png"
            alt="logo"
            style={{ maxWidth: '4rem' }}
          ></img>
          <Typography variant="h6" color="#fff">
            WeAreSharers
          </Typography>
        </Container>

        <Box className="navbar-buttons" sx={navBarBox}>
          {matches && (
            <Link color="#fff" underline="none">
              ABOUT
            </Link>
          )}

          {matches && (
            <Link color="#fff" underline="none">
              MENU1
            </Link>
          )}

          {matches && (
            <Link color="#fff" underline="none">
              MENU2
            </Link>
          )}
          <Link color="#fff" underline="none" nowrap>
            SIGN IN
          </Link>
          <Button color="secondary" variant="contained" sx={navbarButton}>
            Join
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
