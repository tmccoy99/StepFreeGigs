const axios = require('axios');
const TicketmasterClient = require('../../clients/ticketMasterClient');

jest.mock('axios');

describe('TicketmasterClient', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should return a list of events', async () => {
    const mockResponse = {
      data: {
        _embedded: {
          events: [
            {
              id: '1',
              name: 'Event 1',
              url: 'https://www.ticketmaster.com/event1',
              dates: {
                start: {
                  dateTime: '2023-03-01T19:00:00Z',
                },
              },
              priceRanges: [
                {
                  min: 10,
                  max: 20,
                },
                {
                  min: 30,
                  max: 40,
                },
              ],
              _embedded: {
                venues: [
                  {
                    name: 'Venue 1',
                    address: {
                      line1: '123 Main St',
                    },
                    postalCode: '12345',
                  },
                ],
              },
            },
            {
              id: '2',
              name: 'Event 2',
              url: 'https://www.ticketmaster.com/event2',
              dates: {
                start: {
                  dateTime: '2023-03-02T19:00:00Z',
                },
              },
              priceRanges: null,
              _embedded: {
                venues: [
                  {
                    name: 'Venue 2',
                    address: {
                      line1: '456 Elm St',
                    },
                    postalCode: '67890',
                  },
                ],
              },
            },
          ],
        },
      },
    };

    axios.get.mockResolvedValue(mockResponse);

    const client = new TicketmasterClient();
    const events = await client.getEvents('51.4919120,-0.1692555', 5);

    expect(events).toEqual([
      {
        id: '1',
        eventName: 'Event 1',
        url: 'https://www.ticketmaster.com/event1',
        date: '2023-03-01T19:00:00Z',
        priceRanges: '£10 - £40',
        venue: 'Venue 1',
        venueAddress: '123 Main St',
        venuePostcode: '12345',
      },
      {
        id: '2',
        eventName: 'Event 2',
        url: 'https://www.ticketmaster.com/event2',
        date: '2023-03-02T19:00:00Z',
        priceRanges: 'Prices not found!',
        venue: 'Venue 2',
        venueAddress: '456 Elm St',
        venuePostcode: '67890',
      },
    ]);
  });

  it('should handle errors', async () => {
    const mockError = new Error('Network Error');
    axios.get.mockRejectedValue(mockError);

    const client = new TicketmasterClient();

    await expect(client.getEvents('51.4919120,-0.1692555', 5)).rejects.toThrow(
      'Network Error'
    );
  });
});
