import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// const newBigCourseThing = bigDbData.courseDataPlusReviews.map((item) => {
//   return { reviews: item.Review, course_title: item.course_title };
// });
export const wouldYouUnpackThatForMe = (bigDbData) => {
  const dates = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const coursesMap = bigDbData
    .filter((item) => {
      return item.Course.length > 0;
    })
    .map((item) => {
      return {
        course_id: item.Course[0].course_id,
        teacher_name: `${item.first_name} ${item.last_name}`,
        email: item.email,
        location: item.Course[0].location,
        bio_text: item.bio_text,
        long_description: item.Course[0].long_description,
        is_online: String(item.Course[0].is_remote),
        is_offline: String(item.Course[0].is_inperson),
        images: {
          full: `${item.Course[0].image_url}?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80`,
          thumb: `${item.Course[0].image_url}?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80`,
        },
        course_brief: item.Course[0].course_brief,
        course_title: item.Course[0].course_title,
        course_tags: item.Course[0].course_tags,
        reviews: item.Course[0].Review.map((review) => {
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
        dates_available: item.Course[0].dates_available.map((bool, index) => {
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
  return [coursesMap, usersMap];
};
