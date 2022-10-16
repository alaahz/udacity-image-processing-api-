import { Request, Response } from 'express';
import { access, constants } from 'node:fs';

import path from 'path';

const validator = (req: Request, res: Response, next: Function): void => {
  const file = path.join(
    process.cwd(),
    'images',
    'fall',
    `${req.query.filename}.jpg`
  );

  // access() method used to check if the image is existing in fall folder and then check the height and width
  access(file, constants.F_OK, (err: unknown): void => {
    if (err) {
      res
        .status(400)
        .send(
          'Please enter one of following file name [encenadaport , fjord, icelandwaterfall , palmtunnel , santamonica]'
        );
      return;
    } else {
      // undefined = the user doesn't enter the  height and width in url
      // '' = the user doesn't assign value to the height and width  in url

      if (
        req.query.height === '' ||
        req.query.height === undefined ||
        Number(req.query.height) <= 0
      ) {
        res
          .status(400)
          .send(
            'Please make sure you enter the image height (Positive number).'
          );
        return;
      }

      if (
        req.query.width === '' ||
        req.query.width === undefined ||
        Number(req.query.width) <= 0
      ) {
        res
          .status(400)
          .send(
            'Please make sure you enter the image width (Positive number).'
          );
        return;
      } else {
        // The user enter the right query value then go back to images route
        next();
      }
    }
  });
};

export default validator;
