import Image from 'next/image';
import { Button } from '@mui/material';
import { fontWeight } from '@mui/system';
export default function CoursePage({ data }) {
  // data to add to dummy json file
  // course_title:
  // rating:
  // dates_available: {Sunday: false, Monday: true, Tuesday: false, Wednesday: true, Thursday: true, Friday: false, Saturday: true}

  const fakeData = {
    course_id: 1,
    teacher_name: 'Simona Mountcastle',
    email: 'smountcastle0@ebay.co.uk',
    location: 'Skrwilno',
    bio_text:
      'Small batch crucifix helvetica kickstarter messenger bag before they sold out everyday carry viral ethical af next level chillwave hammock succulents pug.  Mixtape YOLO single-origin coffee sartorial, kitsch pitchfork ugh pabst letterpress.  Sartorial wayfarers lumbersexual retro before they sold out plaid etsy chillwave chicharrones portland gastropub VHS artisan tumblr.  Typewriter shaman locavore ramps, tumeric ugh pabst.  Umami kickstarter coloring book kitsch chartreuse, ramps plaid copper mug.  Offal everyday carry intelligentsia glossier, woke deep v microdosing selvage freegan hexagon scenester.  Mlkshk listicle portland raw denim, meditation lyft hoodie mustache hashtag.',
    long_description:
      "Heirloom gastropub whatever cardigan neutra listicle wayfarers.  Cardigan you probably haven't heard of them four dollar toast, lumbersexual iceland affogato hexagon pabst poutine live-edge vexillologist af prism.  Man bun live-edge subway tile literally lumbersexual pug.  Hella freegan iceland small batch poke slow-carb.  Try-hard vice ennui pork belly, 90's subway tile echo park heirloom bushwick blog readymade lo-fi kogi flannel street art.  Squid farm-to-table butcher ugh heirloom direct trade.",
    is_online: 'true',
    is_offline: 'false',
    image: 'https://images.unsplash.com/photo-1461344577544-4e5dc9487184',
    course_brief:
      'Master cleanse taiyaki ethical bushwick slow-carb migas XOXO direct trade',
    course_title: 'Painting for idiots',
    rating: 3.2,
    dates_available: [
      {
        Sunday: false,
      },
      { Monday: true },
      { Tuesday: false },
      { Wednesday: true },
      { Thursday: true },
      { Friday: false },
      { Saturday: true },
    ],
  };
  const days = fakeData.dates_available.map((date) => {
    return Object.keys(date);
  });
  const available = fakeData.dates_available.map((date) => {
    return Object.values(date).toString();
  });

  return (
    <div className="topLevelContainer courseProfile">
      <Image src={fakeData.image} width="400px" height="260px" alt="painting" />
      <section className="lessonCard">
        <h1 className="courseTitle">{fakeData.course_title}</h1>
        <p className="courseSubHead">{fakeData.course_brief}</p>
        <p className="courseTeacherName">{fakeData.teacher_name}</p>
        <p className="courseRating">rating: {fakeData.rating}</p>
        <p className="courseDates">
          {available.map((value, index) => {
            if (value == 'true') {
              return <span style={{ fontWeight: 'bold' }}>{days[index]} </span>;
            } else {
              return <span style={{ color: 'gray' }}>{days[index]} </span>;
            }
          })}
        </p>
        <p className="courseOnlineStatus">
          {fakeData.is_offline === 'true' ? (
            <span style={{ fontWeight: 'bold' }}>Offline</span>
          ) : (
            <span style={{ color: 'gray' }}>Offline</span>
          )}{' '}
          |{' '}
          {fakeData.is_online === 'true' ? (
            <span style={{ fontWeight: 'bold' }}>Online</span>
          ) : (
            <span style={{ color: 'gray' }}>Online</span>
          )}
        </p>
        <Button>{fakeData.email}</Button>
      </section>
      <section className="courseDescription">
        <h2>About this class</h2>
        <p className="courseLongDescription">{fakeData.long_description}</p>
      </section>

      {/* 
---

   - Profile (title, subtext, rating, name, date, aboutClass, content)
         - Image (image)
         - LessonCard(title, subText, rating, name, date)
               - Action Button (text, function) (Child component)
         - Description (aboutClass, content) (Child component)
 */}
    </div>
  );
}

// export async function getServerSideProps(ctx) {
//   const number = ctx.params;
//   console.log('id:', number);
//   return { props: { id: number } };
// }

export async function getStaticPaths() {
  return {
    // call a fetch to all the courses
    // map all courses by id
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],

    fallback: false,
  };
}
export async function getStaticProps(stat) {
  console.log(stat.params.id);
  const data = { id: stat.params.id, course_name: 'hamburger cookery' };
  return { props: { data: data } };
}
