import { render, fireEvent, waitFor } from '@testing-library/react-native';
import BuyTicketsButton from './buyTicketsButton';
import { Alert, Linking } from 'react-native';
import { Link } from '@react-navigation/native';

describe('BuyTicketsButton component testing', () => {
  test('button renders with correct text', () => {
    const renderedButton = render(<BuyTicketsButton />);
    expect(renderedButton.queryByText('Buy Tickets')).not.toBeNull();
  });

  test('if button is given invalid url as prop, pressing button raises alert', async () => {
    const alertMock = jest.spyOn(Alert, 'alert');
    const canOpenLinkMock = jest.spyOn(Linking, 'canOpenURL');
    canOpenLinkMock.mockResolvedValueOnce(false);
    const renderedButton = render(<BuyTicketsButton url='123' />);
    await waitFor(() => {
      fireEvent.press(renderedButton.getByTestId('Buy Tickets button'));
    });
    expect(alertMock).toHaveBeenCalledWith('Cannot open URL: 123');
    alertMock.mockClear();
    canOpenLinkMock.mockClear();
  });

  test('if button is given valid url as a prop, pressing button navigates to url', async () => {
    const openLinkMock = jest.spyOn(Linking, 'openURL');
    const renderedButton = render(
      <BuyTicketsButton url='https://www.ticketmaster.com/event1' />
    );
    await waitFor(() => {
      fireEvent.press(renderedButton.getByTestId('Buy Tickets button'));
    });
    expect(openLinkMock).toHaveBeenCalledWith(
      'https://www.ticketmaster.com/event1'
    );
    openLinkMock.mockClear();
  });
});
