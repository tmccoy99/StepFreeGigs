import { render, waitFor } from '@testing-library/react-native';
import JourneyScreen from './journeyScreen';
import mockAxios from 'jest-mock-axios';
import { mockTFLResponse } from '../../fixtures/mockTFLResponse';
jest.mock('axios');

describe('Journey Screen component testing', () => {
  test('displays Steps button', () => {
    const renderedComponent = render(<JourneyScreen />);
    expect(renderedComponent.queryByText('Steps')).not.toBeNull();
  });

  test('displays Map button', () => {
    const renderedComponent = render(<JourneyScreen />);
    expect(renderedComponent.queryByText('Map')).not.toBeNull();
  });

  test('renders journey components once data fetched ', async () => {
    mockAxios.get.mockResolvedValueOnce(mockTFLResponse);
    let renderedComponent;
    await waitFor(() => {
      renderedComponent = render(
        <JourneyScreen startLocation={'SW99QH'} endLocation={'SW99SL'} />
      );
    });
    expect(renderedComponent.queryAllByTestId('Journey').length).toBe(2);
  });
});
