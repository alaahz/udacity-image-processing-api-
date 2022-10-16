import resizeImage from '../resizeImage';
import path from 'path';

const file = path.join(process.cwd(), 'images', 'fall', 'fjord.jpg');
const height = 700;
const width = 700;
const thumbFolder = path.join(
  process.cwd(),
  'images',
  'thumbnail',
  'fjord.jpg'
);

describe('Testing resize the image', () => {
  it('return the image info after resize the image', async () => {
    expect(async () => {
      await resizeImage(file, height, width, thumbFolder);
    }).not.toThrow();
  });
});
