import path from 'path';
import { cats } from '../../../data/cats';
import fs from 'fs';
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status('200').json(cats);
  }
}
