const TFLClient = require('../clients/TFLClient.js');

const JourneyController = {
  Index: async (req, res) => {
    const { start, destination } = req.query;
    const postcodeRegex = /^[A-Za-z]{1,2}\d{1,2}[A-Za-z]?\s?\d[A-Za-z]{2}$/;
    if (!start || !destination) {
      res.status(400).send('Bad request');
      return;
    } else if (!postcodeRegex.test(start) || !postcodeRegex.test(destination)) {
      res.status(400).send('Invalid postcode format');
      return;
    }
  },
};

module.exports = JourneyController;
