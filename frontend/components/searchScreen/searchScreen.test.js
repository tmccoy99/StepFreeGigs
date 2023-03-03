import { render, fireEvent } from '@testing-library/react-native';
import SearchScreen from './searchScreen';
import axios from 'axios';
jest.mock('axios');
const baseURL = process.env.NATIVE_APP_API_URL;

describe('SearchScreen component testing', () => {
  it('Before location entered, displays the name of the app', () => {
    const { getByText } = render(<SearchScreen />);
    const textElement = getByText('StepFreeGigs');
    expect(textElement).toBeDefined();
  });

  it('Before location entered, should display the logo image', () => {
    const { getByTestId } = render(<SearchScreen />);
    const logoElement = getByTestId('logo');
    expect(logoElement).toBeDefined();
  });

  it('Should render button named "Find events near me!"', () => {
    const { getByText } = render(<SearchScreen />);
    const eventsButton = getByText('Find events near me!');
    expect(eventsButton).toBeDefined();
  });

  it('Pressing events near me button removes the name and image', () => {
    const { queryByText, queryByTestId } = render(<SearchScreen />);
    axios.get.mockResolvedValueOnce({ fakeKey: 'fakeResponse' });
    fireEvent.press(queryByText('Find events near me!'));
    expect(queryByText('StepFreeGigs')).toBeNull();
    expect(queryByTestId('logo')).toBeNull();
  });
});
