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

import { PrismaClient } from '@prisma/client';

import Header from '@components/Header/Header.js';

// const data = API.courses;
const theme = createTheme();
const prisma = new PrismaClient();
export async function getServerSideProps() {
  const prismaCall = async () => {
    const dbCourses = await prisma.user.findMany({
      include: {
        Course: {
          include: {
            Review: true,
          },
        },
      },
    });
    // const dbUsers = await prisma.user.findMany();

    return dbCourses;
  };
  const bigDbData = await prismaCall()
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
  // const newBigCourseThing = bigDbData.courseDataPlusReviews.map((item) => {
  //   return { reviews: item.Review, course_title: item.course_title };
  // });
  const dates = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const coursesMap = bigDbData
    .filter((item) => {
      return item.Course.length > 0;
    })
    .map((thing) => {
      return {
        course_id: thing.Course[0].course_id,
        teacher_name: `${thing.first_name} ${thing.last_name}`,
        email: thing.email,
        location: thing.Course[0].location,
        bio_text: thing.bio_text,
        long_description: thing.Course[0].long_description,
        is_online: String(thing.Course[0].is_remote),
        is_offline: String(thing.Course[0].is_inperson),
        images: {
          full: `${thing.Course[0].image_url}?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80`,
          thumb: `${thing.Course[0].image_url}?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80`,
        },
        course_brief: thing.Course[0].course_brief,
        course_title: thing.Course[0].course_title,
        course_tags: thing.Course[0].course_tags,
        reviews: thing.Course[0].Review.map((review) => {
          return {
            reviewer:
              bigDbData.find((user) => review.reviewer_id === user.id)
                .first_name +
              ' ' +
              bigDbData.find((user) => review.reviewer_id === user.id)
                .last_name,
            date: review.date,
            review_text: review.review_text,
            rating: review.review_rating,
          };
        }),
        dates_available: thing.Course[0].dates_available.map((bool, index) => {
          return { [dates[index]]: String(bool) };
        }),
      };
    });
  const usersMap = bigDbData.map((user) => {
    return {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      phone: user.phone,
      id: user.id,
    };
  });
  // const data = await fetch('http://localhost:3609/courses');
  // const userData = await fetch(`http://localhost:3609/users`);

  return { props: { data: coursesMap, usersData: usersMap } };
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
