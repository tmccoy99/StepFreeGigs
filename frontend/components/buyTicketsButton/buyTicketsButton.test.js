import { render, fireEvent, waitFor } from '@testing-library/react-native';
import BuyTicketsButton from './buyTicketsButton';
import { Alert } from 'react-native';

describe('BuyTicketsButton component testing', () => {
  test('button renders with correct text', () => {
    const renderedButton = render(<BuyTicketsButton />);
    expect(renderedButton.queryByText('Buy Tickets')).not.toBeNull();
  });

  test('if button is given invalid url as prop, pressing button raises alert', async () => {
    const alertMock = jest.spyOn(Alert, 'alert');
    const renderedButton = render(<BuyTicketsButton url='123' />);
    await waitFor(() => {
      fireEvent.press(renderedButton.getByTestId('Buy Tickets button'));
    });
    expect(alertMock).toHaveBeenCalledWith('Cannot open URL: 123');
    alertMock.mockRestore();
  });
});
