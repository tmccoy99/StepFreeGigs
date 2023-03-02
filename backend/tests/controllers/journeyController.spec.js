const app = require('../../app');
const request = require('supertest');
const TFLClient = require('../../clients/TFLClient');

jest.mock('../../clients/TFLClient');

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

  describe('with valid query parameters', () => {
    let getDirectionsSpy;

    beforeEach(() => {
      getDirectionsSpy = jest.spyOn(TFLClient.prototype, 'getDirections');
    });

    it('should call the TFL client with the correct parameters', async () => {
      const start = 'NW1 5LA';
      const destination = 'SW1A 2AA';
      const response = await request(app)
        .get('/journey')
        .query({ start, destination });

      expect(getDirectionsSpy).toHaveBeenCalledWith(start, destination);
      expect(response.status).toEqual(200);
    });

    it('should return an error message if TFL API request fails', async () => {
      getDirectionsSpy.mockRejectedValueOnce('API error');

      const start = 'NW1 5LA';
      const destination = 'SW1A 2AA';

      const response = await request(app)
        .get('/journey')
        .query({ start, destination });

      expect(getDirectionsSpy).toHaveBeenCalledWith(start, destination);
      expect(response.status).toEqual(500);
      expect(response.text).toContain('Internal server error');
    });
  });
});
