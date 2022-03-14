import React, { useState, useEffect } from 'react';
import { TextField, Button, Checkbox, Box, Typography } from '@mui/material';
import {
  centerBoxContent,
  courseCardButton,
  generalTypo,
  profileTextfields,
} from 'globalCss';

const AddCourse = ({
  email,
  teacherName,
  userId,
  courses,
  createNew,
  editOld,
  courseToEdit,
}) => {
  const [newCourse, setNewCourse] = useState(courseToEdit);
  const [sendCourse, setSendCourse] = useState(false);
  // const [weekdays, setWeekdays] = useState([
  //   { Sunday: 'false' },
  //   { Monday: 'false' },
  //   { Tuesday: 'false' },
  //   { Wednesday: 'false' },
  //   { Thursday: 'false' },
  //   { Friday: 'false' },
  //   { Saturday: 'false' },
  // ]);
  const [weekdays, setWeekdays] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [requiredFields, setRequiredFields] = useState({
    course_title: courseToEdit.course_title ? true : false,
    // bio_text: courseToEdit.bio_text ? true : false,
    course_brief: courseToEdit.course_brief ? true : false,
    long_description: courseToEdit.long_description ? true : false,
    image: courseToEdit.image ? true : false,
    location: courseToEdit.location ? true : false,
  });
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const handleSubmit = () => {
    // if validated? ->
    setSendCourse(true);
  };

  useEffect(() => {
    if (sendCourse) {
      const body = {
        ...newCourse,
        id: courses.length + 1, // this goes away
        course_id: courseToEdit.course_id
          ? courseToEdit.course_id
          : courses.length + 1, // this goes away
        teacher_id: userId, //this becomes teacher_id (user id)
        email: email, // this goes away
        reviews: [], // this goes away
        images: {
          full:
            'https://' +
            newCourse.image +
            '?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
          thumb:
            'https://' +
            newCourse.image +
            '?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        }, // send one image url
        dates_available: weekdays, // convert to array [t,f,t,f ...]
        is_online:
          newCourse.is_online === undefined
            ? false
            : newCourse.is_online === true,
        is_offline:
          newCourse.is_offline === undefined
            ? false
            : newCourse.is_offline === true,
      };

      const sendIt = async () => {
        let req;
        let url;
        if (createNew) {
          req = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
          };
          url =
            `${process.env.NEXT_PUBLIC_LOCALHOST}/api/courses` ||
            'https://servicestack.netlify.app/api/courses';
        } else if (editOld) {
          req = {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
          };
          url =
            `${process.env.NEXT_PUBLIC_LOCALHOST}/api/courses/${newCourse.course_id}` ||
            `https://servicestack.netlify.app/api/courses/${newCourse.course_id}`;
        }
        const res = await fetch(url, req);
        const data = await res.json();
        window.location.reload();
      };
      sendIt();
    }
  }, [sendCourse]);
  const fieldChange = (event, field) => {
    if (event.target.value.length > 0) {
      setRequiredFields({ ...requiredFields, [field]: true });
    } else {
      setRequiredFields({ ...requiredFields, [field]: false });
    }
    setNewCourse({ ...newCourse, [field]: event.target.value });
  };
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {/* Container for text fields */}
      <Box>
        {/* Start of course title */}
        <TextField
          onChange={(e) => {
            fieldChange(e, 'course_title');
          }}
          required={true}
          defaultValue={newCourse.course_title}
          id="new-course-name"
          label="course title"
          sx={profileTextfields}
          inputProps={{ maxLength: 100 }}
        />
        {/* End of course title */}
        {/* Start of bio text */}
        {/* <TextField
          onChange={(e) => fieldChange(e, 'bio_text')}
          multiline={true}
          required={true}
          defaultValue={newCourse.bio_text}
          id="new-course-bio-text"
          label="your bio"
          sx={profileTextfields}
          inputProps={{ maxLength: 200 }}
        /> */}
        {/* End of bio text */}
        {/* Start of long description */}
        <TextField
          onChange={(e) => fieldChange(e, 'long_description')}
          multiline={true}
          required={true}
          defaultValue={newCourse.long_description}
          id="new-course-long-desc"
          label="describe the course"
          sx={profileTextfields}
          inputProps={{ maxLength: 500 }}
        />
        {/* End of long description */}
        {/* Start of location text */}
        <TextField
          onChange={(e) => fieldChange(e, 'location')}
          required={true}
          defaultValue={newCourse.location}
          id="new-course-location"
          label="location"
          sx={profileTextfields}
          inputProps={{ maxLength: 50 }}
        />
        {/* End of location text */}
        {/* Start of image url */}
        <TextField
          onChange={(e) => fieldChange(e, 'image')}
          id="new-course-image"
          required={true}
          defaultValue={newCourse.image}
          label="course image url"
          sx={profileTextfields}
          inputProps={{ maxLength: 120 }}
        />
        {/* End of image url */}
        {/* Start of course brief */}
        <TextField
          onChange={(e) => fieldChange(e, 'course_brief')}
          required={true}
          defaultValue={newCourse.course_brief}
          id="new-course-brief"
          label="summary of the course"
          sx={profileTextfields}
          inputProps={{ maxLength: 300 }}
        />
        {/* End of course brief */}
        {/* Start of course tags */}
        <TextField
          onChange={(e) =>
            setNewCourse({
              ...newCourse,
              course_tags: e.target.value.split(', '),
            })
          }
          defaultValue={
            Object.keys(courseToEdit).length > 0
              ? newCourse.course_tags.join(', ')
              : ''
          }
          id="new-course-tags"
          label="comma separated list of course tags"
          sx={profileTextfields}
          inputProps={{ maxLength: 120 }}
        />
        {/* End of course tags */}
      </Box>
      {/* Container for checkboxes and submission button */}
      <Box sx={centerBoxContent}>
        {/* Start of online/offline check boxes */}
        <Typography
          sx={{ ...generalTypo, alignSelf: 'flex-start', marginX: '15px' }}
        >
          Indicate if your course available online or offline:
        </Typography>
        <Box>
          <Checkbox
            defaultChecked={newCourse.is_online === true}
            onChange={(e) =>
              setNewCourse({ ...newCourse, is_online: e.target.checked })
            }
          />{' '}
          Online?
          <Checkbox
            defaultChecked={newCourse.is_offline === true}
            onChange={(e) =>
              setNewCourse({ ...newCourse, is_offline: e.target.checked })
            }
          />{' '}
          Offline? <br /> <br />
        </Box>
        {/* End of online/offline check boxes */}
        {/* Start of days of the week check boxes */}
        <Typography
          sx={{ ...generalTypo, alignSelf: 'flex-start', marginX: '15px' }}
        >
          Indicate which days your course takes place:
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {daysOfWeek.map((day, index) => {
            return (
              <Box sx={{ display: 'flex', marginX: '5px' }}>
                <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                  {day}
                </Typography>
                <Checkbox
                  defaultChecked={
                    Object.keys(courseToEdit).length > 0
                      ? Object.values(newCourse.dates_available[index])[0] ===
                        'true'
                      : false
                  }
                  onChange={(e) => {
                    setWeekdays([
                      ...weekdays.slice(0, index),
                      e.target.checked,
                      ...weekdays.slice(index + 1),
                    ]);
                  }}
                />{' '}
              </Box>
            );
          })}
        </Box>

        {/* End of days of the week check boxes */}

        {/* Start of submission buttons */}
        {/* Container for submission buttons */}
        <Box>
          {!Object.values(requiredFields).includes(false) ? (
            <Button
              sx={{ ...courseCardButton, marginRight: '15px' }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          ) : (
            <Button
              sx={{ ...courseCardButton, marginRight: '15px' }}
              disabled={true}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          )}
        </Box>
        {/* End of submission buttons */}
      </Box>
    </Box>
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
image: images: {thumb: (url + ), full: (url + )}
course_brief:
course_tags:
course_bullets:

// location? 
reviews: [(empty arr)]
*/

// create new course -> POST to /courses/ with this component
// press a button to create new course -> setMakeNew(true)
// set CRUD function to POST
// edit course -> PUT to /courses/id with this component
// press a button to edit course -> setEdit(true) & pull course info into default values
// set CRUD function to PUT

// Old days of the week checkboxes

{
  /* Monday?
      <Checkbox
        defaultChecked={
          Object.keys(courseToEdit).length > 0
            ? Object.values(newCourse.dates_available[1])[0] === 'true'
            : false
        }
        onChange={(e) =>
          setWeekdays([
            ...weekdays.slice(0, 1),
            { Monday: String(e.target.checked) },
            ...weekdays.slice(2),
          ])
        }
      />{' '}
      Tuesday?
      <Checkbox
        defaultChecked={
          Object.keys(courseToEdit).length > 0
            ? Object.values(newCourse.dates_available[2])[0] === 'true'
            : false
        }
        onChange={(e) =>
          setWeekdays([
            ...weekdays.slice(0, 2),
            { Tuesday: String(e.target.checked) },
            ...weekdays.slice(3),
          ])
        }
      />{' '}
      Wednesday?
      <Checkbox
        defaultChecked={
          Object.keys(courseToEdit).length > 0
            ? Object.values(newCourse.dates_available[3])[0] === 'true'
            : false
        }
        onChange={(e) =>
          setWeekdays([
            ...weekdays.slice(0, 3),
            { Wednesday: String(e.target.checked) },
            ...weekdays.slice(4),
          ])
        }
      />{' '}
      Thursday?
      <Checkbox
        defaultChecked={
          Object.keys(courseToEdit).length > 0
            ? Object.values(newCourse.dates_available[4])[0] === 'true'
            : false
        }
        onChange={(e) =>
          setWeekdays([
            ...weekdays.slice(0, 4),
            { Thursday: String(e.target.checked) },
            ...weekdays.slice(5),
          ])
        }
      />{' '}
      Friday?
      <Checkbox
        defaultChecked={
          Object.keys(courseToEdit).length > 0
            ? Object.values(newCourse.dates_available[5])[0] === 'true'
            : false
        }
        onChange={(e) =>
          setWeekdays([
            ...weekdays.slice(0, 5),
            { Friday: String(e.target.checked) },
            ...weekdays.slice(6),
          ])
        }
      />{' '}
      Saturday?
      <Checkbox
        defaultChecked={
          Object.keys(courseToEdit).length > 0
            ? Object.values(newCourse.dates_available[6])[0] === 'true'
            : false
        }
        onChange={(e) =>
          setWeekdays([
            ...weekdays.slice(0, 6),
            { Saturday: String(e.target.checked) },
            ...weekdays.slice(7),
          ])
        }
      />{' '}
      Sunday?
      <Checkbox
        defaultChecked={
          Object.keys(courseToEdit).length > 0
            ? Object.values(newCourse.dates_available[0])[0] === 'true'
            : false
        }
        onChange={(e) =>
          setWeekdays([
            { Sunday: String(e.target.checked) },
            ...weekdays.slice(1),
          ])
        }
      /> */
}

// Course bullet points

{
  /* <TextField
        onChange={(e) =>
          setNewCourse({
            ...newCourse,
            course_bullets: e.target.value.split('. '),
          })
        }
        defaultValue={
          Object.keys(courseToEdit).length > 0
            ? newCourse.course_bullets.join('. ')
            : ''
        }
        id="new-course-bullets"
        label="course bullets"
        sx={{
          margin: '10px 0 10px 0',
          padding: '15px',
        }}
      /> */
}
