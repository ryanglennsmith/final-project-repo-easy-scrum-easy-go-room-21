import { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Dialog } from '@mui/material';
import { footerContainerBoxMd } from 'globalCss.js';
import CourseCard from '../components/course-card/CourseCard.js';

import Banner from '@components/Banner/Banner.js';
import Footer from '@components/Footer/Footer.js';
import { API } from 'utils/API.js';

import { useUser } from '@auth0/nextjs-auth0';
import UserUpdateForm from '@components/UserUpdateForm/UserUpdateForm.js';

import Header from '@components/Header/Header.js';

// const data = API.courses;
const theme = createTheme();

export async function getServerSideProps() {
  const data = await fetch('http://localhost:3609/courses');
  const userData = await fetch(`http://localhost:3609/users`);
  const users = await userData.json();
  const courses = await data.json();
  // console.log(`User data:`, users);

  return { props: { data: courses, usersData: users } };
}

export default function Album({ data, usersData }) {
  const { user, error, isLoading } = useUser();
  const [open, setOpen] = useState(false);
  const [newUserSuccess, setNewUserSuccess] = useState(false);
  // console.log('newUserSuccess: ', newUserSuccess);
  // console.log(`User data:`, usersData);
  useEffect(() => {
    if (!isLoading) {
      if (user) {
        if (
          usersData.filter((course) => {
            return user.email === course.email;
          }).length === 0
        ) {
          setOpen(true);
        }
      }
      if (newUserSuccess) {
        setOpen(false);
      }
    }
  });
  const siteTitle = 'WeShare - Online Skills Exchange Marketplace ';

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header title={siteTitle}></Header>
      {user && (
        <Dialog open={open}>
          <UserUpdateForm
            email={user.email}
            createNew={true}
            setNewUserSuccess={setNewUserSuccess}
          />
        </Dialog>
      )}

      <main>
        {/* Hero unit */}

        <Banner />
        {/* course card starts*/}
        <CourseCard cards={data} setSearch={''} />
        {/* course card ends*/}
      </main>
      <Footer styling={footerContainerBoxMd} />
    </ThemeProvider>
  );
}
