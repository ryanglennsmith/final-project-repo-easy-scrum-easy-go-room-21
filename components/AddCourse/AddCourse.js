import React, { useState, useEffect } from 'react';
import { TextField, Button, Checkbox } from '@mui/material';

const AddCourse = ({ email, teacherName, userId, courses }) => {
  const [newCourse, setNewCourse] = useState({});
  const [weekdays, setWeekdays] = useState([
    { Sunday: false },
    { Monday: false },
    { Tuesday: false },
    { Wednesday: false },
    { Thursday: false },
    { Friday: false },
    { Saturday: false },
  ]);
  console.log(weekdays);
  console.log({
    ...newCourse,
    id: courses.length + 1,
    teacher_name: teacherName,
    email: email,
  });
  const handleSubmit = () => {
    setNewCourse({
      ...newCourse,
      id: courses.length + 1,
      teacher_name: teacherName,
      email: email,
    });
  };
  return (
    <>
      <TextField
        onChange={(e) =>
          setNewCourse({ ...newCourse, course_title: e.target.value })
        }
        id="new-course-name"
        label="course title"
        sx={{
          margin: '10px 0 10px 0',
          padding: '15px',
        }}
      />
      <TextField
        onChange={(e) =>
          setNewCourse({ ...newCourse, bio_text: e.target.value })
        }
        id="new-course-bio-text"
        label="your bio"
        sx={{
          margin: '10px 0 10px 0',
          padding: '15px',
        }}
      />
      <TextField
        onChange={(e) =>
          setNewCourse({ ...newCourse, long_description: e.target.value })
        }
        id="new-course-long-desc"
        label="describe the course"
        sx={{
          margin: '10px 0 10px 0',
          padding: '15px',
        }}
      />
      <Checkbox
        onChange={(e) =>
          setNewCourse({ ...newCourse, online: e.target.checked })
        }
      />{' '}
      Online?
      <Checkbox
        onChange={(e) =>
          setNewCourse({ ...newCourse, offline: e.target.checked })
        }
      />{' '}
      Offline?
      <Checkbox
        onChange={(e) =>
          setNewCourse({ ...newCourse, monday: e.target.checked })
        }
      />{' '}
      <br /> <br />
      Monday?
      <Checkbox
        onChange={(e) =>
          setWeekdays([
            ...weekdays.slice(0, 1),
            { Monday: e.target.checked },
            ...weekdays.slice(2),
          ])
        }
      />{' '}
      Tuesday?
      <Checkbox
        onChange={(e) =>
          setWeekdays([
            ...weekdays.slice(0, 2),
            { Tuesday: e.target.checked },
            ...weekdays.slice(3),
          ])
        }
      />{' '}
      Wednesday?
      <Checkbox
        onChange={(e) =>
          setWeekdays([
            ...weekdays.slice(0, 3),
            { Wednesday: e.target.checked },
            ...weekdays.slice(4),
          ])
        }
      />{' '}
      Thursday?
      <Checkbox
        onChange={(e) =>
          setWeekdays([
            ...weekdays.slice(0, 4),
            { Thursday: e.target.checked },
            ...weekdays.slice(5),
          ])
        }
      />{' '}
      Friday?
      <Checkbox
        onChange={(e) =>
          setWeekdays([
            ...weekdays.slice(0, 5),
            { Friday: e.target.checked },
            ...weekdays.slice(6),
          ])
        }
      />{' '}
      Saturday?
      <Checkbox
        onChange={(e) =>
          setWeekdays([
            ...weekdays.slice(0, 6),
            { Saturday: e.target.checked },
            ...weekdays.slice(7),
          ])
        }
      />{' '}
      Sunday?
      <Checkbox
        onChange={(e) =>
          setWeekdays([{ Sunday: e.target.checked }, ...weekdays.slice(1)])
        }
      />
    </>
  );
};

export default AddCourse;

/* data to bring in/send in POST: 
course_id: (take last course id and add 1)
teacher_name: teacherName
email: email
course_title:
bio_text:
long_description:
is_online?
is_offline?
dates: [{s: bool}, {m: bool} ...]

// location? 
image: images: {thumb: (url + ), full: (url + )}
course_brief:
course_tags:
course_bullets:
reviews: [(empty arr)]
*/
