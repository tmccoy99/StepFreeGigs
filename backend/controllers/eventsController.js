const TicketMasterClient = require('../clients/ticketMasterClient.js');

const EventsController = {
  Index: (req, res) => {
    res.status(400)
    res.send('return the events near the user')
  }
}

module.exports = EventsController;