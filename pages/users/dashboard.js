import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { API } from 'utils/API';
import Link from 'next/link';
import UserUpdateForm from '@components/UserUpdateForm/UserUpdateForm';
import AddCourse from '@components/AddCourse/AddCourse';
export default function UserDashboard({ user, allUsers, allCourses }) {
  const userData = allUsers.filter((match) => {
    return user.email === match.email;
  });
  const myCourses = allCourses.filter((course) => {
    return user.email === course.email;
  });

  return (
    <>
      <div>
        user dashboard / your email is: {user.email} / which means that your
        user_id is: {userData[0].id} <br /> <br /> I KNOW EVERYTHING
      </div>
      <div
        className="coursesYouTeachComponent"
        style={{ margin: '5px', border: '2px solid hotpink' }}
      >
        <p style={{ fontWeight: 'bold' }}>
          here's a list of the courses you teach:
        </p>
        <ul>
          {myCourses.map((course) => {
            return (
              <li key={course.id}>
                <Link
                  key={`course-link-${course.id}`}
                  href={`/courses/${course.course_id}`}
                >
                  {course.course_title}
                </Link>
                <span key={`course-span-${course.id}`}>fake link: (edit?)</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className="courseCRUDComponent"
        style={{ margin: '5px', border: '2px solid hotpink' }}
      >
        here's where you can C(R)UD your courses - (the R is separate? comp
        above)
        <AddCourse
          email={user.email}
          teacherName={`${userData[0].first_name} ${userData[0].last_name}`}
          userId={userData[0].id}
          courses={allCourses}
        />
      </div>
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
        here's where you can see reviews you've left and can create a new review
        for a course you've taken / maybe this belongs in the above component
      </div>
      <div
        className="userCRUDComponent"
        style={{ margin: '5px', border: '2px solid hotpink' }}
      >
        here's where you can update your personal info what to add to this
        component: input form w/submit btn: email (matches already with auth0),
        phone, first_name, last_name (create a quick js fn to make new user id
        on new user: users.length + 2)
        <UserUpdateForm
          email={user.email}
          firstName={userData[0].first_name}
          lastName={userData[0].last_name}
          phone={userData[0].phone}
          userId={userData[0].id}
        />
      </div>
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
