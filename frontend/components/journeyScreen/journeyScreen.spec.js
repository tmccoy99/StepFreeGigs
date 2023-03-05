import { fireEvent, render, waitFor } from '@testing-library/react-native';
import JourneyScreen from './journeyScreen';
import mockAxios from 'jest-mock-axios';
import { mockTFLResponse } from '../../fixtures/mockTFLResponse';
jest.mock('axios');

describe('JourneyScreen component testing', () => {
  let renderedComponent;
  beforeEach(() => {
    mockAxios.get.mockResolvedValueOnce(mockTFLResponse);
  });

  describe('Button rendering', () => {
    test('displays Steps button', async () => {
      await waitFor(() => {
        renderedComponent = render(
          <JourneyScreen startLocation={'SW99QH'} endLocation={'SW99SL'} />
        );
      });
      expect(renderedComponent.queryByText('Steps')).not.toBeNull();
    });

    test('displays Map button', async () => {
      await waitFor(() => {
        renderedComponent = render(
          <JourneyScreen startLocation={'SW99QH'} endLocation={'SW99SL'} />
        );
      });
      expect(renderedComponent.queryByText('Map')).not.toBeNull();
    });
  });

  describe('Map component display', () => {
    test('Map component not displayed before Map button pressed', async () => {
      await waitFor(() => {
        renderedComponent = render(
          <JourneyScreen startLocation={'SW99QH'} endLocation={'SW99SL'} />
        );
      });
      expect(renderedComponent.queryByTestId('Map')).toBeNull();
    });

    test('Map component displayed after Map button pressed', async () => {
      await waitFor(() => {
        renderedComponent = render(
          <JourneyScreen startLocation={'SW99QH'} endLocation={'SW99SL'} />
        );
      });
      fireEvent.press(renderedComponent.getByText('Map'));
      expect(renderedComponent.queryByTestId('Map')).not.toBeNull();
    });
  });

  describe('Journey component display', () => {
    test('renders step components initially', async () => {
      await waitFor(() => {
        renderedComponent = render(
          <JourneyScreen startLocation={'SW99QH'} endLocation={'SW99SL'} />
        );
      });
      expect(renderedComponent.queryAllByTestId('Step').length).toBe(2);
    });
  });
});