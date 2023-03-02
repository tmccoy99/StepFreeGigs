const app = require('../../app');
const request = require('supertest');

describe('journeyController', () => {
  describe('without any query parameters', () => {
    it('should respond with status 400', async () => {
      response = await request(app).get('/journey');
      expect(response.status).toEqual(400);
      expect(response.text).toContain('Bad request');
    });
    it('should respond with status 400 for missing start postcode', async () => {
      response = await request(app)
        .get('/journey')
        .query({ destination: 'SW1A 2AA' });

      expect(response.status).toEqual(400);
      expect(response.text).toContain('Bad request');
    });

    it('should respond with status 400 for missing destination postcode', async () => {
      response = await request(app).get('/journey').query({ start: 'NW1 5LA' });

      expect(response.status).toEqual(400);
      expect(response.text).toContain('Bad request');
    });
  });
  describe('with invalid query parameters', () => {
    it('should respond with status 400 for invalid start postcode', async () => {
      const response = await request(app)
        .get('/journey')
        .query({ start: 'invalid_postcode', destination: 'SW1A 2AA' });

      expect(response.status).toEqual(400);
      expect(response.text).toContain('Invalid postcode format');
    });

    it('should respond with status 400 for invalid destination postcode', async () => {
      const response = await request(app)
        .get('/journey')
        .query({ start: 'NW1 5LA', destination: 'invalid_postcode' });

      expect(response.status).toEqual(400);
      expect(response.text).toContain('Invalid postcode format');
    });
  });
});
