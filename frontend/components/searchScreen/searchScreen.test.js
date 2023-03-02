import { render, fireEvent } from '@testing-library/react-native';
import SearchScreen from './searchScreen';

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
  })

  it('Should render button named "Find events near me!"', () => {
    const {getByText} = render(<SearchScreen/>)
    const eventsButton = getByText('Find events near me!')
    expect(eventsButton).toBeDefined()
  })
});
