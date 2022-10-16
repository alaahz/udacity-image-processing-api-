import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';
import sizeOf from 'image-size';

const checkThumb = (req: Request, res: Response, next: Function): void => {
  const file = path.join(
    process.cwd(),
    'images',
    'thumbnail',
    `${req.query.filename}.jpg`
  );

  const height = Number(req.query.height);
  const width = Number(req.query.width);

  // access() method used to check if the image is existing in thumb folder
  fs.access(file, fs.constants.F_OK, (err: unknown): void => {
    if (err) {
      // Meaning the image is never save in the thumb folder, so go to images route
      next();
    } else {
      // Meaning the image is in the thumb folder, so check the height and width are same diplay the image
      const dimensions = sizeOf(file);
      if (dimensions.height === height && dimensions.width === width) {
        res.status(200).sendFile(file);
        return;
      } else {
        //Height and width are not same go to images route
        next();
      }
    }
  });
};

export default checkThumb;
