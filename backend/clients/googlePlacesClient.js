const axios = require('axios');
const dotenv = require('dotenv');
// const googleAPIKey = require('../googleAPIKey');

class GooglePlacesClient {
  constructor() {
    this.baseUrlPlaceId =
      'https://maps.googleapis.com/maps/api/place/findplacefromtext';
    this.baseUrlPlaceDetails =
      'https://maps.googleapis.com/maps/api/place/details';
  }

  async getPlaceId(venueName) {
    const response = await axios.get(
      `${this.baseUrlPlaceId}/json?fields=formatted_address%2Cname%2Cplace_id&inputtype=textquery&input=${venueName}&key=${process.env.GOOGLE_API_KEY}`
    );

    const venuePlaceId = {
      placeId: response.data.candidates[0].place_id,
    };

    return venuePlaceId;
  }

  async getVenueDetails(placeId) {
    const response = await axios.get(
      `${this.baseUrlPlaceDetails}/json?place_id=${placeId}&key=${process.env.GOOGLE_API_KEY}&fields=wheelchair_accessible_entrance%2Caddress_component`
    );

    const venueDetails = {
      wheelchair_accessible_entrance:
        response.data.result.wheelchair_accessible_entrance,
      postCode:
        response.data.result.address_components[
          response.data.result.address_components.length - 1
        ].long_name,
    };

    return venueDetails;
  }

  catch(error) {
    console.error(error);
  }
}

// const client = new GooglePlacesClient();
// client
//   .getPlaceId('O2 Brixton Academy')
//   .then((response) => client.getVenueDetails(response.placeId))
//   .then((response) => console.log(response));

module.exports = GooglePlacesClient;
