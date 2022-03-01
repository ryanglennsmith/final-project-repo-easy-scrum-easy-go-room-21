// remember to comment out "type": "module" in package.json
// 25-02
import fs from 'fs';

import { API } from './API.js';
// *************************
// 28-02
// import axios from 'axios';
// const get75hipster = async () => {
//   try {
//     const res = await axios.get(
//       'http://hipsum.co/api/?type=hipster-centric&sentences=75'
//     );
//     return res;
//   } catch (error) {
//     console.error(error);
//     return;
//   }
// };
// const dates = [
//   {
//     date: '23-10-2020',
//   },
//   {
//     date: '15-09-2020',
//   },
//   {
//     date: '17-05-2020',
//   },
//   {
//     date: '21-03-2020',
//   },
//   {
//     date: '23-06-2021',
//   },
//   {
//     date: '05-09-2021',
//   },
//   {
//     date: '21-08-2020',
//   },
//   {
//     date: '14-06-2021',
//   },
//   {
//     date: '30-12-2020',
//   },
//   {
//     date: '20-07-2020',
//   },
//   {
//     date: '13-06-2021',
//   },
//   {
//     date: '27-06-2020',
//   },
//   {
//     date: '11-02-2022',
//   },
//   {
//     date: '15-03-2020',
//   },
//   {
//     date: '10-01-2021',
//   },
//   {
//     date: '26-03-2020',
//   },
//   {
//     date: '30-05-2021',
//   },
//   {
//     date: '22-06-2020',
//   },
//   {
//     date: '14-02-2022',
//   },
//   {
//     date: '11-04-2020',
//   },
//   {
//     date: '12-08-2020',
//   },
//   {
//     date: '28-04-2020',
//   },
//   {
//     date: '20-04-2020',
//   },
//   {
//     date: '20-06-2021',
//   },
//   {
//     date: '22-06-2020',
//   },
// ];

// const sentences = await get75hipster();
// const cleanedSentences = sentences.data[0]
//   .split('.')
//   .map((sentence) => sentence.trim());

// const getRandomUserIndex = () => Math.floor(Math.random() * API.users.length);
// const getRandom0to7 = () => Math.floor(Math.random() * 8);
// const getRandomDateIndex = () => Math.floor(Math.random() * dates.length);
// const getRandomReviewIndex = () =>
//   Math.floor(Math.random() * cleanedSentences.length);
// API.courses.forEach((course) => {
//   let numOfReviews = getRandom0to7();
//   course.reviews = [];
//   while (numOfReviews > 0) {
//     const userIndex = getRandomUserIndex();
//     course.reviews.push({
//       reviewer: `${API.users[userIndex].first_name} ${API.users[userIndex].last_name}`,
//       date: dates[getRandomDateIndex()].date,
//       rating: Math.ceil(Math.random() * 3 + 2),
//       review_text: cleanedSentences[getRandomReviewIndex()],
//     });
//     numOfReviews--;
//   }
// });
// fs.writeFileSync('./API.json', JSON.stringify(API));

// random reviews numbering between 0-7
// random reviewers
// random review_text
// random review_date from range
// random rating
// console.log(API.users[0]);
// const USERS = [
//   {
//     first_name: 'Cristie',
//     last_name: 'Domenc',
//     email: 'cdomenc0@shareasale.com',
//     phone: '+62-708-584-4282',
//   },
//   {
//     first_name: 'Lynn',
//     last_name: 'Cawston',
//     email: 'lcawston1@google.cn',
//     phone: '+962-808-826-3673',
//   },
//   {
//     first_name: 'Carena',
//     last_name: 'Coupar',
//     email: 'ccoupar2@sun.com',
//     phone: '+86-933-619-8929',
//   },
//   {
//     first_name: 'Cornell',
//     last_name: 'Larkcum',
//     email: 'clarkcum3@desdev.cn',
//     phone: '+7-109-331-4943',
//   },
//   {
//     first_name: 'Aida',
//     last_name: 'McSkin',
//     email: 'amcskin4@cbc.ca',
//     phone: '+420-310-295-0768',
//   },
//   {
//     first_name: 'Gaye',
//     last_name: 'Stangroom',
//     email: 'gstangroom5@geocities.com',
//     phone: '+420-748-913-3536',
//   },
//   {
//     first_name: 'Bethena',
//     last_name: 'Lindwall',
//     email: 'blindwall6@house.gov',
//     phone: '+1-623-808-1178',
//   },
//   {
//     first_name: 'Dwain',
//     last_name: 'Fust',
//     email: 'dfust7@qq.com',
//     phone: '+358-568-782-0199',
//   },
//   {
//     first_name: 'Park',
//     last_name: 'Kleeborn',
//     email: 'pkleeborn8@ftc.gov',
//     phone: '+62-269-647-5428',
//   },
//   {
//     first_name: 'Blaire',
//     last_name: 'Derwin',
//     email: 'bderwin9@behance.net',
//     phone: '+81-422-733-9532',
//   },
//   {
//     first_name: 'Findley',
//     last_name: 'Lennie',
//     email: 'flenniea@washington.edu',
//     phone: '+380-185-279-0701',
//   },
//   {
//     first_name: 'Pavel',
//     last_name: 'Vogl',
//     email: 'pvoglb@ameblo.jp',
//     phone: '+66-337-791-0156',
//   },
//   {
//     first_name: 'Rebeca',
//     last_name: 'Mapother',
//     email: 'rmapotherc@chronoengine.com',
//     phone: '+58-315-559-5205',
//   },
//   {
//     first_name: 'Vincenz',
//     last_name: 'Bartolacci',
//     email: 'vbartolaccid@kickstarter.com',
//     phone: '+86-258-741-8375',
//   },
//   {
//     first_name: 'Minda',
//     last_name: 'Wartnaby',
//     email: 'mwartnabye@narod.ru',
//     phone: '+970-654-636-8141',
//   },
// ];
// const PHONES = [
//   { phone: '+62-107-360-5424' },
//   { phone: '+81-810-229-4650' },
//   { phone: '+63-641-927-2257' },
//   { phone: '+86-916-358-2397' },
//   { phone: '+263-640-822-0808' },
//   { phone: '+86-671-138-7378' },
//   { phone: '+46-997-291-4205' },
//   { phone: '+62-198-316-2523' },
//   { phone: '+380-263-844-9783' },
//   { phone: '+51-638-195-7356' },
//   { phone: '+86-223-598-6813' },
//   { phone: '+63-389-814-8190' },
//   { phone: '+63-509-524-0517' },
//   { phone: '+351-213-406-7954' },
//   { phone: '+86-217-108-8229' },
//   { phone: '+381-210-626-0368' },
//   { phone: '+62-291-520-3921' },
//   { phone: '+86-921-215-3155' },
//   { phone: '+63-133-939-2248' },
//   { phone: '+355-923-235-1305' },
//   { phone: '+57-897-498-0062' },
//   { phone: '+58-707-774-4225' },
//   { phone: '+63-737-276-2560' },
//   { phone: '+353-184-424-3373' },
//   { phone: '+62-303-977-1231' },
// ];

// const newUsers = API.courses.map((course, index) => {
//   return {
//     first_name: course.teacher_name.split(' ')[0],
//     last_name: course.teacher_name.split(' ')[1],
//     email: course.email,
//     phone: PHONES[index].phone,
//   };
// });

// newUsers.forEach((user) => USERS.push(user));

// USERS.forEach((user, index) => {
//   user.id = index + 1;
// });
// API.users = USERS;
// fs.writeFileSync('./API.json', JSON.stringify(API));

// API.courses.forEach((entry) => {
//   entry.images.thumb = entry.images.thumb.replace(
//     '?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
//     '?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
//   );
// });
// // console.log(API.courses[0].images);
// const fs = require('fs');
// fs.writeFileSync('./API.json', JSON.stringify(API));

// *****************************
// API.courses.forEach((course) => {
//   course.rating = Number(course.rating);
//   if (course.rating < 2) {
//     course.rating += 3;
//   }
// });
// const fs = require('fs');
// fs.writeFileSync('./API.json', JSON.stringify(API));
// code to fix ratings numbers

// ****************************
// code from 22-02
// import axios from 'axios';
// const get75hipster = async () => {
//   try {
//     const res = await axios.get(
//       'http://hipsum.co/api/?type=hipster-centric&sentences=75'
//     );
//     return res;
//   } catch (error) {
//     console.error(error);
//     return;
//   }
// };

// const sentences = await get75hipster();
// const cleanedSentences = sentences.data[0]
//   .split('.')
//   .map((sentence) => sentence.trim());

// API.courses.forEach((entry) => {
//   if (entry.rating < 2) {
//     entry.rating += 3;
//   } else if (entry.rating < 4) {
//     entry.rating++;
//   }
//   const sentenceArray = [];
//   let randomThreeToFive = Math.ceil(Math.random() * 3 + 2);
//   while (randomThreeToFive > 0) {
//     sentenceArray.push(
//       cleanedSentences[Math.floor(Math.random() * cleanedSentences.length)]
//     );
//     randomThreeToFive--;
//   }
//   entry.course_bullets = sentenceArray;
//   entry.images = {
//     full:
//       entry.image +
//       '?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
//     thumb:
//       entry.image +
//       '?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
//   };
// });
// const imageURLs = API.courses.map((course) => {
//   return {
//     images: {
//       full:
//         course.image +
//         '?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
//       thumb:
//         course.image +
//         '?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
//     },
//   };
// });
// console.log(imageURLs);
// import fs from 'fs';
// fs.writeFileSync('./API.json', JSON.stringify(API));
// ****************************
// code from 21-02

// code for adding to API object

// const createDailySchedule = () => {
//   const trueOrFalse = ['true', 'false'];
//   const datesAvailable = [
//     'Sunday',
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//   ];
//   return datesAvailable.map((day) => {
//     return { [day]: trueOrFalse[Math.floor(Math.random() * 2)] };
//   });
// };

// API.forEach((entry) => {
//   entry.rating = (Math.random() * 5).toPrecision(3);
//   entry.dates_available = createDailySchedule();
// });
// const fs = require('fs');
// fs.writeFileSync('./API.json', JSON.stringify(API));
