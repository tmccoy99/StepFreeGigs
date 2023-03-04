const axios = require('axios');
const TFLClient = require('../../clients/TFLClient');
const { mockResponse, mockOutput } = require('../../fixtures/mockTFLdata.js');

jest.mock('axios');

describe('TFLCLient', () => {
  it('returns an object containing directions and disruptions', async () => {
    axios.get.mockResolvedValue(mockResponse);

    const client = new TFLClient();
    const directions = await client.getDirections('SW99QH', 'SW99SL');

    expect(directions).toEqual(mockOutput);
  });

  it('throws an error', async () => {
    const mockError = new Error('Network Error');
    axios.get.mockRejectedValue(mockError);

    const client = new TFLClient();

    await expect(client.getDirections('SW99QH', 'SW99SL')).rejects.toThrow(
      'Network Error'
    );
  });
});
