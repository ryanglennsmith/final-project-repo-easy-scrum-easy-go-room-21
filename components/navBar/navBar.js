import { AppBar, Button, Toolbar, Container, Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRouter } from 'next/router';
import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import { Link as MUILink } from '@mui/material';

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
    router.push('/api/auth/logout');
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
        <Link href="/" passHref>
          <MUILink>
            <Container sx={navBarContainer} style={{ padding: 0 }}>
              <img
                id="image-logo"
                src={logoLink}
                alt="logo"
                style={{ maxWidth: '200px' }}
              ></img>
            </Container>
          </MUILink>
        </Link>

        <Box className="navbar-buttons" sx={navBarBox}>
          {matches && (
            <Link href="/" passHref>
              <MUILink color="#fff" underline="none">
                ABOUT
              </MUILink>
            </Link>
          )}

          {matches && (
            <Link href="/search/results" passHref>
              <MUILink color="#fff" underline="none">
                EXPLORE
              </MUILink>
            </Link>
          )}

          {matches && user && (
            <Link href="/users/dashboard" passHref>
              <MUILink color="#fff" underline="none">
                DASHBOARD
              </MUILink>
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
