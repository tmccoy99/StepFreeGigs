import { render } from '@testing-library/react-native';
import Event from './event';

describe('Event component testing', () => {
  test('it displays the name of the event', () => {
    const { getByText } = render(<Event eventName='Dirty DnB Fridays!' />);
    const textElement = getByText('Dirty DnB Fridays!');
    expect(textElement).toBeDefined();
  });
});
