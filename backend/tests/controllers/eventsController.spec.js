const app = require('../../app');
const request = require('supertest');
const TicketMasterClient = require('../../clients/ticketMasterClient');
const GooglePlacesClient = require('../../clients/googlePlacesClient');

jest.mock('../../clients/ticketMasterClient');
jest.mock('../../clients/googlePlacesClient');

const mockEvents = [
  {
    id: '1',
    image: 'www.imageurl.com',
    eventName: 'Event 1',
    url: 'https://www.ticketmaster.com/event1',
    date: '2023-03-01T19:00:00Z',
    distance: '1.5 miles',
    priceRanges: '£10 - £40',
    venue: 'Test Venue 1',
    venueAddress: '123 Main St',
    venuePostcode: '12345',
  },
  {
    id: '2',
    image: 'www.imageurl.com',
    eventName: 'Event 2',
    url: 'https://www.ticketmaster.com/event2',
    date: '2023-03-02T19:00:00Z',
    distance: '2.5 miles',
    priceRanges: 'Prices not found!',
    venue: 'Test Venue 2',
    venueAddress: '456 Elm St',
    venuePostcode: '67890',
  },
];

const mockVenueName = 'Test Venue 1';
const mockPlaceId = {
  placeId: 'testPlaceId',
};

const mockVenueDetails = {
  wheelchair_accessible_entrance: true,
  postCode: '12345',
};

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
    let getEventsSpy;
    let getPlaceIdSpy;
    let getVenueDetailsSpy;

    beforeEach(() => {
      getEventsSpy = jest.spyOn(TicketMasterClient.prototype, 'getEvents');
      getPlaceIdSpy = jest.spyOn(GooglePlacesClient.prototype, 'getPlaceId');
      getVenueDetailsSpy = jest.spyOn(
        GooglePlacesClient.prototype,
        'getVenueDetails'
      );
    });

    it('calls the ticketMaster client class', async () => {
      getEventsSpy.mockResolvedValueOnce(mockEvents);

      response = await request(app)
        .get('/events')
        .query({ latlong: '51.4919120,-0.1692555', radius: '5' });
      expect(getEventsSpy).toHaveBeenCalledWith('51.4919120,-0.1692555', '5');
    });

    it('calls the googleplaces client getPlaceId method', async () => {
      getPlaceIdSpy.mockResolvedValueOnce(mockPlaceId);
      getEventsSpy.mockResolvedValueOnce(mockEvents);

      response = await request(app)
        .get('/events')
        .query({ latlong: '51.4919120,-0.1692555', radius: '5' });

      expect(getPlaceIdSpy).toHaveBeenCalledWith('Test Venue 1');
    });

    it('calls the googleplaces client getVenueDetails method', async () => {
      getEventsSpy.mockResolvedValueOnce(mockEvents);
      getPlaceIdSpy.mockResolvedValueOnce(mockPlaceId);

      response = await request(app)
        .get('/events')
        .query({ latlong: '51.4919120,-0.1692555', radius: '5' });

      expect(getVenueDetailsSpy).toHaveBeenCalledWith('testPlaceId');
    });

    it('returns an array of events that are wheelchair accessible in the response body', async () => {
      getEventsSpy.mockResolvedValueOnce(mockEvents);
      getPlaceIdSpy.mockResolvedValueOnce(mockPlaceId);
      getVenueDetailsSpy.mockResolvedValueOnce(mockVenueDetails);

      const response = await request(app)
        .get('/events')
        .query({ latlong: '51.4919120,-0.1692555', radius: '5' });

      const accessibleEvents = response.body.accessibleEvents;
      expect(Array.isArray(accessibleEvents)).toBe(true);
      expect(accessibleEvents.length).toBe(1);
      expect(accessibleEvents).toEqual([mockEvents[0]]);
    });
  });
});
