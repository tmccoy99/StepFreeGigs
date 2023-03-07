import { fireEvent, render, waitFor } from '@testing-library/react-native';
import JourneyScreen from './journeyScreen';
import mockAxios from 'jest-mock-axios';
import { mockTFLResponse } from '../../fixtures/mockTFLResponse';
jest.mock('axios');

describe('JourneyScreen component testing', () => {
  const mockRouteProp = {
    params: { currentLocation: 'SW99QH', endLocation: 'SW99SL' },
  };
  let renderedComponent;
  beforeEach(() => {
    mockAxios.get.mockResolvedValueOnce(mockTFLResponse);
  });

  describe('Button rendering', () => {
    test('displays Steps button', async () => {
      await waitFor(() => {
        renderedComponent = render(<JourneyScreen route={mockRouteProp} />);
      });
      expect(renderedComponent.queryByText('Steps')).not.toBeNull();
    });

    test('displays Map button', async () => {
      await waitFor(() => {
        renderedComponent = render(<JourneyScreen route={mockRouteProp} />);
      });
      expect(renderedComponent.queryByText('Map')).not.toBeNull();
    });
  });

  describe('Map component display', () => {
    test('Map component not displayed before Map button pressed', async () => {
      await waitFor(() => {
        renderedComponent = render(<JourneyScreen route={mockRouteProp} />);
      });
      expect(renderedComponent.queryByTestId('Map')).toBeNull();
    });

    test('Map component displayed after Map button pressed', async () => {
      await waitFor(() => {
        renderedComponent = render(<JourneyScreen route={mockRouteProp} />);
      });
      fireEvent.press(renderedComponent.getByTestId('Map button'));
      expect(renderedComponent.queryByTestId('Map')).not.toBeNull();
    });
  });

  describe('Leg component display', () => {
    test.only('renders leg components initially', async () => {
      await waitFor(() => {
        renderedComponent = render(<JourneyScreen route={mockRouteProp} />);
      });
      expect(renderedComponent.queryAllByText('Leg').length).toBe(3);
    });

    test('does not render leg components after map button pressed', async () => {
      await waitFor(() => {
        renderedComponent = render(<JourneyScreen route={mockRouteProp} />);
      });
      fireEvent.press(renderedComponent.getByTestId('Map button'));
      expect(renderedComponent.queryByText('Leg')).toBeNull();
    });

    test('leg components reappear once step button is pressed', async () => {
      await waitFor(() => {
        renderedComponent = render(<JourneyScreen route={mockRouteProp} />);
      });
      fireEvent.press(renderedComponent.getByTestId('Map button'));
      fireEvent.press(renderedComponent.getByTestId('Steps button'));
      expect(renderedComponent.queryAllByText('Leg').length).toBe(3);
    });
  });
});
