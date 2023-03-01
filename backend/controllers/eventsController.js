const TicketMasterClient = require('../clients/ticketMasterClient.js');

const EventsController = {
  Index: async (req, res) => {
    try {
      const { latlong, radius } = req.query;
      if (!latlong || !radius) {
        res.status(400).send('Bad request');
        return;
      }
      const client = new TicketMasterClient();
      const events = await client.getEvents(latlong, radius);
      res.status(200).send('OK');
      return;
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = EventsController;
