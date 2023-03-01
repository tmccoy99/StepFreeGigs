const app = require('../../app')
const request = require('supertest')

describe('eventsController', () => {
  describe('without any query parameters', () => {
    it('should respond with status 400', async () => {
      response = await request(app).get('/events')
      expect(response.status).toEqual(400)
    });
  });
});