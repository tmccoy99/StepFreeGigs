const axios = require('axios');
const googlePlacesClient = require('../../clients/googlePlacesClient');

jest.mock('axios');

describe('Google places Client', () => {
  it('getPlaceId returns a place id', async () => {
    const mockResponse = {
      candidates: [
        { name: 'O2 Academy Brixton', place_id: 'ChIJL1UqD2cEdkgRidF8HHIq4fQ' },
      ],
      status: 'OK',
    };
    axios.get.mockResolvedValue(mockResponse);

    const client = new googlePlacesClient();
    const placeId = await client.getPlaceId('02 academy brixton');

    expect(placeId).toEqual({
      placeId: 'ChIJL1UqD2cEdkgRidF8HHIq4fQ',
    });
  });
  it('getPlaceId returns a place id with mispelt venue + capital letters', async () => {
    const mockResponse = {
      candidates: [
        {
          name: 'O2 Academy Brixton',
          place_id: 'ChIJL1UqD2cEdkgRidF8HHIq4fQ',
        },
      ],
      status: 'OK',
    };
    axios.get.mockResolvedValue(mockResponse);

    const client = new googlePlacesClient();
    const placeId = await client.getPlaceId('02 acadEmy BrixTTon');

    expect(placeId).toEqual({
      placeId: 'ChIJL1UqD2cEdkgRidF8HHIq4fQ',
    });
  });

  it('getPlaceId throws an error', async () => {
    const mockError = new Error('Network Error');
    axios.get.mockRejectedValue(mockError);

    const client = new googlePlacesClient();

    await expect(client.getPlaceId('02 academy brixton')).rejects.toThrow(
      'Network Error'
    );
  });

  it('getVenueDetails returns a postcode and wheel chair accessible boolean is true', async () => {
    const mockResponse = {
      html_attributions: [],
      result: {
        address_components: [
          {
            long_name: '211',
            short_name: '211',
            types: ['street_number'],
          },
          {
            long_name: 'Stockwell Road',
            short_name: 'Stockwell Rd',
            types: ['route'],
          },
          {
            long_name: 'London',
            short_name: 'London',
            types: ['postal_town'],
          },
          {
            long_name: 'Greater London',
            short_name: 'Greater London',
            types: ['administrative_area_level_2', 'political'],
          },
          {
            long_name: 'England',
            short_name: 'England',
            types: ['administrative_area_level_1', 'political'],
          },
          {
            long_name: 'United Kingdom',
            short_name: 'GB',
            types: ['country', 'political'],
          },
          {
            long_name: 'SW9 9SL',
            short_name: 'SW9 9SL',
            types: ['postal_code'],
          },
        ],
        wheelchair_accessible_entrance: true,
      },
      status: 'OK',
    };
    axios.get.mockResolvedValue(mockResponse);

    const client = new googlePlacesClient();
    const venueDetails = await client.getVenueDetails('02 academy brixton');

    expect(venueDetails).toEqual({
      wheelchair_accessible_entrance: true,
      postCode: 'SW9 9SL',
    });
  });

  it('getVenueDetails throws an error', async () => {
    const mockError = new Error('Network Error');
    axios.get.mockRejectedValue(mockError);

    const client = new googlePlacesClient();

    await expect(client.getVenueDetails('02 academy brixton')).rejects.toThrow(
      'Network Error'
    );
  });
});
