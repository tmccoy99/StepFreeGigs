const TFLClient = require('../clients/TFLClient.js');

const JourneyController = {
  Index: async (req, res) => {
    const { start, destination } = req.query;
    if (!start || !destination) {
      res.status(400).send('Bad request');
      return;
    }
  },
};

module.exports = JourneyController;
