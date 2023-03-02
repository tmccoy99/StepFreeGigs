import { render, fireEvent } from '@testing-library/react-native';
import SearchScreen from './searchScreen';

describe('SearchScreen component testing', () => {
  it('Before location entered, displays the name of the app', () => {
    const { getByText } = render(<SearchScreen />);
    const textElement = getByText('StepFreeGigs');
    expect(textElement).toBeDefined();
  });
});
