import { withPageAuthRequired } from '@auth0/nextjs-auth0';
// import Link from 'next/link';
import UserUpdateForm from '@components/UserUpdateForm/UserUpdateForm';
import AddCourse from '@components/AddCourse/AddCourse';
import { useState } from 'react';
import { Button, Container, Grid, Card, Box, Link } from '@mui/material';
import {
  footerContainerBoxLgr,
  courseCardCardSection,
  courseCardButton,
  navbarSidePageBox,
} from 'globalCss';
import Footer from '@components/Footer/Footer';
import NavBar from '@components/navBar/navBar';
export default function UserDashboard({ user, allUsers, allCourses }) {
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
  return (
    <>
      <Box style={{ height: '100vh', fontFamily: 'Noto Sans Display' }}>
        {/* Navbar section */}
        <Box sx={navbarSidePageBox}>
          <NavBar logoLink={'https://i1.lensdump.com/i/rLRHNK.png'} />
        </Box>
        {/* Navbar section end*/}

        <Container>
          <p>Hello, {userData[0].first_name}</p>
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
                <p style={{ fontWeight: 'bold' }}>
                  here's a list of the courses you teach:
                </p>
                <ul>
                  {myCourses.map((course) => {
                    return (
                      <li key={course.course_id}>
                        <Link
                          sx={{
                            textDecoration: 'none',
                            color: 'black',
                          }}
                          key={`course-link-${course.id}`}
                          href={`/courses/${course.course_id}`}
                        >
                          {course.course_title}
                        </Link>
                        <Button
                          sx={{ ...courseCardButton, marginX: '15px' }}
                          onClick={() => {
                            setEditOld(!editOld);
                            setCreateNew(false);
                            setCourseToEdit(course);
                            setUpdateProfile(false);
                          }}
                        >
                          Edit Course
                        </Button>
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
                    <p>Update your user profile here</p>
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
                    <p>create a new course</p>
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
                  <AddCourse
                    createNew={createNew}
                    editOld={editOld}
                    courseToEdit={courseToEdit}
                    email={user.email}
                    teacherName={`${userData[0].first_name} ${userData[0].last_name}`}
                    userId={userData[0].id}
                    courses={allCourses}
                  />
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
