import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import NavBar from '../components/navBar/navBar.js';
import { footerContainerBoxMd } from 'globalCss.js';
import CourseCard from '../components/course-card/CourseCard.js';

import Banner from '@components/Banner/Banner.js';
import Footer from '@components/Footer/Footer.js';
import { API } from 'utils/API.js';
import Header from '@components/Header.js';

const data = API.courses;
const theme = createTheme();
const siteTitle = 'Weshare - Online skills exchange marketplace ';

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header title={siteTitle}></Header>

      <main>
        {/* Hero unit */}

        <Banner />
        {/* course card starts*/}
        <CourseCard cards={data} />
        {/* course card ends*/}
      </main>
      <Footer styling={footerContainerBoxMd} />
    </ThemeProvider>
  );
}
