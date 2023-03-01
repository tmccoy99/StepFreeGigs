const axios = require('axios');
const googleAPIKey = require('../googleAPIKey');

class googlePlacesClient {
  constructor() {
    this.baseUrlPlaceId =
      'https://maps.googleapis.com/maps/api/place/findplacefromtext';
  }

  async getPlaceId(venueName) {
    const response = await axios.get(
      `${this.baseUrlPlaceId}/json?fields=formatted_address%2Cname%2Cplace_id&inputtype=textquery&input=${venueName}&key=${googleAPIKey}`
    );

    const venuePlaceId = {
      placeId: response.candidates[0].place_id,
    };

    return venuePlaceId;
  }

  catch(error) {
    console.error(error);
  }
}

// https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=formatted_address%2Cname%2Cplace_id&inputtype=textquery&input=02 academy brixton&key=AIzaSyCWa4yzQIq6CfYifNWcWROeXlFiWp44TAo
module.exports = googlePlacesClient;
