import axios from 'axios';
import * as dotenv from 'dotenv';
const tflAPIKey = require('../tflAPIKey');
const tflAPIId = require('../tflAPIId');

class TFLCLient {
  constructor() {
    this.baseUrl = 'https://api.tfl.gov.uk/journey/journeyresults';
  }

  async getDirections(start, destination) {
    const response = await axios.get(
      `${this.baseUrl}/${start}/to/${destination}?accessibilityPreference=StepFreeToVehicle&app_key=${tflAPIKey}&app_id=${tflAPIId}`
      //   `${this.baseUrl}/${start}/to/${destination}?accessibilityPreference=StepFreeToVehicle&app_key=3adf942d451a48d08cae4f7113fa1a9a&app_id=3a4a22c930c04133b895fcf72627f336`
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

export default TFLCLient;
