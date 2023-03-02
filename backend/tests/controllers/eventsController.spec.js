const app = require('../../app');
const request = require('supertest');
const TicketMasterClient = require('../../clients/ticketMasterClient');

jest.mock('../../clients/ticketMasterClient');

describe('eventsController', () => {
  describe('without any query parameters', () => {
    it('should respond with status 400', async () => {
      response = await request(app).get('/events');
      expect(response.status).toEqual(400);
    });
  });

  describe('with invalid query parameters', () => {
    it('returns status 400', async () => {
      const response = await request(app)
        .get('/events')
        .query({ latlong: '', radius: '5' });

      expect(response.status).toEqual(400);
    });
  });

  describe('with a lat-long and radius', () => {
    it('calls the ticketMaster client class', async () => {
      getEventsSpy = jest.spyOn(TicketMasterClient.prototype, 'getEvents');

      response = await request(app)
        .get('/events')
        .query({ latlong: '51.4919120,-0.1692555', radius: '5' });

      expect(getEventsSpy).toHaveBeenCalledWith('51.4919120,-0.1692555', '5');
    });
  });
});
