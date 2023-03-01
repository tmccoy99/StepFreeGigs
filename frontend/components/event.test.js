import { render } from '@testing-library/react-native';
import Event from './event';

describe('Event component testing', () => {
  test('it renders', () => {
    const { getByText } = render(<Event />);
    const textElement = getByText('This is an event!');
    expect(textElement).toBeDefined();
  });
});
