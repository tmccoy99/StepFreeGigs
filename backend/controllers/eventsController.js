const TicketMasterClient = require('../clients/ticketMasterClient.js');
const GooglePlacesClient = require('../clients/googlePlacesClient.js');

const EventsController = {
  Index: async (req, res) => {
    try {
      const { latlong, radius } = req.query;
      if (!latlong || !radius) {
        res.status(400).send('Bad request');
        return;
      }
      const client = new TicketMasterClient();
      const googleClient = new GooglePlacesClient();
      const events = await client.getEvents(latlong, radius);
      const event = events[0];
      const venueName = event.venue;

      const placeId = await googleClient.getPlaceId(venueName);
      if (placeId) {
        const venueDetails = await googleClient.getVenueDetails(
          placeId.placeId
        );
      }
      res.status(200).send('OK');
      return;
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }
  },
};

module.exports = EventsController;
