import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SearchScreen from './searchScreen';
import { enableFetchMocks } from 'jest-fetch-mock'
import { fakeEvents } from '../../fixfeatures/fakeEvent'
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

  it.only('Pressing events button should make a GET request to the /events', async () => {
    const { getByText } = render(<SearchScreen/>)
    fetch.mockResolvedValueOnce(JSON.stringify([{venue: 'the pits'}]))
    fireEvent.press(getByText('Find events near me!'))
    await waitFor(() => { expect(fetch.mock.calls[0][0]).toBe(`${baseURL}/events`)})
  })

  it('Once events are returned, 5 Event components with correct information are rendered', () => {
    const searchScreen = render(<SearchScreen/>)
    fetch.mockResolvedValueOnce(fakeEvents)
    fireEvent.press(searchScreen.getByText('Find events near me!'))
    const eventComponents = searchScreen.getAllByTestId('Event')
    expect(eventComponents.length).toBe(5)
  })
});
