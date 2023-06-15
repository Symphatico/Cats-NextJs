import path from 'path';
import fs from 'fs';
export default function handler(req, res) {
  if (req.method === 'GET') {
    const directoryPath = path.join(process.cwd(), 'data/request');
    const fileName = fs.readdirSync(directoryPath);
    const request = fileName.map((fileName) => {
      const filePath = path.join(directoryPath, fileName);
      const fileContent = fs.readFileSync(filePath);
      return JSON.parse(fileContent);
    });
    console.log(request);
    res.status('200').json(request);
  } else if (req.method === 'POST') {
    const values = req.body.newCatValues;
    let fileName = `${Math.random()}.json`;
    const filePath = path.join(process.cwd(), 'data/request', fileName);
    fs.writeFileSync(filePath, JSON.stringify({ ...values, fileName }));
    return res.status('200');
  }
}
