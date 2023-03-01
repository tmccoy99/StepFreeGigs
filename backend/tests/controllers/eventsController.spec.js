const app = require('../../app')
const request = require('supertest')
const TicketMasterClient = require('../../clients/TicketMasterClient')

jest.mock('../../clients/TicketMasterClient')

describe('eventsController', () => {
  describe('without any query parameters', () => {
    it('should respond with status 400', async () => {
      response = await request(app).get('/events')
      expect(response.status).toEqual(400)
    });
  });

  describe('with a lat-long and radius', () => {
    it('calls the ticketMaster client class', async () => {
      getEventsSpy = jest.spyOn(TicketMasterClient.prototype, 'getEvents')

      
      response = await request(app)
        .get('/events')
        .send({ body: {latlong: '51.4919120,-0.1692555', radius: 5}})

      expect(getEventsSpy).toHaveBeenCalledWith('51.4919120,-0.1692555', 5)
    })
  });

});