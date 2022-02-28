import { AppBar, Button, Toolbar, Container, Link, Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRouter } from 'next/router';
import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';

// Importing CSS
import {
  navBarApp,
  navBarToolBar,
  navBarContainer,
  navBarBox,
  navbarButton,
} from 'globalCss.js';

export default function NavBar({ logoLink }) {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  const matches = useMediaQuery('(min-width:900px)');
  const loginClick = (e) => {
    e.preventDefault();
    router.push('/api/auth/login');
  };
  const logoutClick = (e) => {
    e.preventDefault();
    router.push('api/auth/logout');
  };
  return (
    <AppBar
      position="relative"
      sx={navBarApp}
      style={{
        background: 'transparent',
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={navBarToolBar} style={{ padding: 0 }}>
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
          {!user ? (
            <Button variant="contained" sx={navbarButton} onClick={loginClick}>
              SIGN IN
            </Button>
          ) : (
            <Button variant="contained" sx={navbarButton} onClick={logoutClick}>
              LOG OUT
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
