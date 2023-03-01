const TicketMasterClient = require('../clients/ticketMasterClient.js');

const EventsController = {
  Index: async (req, res) => {
    const client = new TicketMasterClient
    const events = await client.getEvents(req.body.latlong, req.body.radius)
    res.status(400)
    res.send('return the events near the user')
  }
}

module.exports = EventsController;