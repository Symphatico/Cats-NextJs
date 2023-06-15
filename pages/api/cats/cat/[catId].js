import { cats } from '../../../../data/cats';
export default function handler(req, res) {
  const { catId } = req.query;
  const cat = cats.find((cat) => cat.id === catId);
  res.status(200).json(cat);
}
