import app from '../index';
import supertest from 'supertest';

describe('Testing the home page endpoint', () => {
  it('return 200', async () => {
    await supertest(app).get('/').expect(200);
  });
});

describe('Testing not found page', () => {
  it('retunr 404', async () => {
    await supertest(app).get('/test').expect(404);
  });
});
