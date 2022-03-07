import { withPageAuthRequired } from '@auth0/nextjs-auth0';
// import Link from 'next/link';
import UserUpdateForm from '@components/UserUpdateForm/UserUpdateForm';
import AddCourse from '@components/AddCourse/AddCourse';
import { useEffect, useState } from 'react';
import {
  Button,
  Container,
  Grid,
  Card,
  Box,
  Link,
  Typography,
} from '@mui/material';
import {
  footerContainerBoxLgr,
  courseCardCardSection,
  courseCardButton,
  navbarSidePageBox,
  titleTypo,
  generalTypo,
  subHeadingTypo,
  subHeadingTypoProfile,
} from 'globalCss';
import Footer from '@components/Footer/Footer';
import NavBar from '@components/navBar/navBar';

export default function UserDashboard({ user, allUsers, allCourses }) {
  const [greeting, setGreeting] = useState('Welcome back ');
  function getTimeResponse() {
    const date = new Date();
    const hour = date.getHours();

    console.log(hour);

    if (hour < 12) {
      return 'Good morning, ';
    }
    if (hour >= 12 && hour < 18) {
      return 'Good afternoon, ';
    }
    if (hour >= 18) {
      return 'Good evening, ';
    } else {
      return 'Welcome back, ';
    }
  }

  useEffect(() => {
    setGreeting(getTimeResponse());
  }, []);

  const userData = allUsers.filter((match) => {
    return user.email === match.email;
  });
  const myCourses = allCourses.filter((course) => {
    return user.email === course.email;
  });
  const [createNew, setCreateNew] = useState(true);
  const [editOld, setEditOld] = useState(false);
  const [courseToEdit, setCourseToEdit] = useState('');
  const [updateProfile, setUpdateProfile] = useState(false);
  const [deleteCourse, setDeleteCourse] = useState(false);
  const [courseId, setCourseId] = useState('');

  function handleDeleteClick(id) {
    setCourseId(Number(id));
    setDeleteCourse(true);
  }

  useEffect(() => {
    async function deleteCourseFunc() {
      // if statement stops the function from looping on reload
      if (deleteCourse) {
        const id = Number(courseId);

        const req = {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        };
        const url = `http://localhost:3609/courses/${id}`;
        const res = await fetch(url, req);
        const data = await res.json();
        console.log('data sent: ', data);
        setDeleteCourse(false);
        setCourseId('');
        window.location.reload();
      }
    }
    deleteCourseFunc();
  }, [courseId]);
  return (
    <>
      <Box style={{ height: '100vh', fontFamily: 'Noto Sans Display' }}>
        {/* Navbar section */}
        <Box sx={navbarSidePageBox}>
          <NavBar logoLink={'https://i1.lensdump.com/i/rLRHNK.png'} />
        </Box>
        {/* Navbar section end*/}

        <Container>
          <Typography sx={titleTypo}>
            {greeting} {userData[0].first_name}
          </Typography>
          <Grid container spacing={4}>
            {/* <Grid item>
              <Card sx={{ ...courseCardCardSection }} xs={12}>
                <p>Update your user profile here</p>
                <UserUpdateForm
                  email={user.email}
                  firstName={userData[0].first_name}
                  lastName={userData[0].last_name}
                  phone={userData[0].phone}
                  userId={userData[0].id}
                  createNew={false}
                />
              </Card>
            </Grid> */}
            <Grid
              item
              xs={12}
              sx={{ display: 'flex', justifyContent: 'right' }}
            >
              <Button
                sx={{ ...courseCardButton, marginX: '15px' }}
                onClick={() => {
                  setUpdateProfile(!updateProfile);
                  setCreateNew(false);
                  setEditOld(false);
                }}
              >
                Update Profile
              </Button>
              <Button
                sx={{ ...courseCardButton, marginRight: '15px' }}
                onClick={() => {
                  setCreateNew(!createNew);
                  setCourseToEdit({});
                  setEditOld(false);
                  setUpdateProfile(false);
                }}
              >
                Create New Course
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Card sx={{ ...courseCardCardSection, minHeight: '600px' }}>
                <Typography
                  sx={{
                    ...subHeadingTypoProfile,

                    alignSelf: 'flex-start',
                  }}
                >
                  Courses you teach:
                </Typography>
                <ul
                  style={{
                    minWidth: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignContent: 'space-between',
                    flexWrap: 'wrap',
                  }}
                >
                  {myCourses.map((course) => {
                    return (
                      <li
                        key={course.course_id}
                        style={{
                          minWidth: '100%',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignContent: 'space-between',
                          marginTop: '10px',
                        }}
                      >
                        <Link
                          sx={{
                            ...generalTypo,
                            textDecoration: 'none',
                            color: 'black',
                          }}
                          key={`course-link-${course.id}`}
                          href={`/courses/${course.course_id}`}
                        >
                          {course.course_title.length > 35
                            ? `${course.course_title
                                .split('')
                                .splice(0, 25)
                                .join('')}...`
                            : `${course.course_title}`}
                        </Link>
                        <Box
                          sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            margin: '0 25px',
                          }}
                        >
                          <Button
                            sx={{ ...courseCardButton }}
                            onClick={() => {
                              setEditOld(!editOld);
                              setCreateNew(false);
                              setCourseToEdit(course);
                              setUpdateProfile(false);
                            }}
                          >
                            Edit Course
                          </Button>
                          {/* <Button
                            onClick={() => {
                              handleDeleteClick(course.id);
                            }}
                            sx={{ ...courseCardButton, margin: '0 25px' }}
                          >
                            X
                          </Button> */}
                        </Box>
                      </li>
                    );
                  })}
                </ul>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card sx={{ minHeight: '600px' }}>
                {' '}
                {updateProfile && (
                  <>
                    <Typography
                      sx={{ ...subHeadingTypoProfile, marginBottom: '10px' }}
                    >
                      Update your user profile here:
                    </Typography>
                    <UserUpdateForm
                      email={user.email}
                      firstName={userData[0].first_name}
                      lastName={userData[0].last_name}
                      phone={userData[0].phone}
                      userId={userData[0].id}
                      createNew={false}
                    />
                  </>
                )}
                {createNew && (
                  <>
                    <Typography sx={subHeadingTypoProfile}>
                      Create a new course here:
                    </Typography>
                    <AddCourse
                      createNew={createNew}
                      editOld={editOld}
                      courseToEdit={courseToEdit}
                      email={user.email}
                      teacherName={`${userData[0].first_name} ${userData[0].last_name}`}
                      userId={userData[0].id}
                      courses={allCourses}
                    />
                  </>
                )}
                {editOld && (
                  <>
                    <Typography
                      sx={{ ...subHeadingTypoProfile, marginBottom: '10px' }}
                    >
                      Edit your course here:
                    </Typography>
                    <AddCourse
                      createNew={createNew}
                      editOld={editOld}
                      courseToEdit={courseToEdit}
                      email={user.email}
                      teacherName={`${userData[0].first_name} ${userData[0].last_name}`}
                      userId={userData[0].id}
                      courses={allCourses}
                    />
                  </>
                )}
              </Card>
            </Grid>
          </Grid>
        </Container>
        <Footer styling={footerContainerBoxLgr} />
      </Box>
    </>
  );
}
export const getServerSideProps = withPageAuthRequired({
  returnTo: '/',
  async getServerSideProps(ctx) {
    // use ctx if change to dynamic route?
    // go get you some data
    // how about all the users?

    const getAllUsersFetch = await fetch('http://localhost:3609/users');
    const getAllCoursesFetch = await fetch('http://localhost:3609/courses');
    const getAllUsers = await getAllUsersFetch.json();
    const getAllCourses = await getAllCoursesFetch.json();

    return { props: { allUsers: getAllUsers, allCourses: getAllCourses } };
  },
});

// think about this later:
/*
<div
            className="coursesYouTookOrWillTakeComponent"
            style={{ margin: '5px', border: '2px solid hotpink' }}
          >
            here's a list of courses that you've taken or will take
          </div>
          <div
            className="reviewCRUDComponent"
            style={{ margin: '5px', border: '2px solid hotpink' }}
          >
            here's where you can see reviews you've left and can create a new
            review for a course you've taken / maybe this belongs in the above
            component
          </div>
          */
