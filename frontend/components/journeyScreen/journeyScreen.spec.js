import { fireEvent, render, waitFor } from '@testing-library/react-native';
import JourneyScreen from './journeyScreen';
import mockAxios from 'jest-mock-axios';
import { mockTFLResponse } from '../../fixtures/mockTFLResponse';
jest.mock('axios');

describe('Journey Screen component testing', () => {
  let renderedComponent;
  beforeEach(async () => {
    mockAxios.get.mockResolvedValueOnce(mockTFLResponse);
  });

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

  test('renders journey components initially', async () => {
    await waitFor(() => {
      renderedComponent = render(
        <JourneyScreen startLocation={'SW99QH'} endLocation={'SW99SL'} />
      );
    });
    expect(renderedComponent.queryAllByTestId('Journey').length).toBe(2);
  });
});
