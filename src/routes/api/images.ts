import express from 'express';
import path from 'path';
import fs from 'fs';
import validator from '../../middlewares/validator';
import checkThumb from '../../middlewares/checkThumb';
import resizeImage from '../../resizeImage';

const routes = express.Router();

routes.get(
  '/images',
  validator,
  checkThumb,
  (req: express.Request, res: express.Response): void => {
    try {
      // Use path.join to generate the folder path and use / or \ based on OS of the user
      const file = path.join(
        process.cwd(),
        'images',
        'fall',
        `${req.query.filename}.jpg`
      );

      const thumbFolder = path.join(
        process.cwd(),
        'images',
        'thumbnail',
        `${req.query.filename}.jpg`
      );

      //Covert height and width from string to number
      const height = Number(req.query.height);
      const width = Number(req.query.width);

      // Access the image in fall folder to resize the image.
      fs.readFile(file, async (err: unknown, data: unknown): Promise<void> => {
        try {
          // await will prevent the compiler to execute the next line until resizeImage send the result.
          const image = await resizeImage(file, height, width, thumbFolder);
          console.log('image', image);
          //send the response to the client
          res.status(200).sendFile(thumbFolder);
        } catch (err) {
          res.status(500).send('Something went Wrong');
        }
      });
    } catch (err) {
      res.status(500).send('Something went Wrong');
    }
  }
);

export default routes;
