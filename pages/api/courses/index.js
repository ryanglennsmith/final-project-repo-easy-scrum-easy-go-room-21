import { API } from 'utils/API';
export default function handler(req, res) {
  res.status(200).json(API);
}
