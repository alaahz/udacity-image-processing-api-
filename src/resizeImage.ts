import sharp from 'sharp';

/* Resize the given image and save the reise image in thumb folder.
  if any error happen during the resize process will display message Something went Wrong */
const resizeImage = (
  file: string,
  height: number,
  width: number,
  thumbFolder: string
): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    try {
      sharp(file)
        .resize(width, height)
        .toFile(thumbFolder, (err: unknown, info: unknown): void => {
          resolve(info);
        });
    } catch (error) {
      reject('Something went wrong');
    }
  });
};

export default resizeImage;
