import { render, fireEvent, waitFor } from '@testing-library/react-native';
import BuyTicketsButton from './buyTicketsButton';
import 'react-native';

jest.mock('react-native', () => ({
  ...jest.requireActual('react-native'),
  Alert: {
    alert: jest.fn(),
  },
}));

describe('BuyTicketsButton component testing', () => {
  test('button renders with correct text', () => {
    const renderedButton = render(<BuyTicketsButton />);
    expect(renderedButton.queryByText('Buy Tickets')).not.toBeNull();
  });

  test('if button is given invalid url as prop, pressing button raises alert', async () => {
    const renderedButton = render(<BuyTicketsButton url='123' />);
    await waitFor(() => {
      fireEvent.press(renderedButton.getByTestId('Buy Tickets button'));
    });
    expect(Alert.alert).toHaveBeenCalledWith('Cannot open URL: 123');
  });
});
