import { join } from 'path';
import { createReadStream } from 'fs';

export default function handler(req, res) {
  const { path } = req.query;
  const filePath = join(process.cwd(), decodeURIComponent(path));

  const stream = createReadStream(filePath);

  stream.on('open', () => {
    res.setHeader('Content-Type', 'image/*');
    stream.pipe(res);
  });

  stream.on('error', (error) => {
    console.error(error);
    res.status(404).end();
  });
}