import { API } from 'utils/API';
export default function handler(req, res) {
  const id = Number(req.query.id);
  const payload = API.courses.filter((course) => {
    return course.course_id === id;
  });
  res.status(200).json({ course: payload });
}
