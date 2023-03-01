const axios = require('axios');
const googleAPIKey = require('../googleAPIKey');

class googlePlacesClient {
  constructor() {
    this.baseUrlPlaceId =
      'https://maps.googleapis.com/maps/api/place/findplacefromtext';
    this.baseUrlPlaceDetails =
      'https://maps.googleapis.com/maps/api/place/details';
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

  async getPlaceDetails(placeId) {
    const response = await axios.get(
      `${this.baseUrlPlaceDetails}/json?place_id=${placeId}&key=${googleAPIKey}&fields=wheelchair_accessible_entrance%2Caddress_component`
    );

    const venueDetails = {
      wheelchair_accessible_entrance:
        response.result.wheelchair_accessible_entrance,
      postCode:
        response.result.address_components[
          response.result.address_components.length - 1
        ].long_name,
    };

    return venueDetails;
  }

  catch(error) {
    console.error(error);
  }
}

module.exports = googlePlacesClient;
