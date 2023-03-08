const TicketMasterClient = require('../clients/ticketMasterClient.js');
const GooglePlacesClient = require('../clients/googlePlacesClient.js');

const client = new TicketMasterClient();
const googleClient = new GooglePlacesClient();

const EventsController = {
  Index: async (req, res) => {
    try {
      const { latlong, radius } = req.query;
      if (!latlong || !radius) {
        res.status(400).send('Bad request');
        return;
      }
      
      const events = await client.getEvents(latlong, radius);
      const accessibleEvents = await getAccessibleEvents(events, googleClient);

      res.status(200).json({ accessibleEvents });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }
  },
};

async function getAccessibleEvents(events, googleClient) {
  const accessibleEvents = [];
  for (const event of events) {
    if (accessibleEvents.length === 5) break;

    const venueName = event.venue;
    const placeId = await googleClient.getPlaceId(venueName);
    if (!placeId) continue;

    const venueDetails = await googleClient.getVenueDetails(placeId.placeId);
    if (venueDetails && venueDetails.wheelchair_accessible_entrance) {
      accessibleEvents.push(event);
    }
  }
  return accessibleEvents;
}

module.exports = EventsController;
