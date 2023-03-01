const axios = require('axios');
const tflAPIKey = require('../tflAPIKey');
const tflAPIId = require('../tflAPIId');

class TFLCLient {
  constructor() {
    this.baseUrl = 'https://api.tfl.gov.uk/journey/journeyresults';
  }

  async getDirections(start, destination) {
    const response = await axios.get(
      `${this.baseUrl}/${start}/to/${destination}?accessibilityPreference=StepFreeToVehicle&app_key=${tflAPIKey}&app_id=${tflAPIId}`
    );

    const directions = {
      journeys: response.journeys,
      lines: response.lines,
    };

    return directions;
  }
  catch(error) {
    console.error(error);
  }
}

// const client = new TFLCLient();
// console.log(client.getDirections('SW99QH', 'SW99SL'));

module.exports = TFLCLient;
