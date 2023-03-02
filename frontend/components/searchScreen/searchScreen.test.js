import { render, fireEvent } from '@testing-library/react-native';
import SearchScreen from './searchScreen';
import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()
const baseURL = process.env.NATIVE_APP_API_URL

describe('SearchScreen component testing', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('Before location entered, displays the name of the app', () => {
    const { getByText } = render(<SearchScreen />);
    const textElement = getByText('StepFreeGigs');
    expect(textElement).toBeDefined();
  });

  it('Before location entered, should display the logo image', () => {
    const { getByTestId } = render(<SearchScreen />);
    const logoElement = getByTestId('logo');
    expect(logoElement).toBeDefined();
  })

  it('Should render button named "Find events near me!"', () => {
    const { getByText } = render(<SearchScreen/>)
    const eventsButton = getByText('Find events near me!')
    expect(eventsButton).toBeDefined()
  })

  it('Pressing events button should make a GET request to the /events', () => {
    const { getByText } = render(<SearchScreen/>)
    fireEvent.press(getByText('Find events near me!'))
    expect(fetch.mock.calls[0][0]).toBe(`${baseURL}/events`)
  })
});
