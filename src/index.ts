import express from 'express';
import { Request, Response } from 'express';
import routes from './routes/api/images';
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;

app.get('/', (req: express.Request, res: express.Response): void => {
  res
    .status(200)
    .send('Your are in the home page to display image go to /api/images');
});

app.use('/api', routes);

app.get('/*', (req: express.Request, res: express.Response): void => {
  res.status(404).send('Not Found');
});

app.listen(PORT, (): void => {
  console.log(`listening on port ${PORT}`);
});

export default app;
