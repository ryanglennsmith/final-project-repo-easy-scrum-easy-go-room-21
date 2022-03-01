import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { API } from 'utils/API';
export default function UserDashboard({ user, allUsers }) {
  const userData = allUsers.filter((match) => {
    return user.email === match.email;
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
        here's a list of the courses you teach
      </div>
      <div
        className="courseCRUDComponent"
        style={{ margin: '5px', border: '2px solid hotpink' }}
      >
        here's where you can C(R)UD your courses - (the R is separate? comp
        above)
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
        here's where you can update your personal info
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
    const getAllUsers = API.users;

    return { props: { allUsers: getAllUsers } };
  },
});
