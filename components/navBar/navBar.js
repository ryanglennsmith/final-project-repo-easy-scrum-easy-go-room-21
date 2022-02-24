import { AppBar, Button, Toolbar, Container, Link, Box } from '@mui/material';
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

export default function NavBar({ logoLink }) {
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
        <Link href="/">
          <Container sx={navBarContainer}>
            <img src={logoLink} alt="logo" style={{ maxWidth: '20rem' }}></img>
          </Container>
        </Link>
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
          <Link color="#fff" underline="none">
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
