import { render, fireEvent, act, waitFor } from '@testing-library/react-native';
import SearchScreen from './searchScreen';
import axios from 'axios';
import fakeEvents from '../../fixtures/mockEvents';
const currentLocation = {};

jest.mock('axios');
const baseURL = process.env.NATIVE_APP_API_URL;
const mockRoute = {
  params: {
    currentLocation: {
      latitude: 51.537187,
      longitude: 0.050094,
    },
  },
};
describe('SearchScreen component testing', () => {
  it('Before location entered, should display the logo image', () => {
    const { getByTestId } = render(<SearchScreen route={mockRoute} />);
    const logoElement = getByTestId('logo');
    expect(logoElement).toBeDefined();
  });

  it('Should render button named "Find events near me!"', () => {
    const { getByText } = render(<SearchScreen route={mockRoute} />);
    const eventsButton = getByText('Find events near me!');
    expect(eventsButton).toBeDefined();
  });

  it('Pressing events near me button removes the name and image', async () => {
    const { queryByText, queryByTestId } = render(
      <SearchScreen route={mockRoute} />
    );
    axios.get.mockResolvedValueOnce(fakeEvents);
    await waitFor(() => {
      fireEvent.press(queryByText('Find events near me!'));
    });
    expect(queryByTestId('logo')).toBeNull();
  });

  it('Pressing events near me button renders five event components', async () => {
    const { queryByText } = render(<SearchScreen route={mockRoute} />);
    axios.get.mockResolvedValueOnce(fakeEvents);
    await waitFor(() => {
      fireEvent.press(queryByText('Find events near me!'));
    });
    for (i = 1; i <= 5; i++) {
      expect(queryByText(`Event ${i}`)).not.toBeNull();
    }
  });

  it('does does not render the clear button when no events have been loaded', () => {
    const { queryByTestId } = render(<SearchScreen route={mockRoute} />);
    expect(queryByTestId('clearButton')).toBeNull();
  })

  it('renders the clear button when the events have been loaded', async () => {
    const { queryByTestId, queryByText } = render(<SearchScreen route={mockRoute} />);
    axios.get.mockResolvedValueOnce(fakeEvents);
    await waitFor(() => {
      fireEvent.press(queryByText('Find events near me!'));
    });
    expect(queryByTestId('clearButton')).toBeDefined();
  })
});
