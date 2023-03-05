import { render, waitFor } from '@testing-library/react-native';
import JourneyScreen from './journeyScreen';
import mockAxios from 'jest-mock-axios';
import { mockTFLResponse } from '../../fixtures/mockTFLResponse';
jest.mock('axios');

describe('Journey Screen component testing', () => {
  // test('it displays the title', () => {
  //   const renderedComponent = render(<JourneyScreen />);
  //   expect(renderedComponent.getByText('Directions')).toBeDefined();
  // });

  test('it renders a leg', async () => {
    mockAxios.get.mockResolvedValueOnce(mockTFLResponse);
    let renderedComponent;
    await waitFor(() => {
      renderedComponent = render(
        <JourneyScreen startLocation={'SW99QH'} endLocation={'SW99SL'} />
      );
      Promise.resolve();
    });
    expect(renderedComponent.queryByText('leg')).not.toBeNull();
  });
});
