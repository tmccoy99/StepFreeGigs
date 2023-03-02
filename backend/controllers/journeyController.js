const TFLClient = require('../clients/TFLClient.js');

const JourneyController = {
  Index: async (req, res) => {
    try {
      const postcodeRegex = /^[A-Za-z]{1,2}\d{1,2}[A-Za-z]?\s?\d[A-Za-z]{2}$/;
      const { start, destination } = req.query;
      if (!start || !destination) {
        res.status(400).send('Bad request');
        return;
      }
      const tflClient = new TFLClient();
      const directions = await tflClient.getDirections(start, destination);

      res.status(200).json({ directions });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }
  },
};

module.exports = JourneyController;
