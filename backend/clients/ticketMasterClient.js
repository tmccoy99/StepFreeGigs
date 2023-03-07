const axios = require('axios');
const ticketMasterAPIKey = require('../ticketMasterAPIKey');
const axiosCache = require('axios-cache-adapter');

class TicketmasterClient {
  constructor() {
    this.baseUrl = 'https://app.ticketmaster.com/discovery/v2';
    if (process.env.NODE_ENV !== 'test'){
      // Create `axios-cache-adapter` instance
      this.cache = axiosCache.setupCache({
        maxAge: 15 * 60 * 1000
      })
      // Create `axios` instance passing the newly created `cache.adapter`
      this.api = axios.create({
        adapter: this.cache.adapter
      })
    }
  }

  async getEvents(latlong, radius) {
    const response = await this.api({
      url: `${this.baseUrl}/events`,
      method: 'get',
      params: {
        apikey: ticketMasterAPIKey,
        latlong,
        radius,
        unit: 'miles',
        sort: 'date,asc',
        classificationId: 'KZFzniwnSyZfZ7v7nJ',
      }
    })

    // const response = await axios.get(`${this.baseUrl}/events`, {
    //   params: {
    //     apikey: ticketMasterAPIKey,
    //     latlong,
    //     radius,
    //     unit: 'miles',
    //     sort: 'date,asc',
    //     classificationId: 'KZFzniwnSyZfZ7v7nJ',
    //   },
    // });

    const events = response.data._embedded.events.map((event) => {
      return {
        id: event.id,
        eventName: event.name,
        url: event.url,
        date: event.dates.start.dateTime,
        priceRanges: event.priceRanges
          ? `£${event.priceRanges[0].min} - £${event.priceRanges[1].max}`
          : 'Prices not found!',
        venue: event._embedded.venues[0].name,
        venueAddress: event._embedded.venues[0].address.line1,
        venuePostcode: event._embedded.venues[0].postalCode,
        image: event.images[0].url,
        distance: `${event.distance} miles`,
      };
    });

    // Interacting with the store, see `localForage` API.
    const length = await this.cache.store.length()

    console.log('ticketMaster, Cache store length:', length)

    return events;
  }
  catch(error) {
    console.error(error);
  }
}

// THIS CAN BE DELETED - Just here to check API keys work
// const client = new TicketmasterClient();
// client
//   .getEvents('51.4919120,-0.1692555', 5)
//   .then((response) => console.log(response));

module.exports = TicketmasterClient;
