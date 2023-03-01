import { render, fireEvent } from '@testing-library/react-native';
import Event from './event';

describe('Event component testing', () => {
  test('it displays the name of the event', () => {
    const { getByText } = render(
      <Event eventData={{ eventName: 'Dirty DnB Fridays!' }} />
    );
    const textElement = getByText('Dirty DnB Fridays!');
    expect(textElement).toBeDefined();
  });

  test('it displays the Price Range if present', () => {
    const { getByText } = render(
      <Event eventData={{ priceRanges: '£22 - £30 ' }} />
    );
    const textElement = getByText('£22 - £30 ');
    expect(textElement).toBeDefined();
  });

  test('it displays the venue', () => {
    const { getByText } = render(<Event eventData={{ venue: 'The Garage' }} />);
    const textElement = getByText('The Garage');
    expect(textElement).toBeDefined();
  });

  // test('it displays the Date', () => {
  //   const { getByText } = render(
  //     <Event eventData={{ date: '2023-03-01T19:00:00Z' }} />
  //   );
  //   const textElement = getByText('2023-03-01T19:00:00Z');
  //   expect(textElement).toBeDefined();
  // });

  test('Buy tickets button is rendered', () => {
    const { getByText } = render(<Event eventData={{}} />);
    const getTicketsButton = getByText('Buy Tickets');
    expect(getTicketsButton).toBeDefined();
  });

  test('Pressing buy tickets takes you to given url', () => {
    const mockNavigate = jest.fn();
    const { getByText } = render(
      <Event eventData={{ url: 'https://test.com' }} navigate={mockNavigate} />
    );
    fireEvent.press(getByText('Buy Tickets'));
    expect(mockNavigate).toHaveBeenCalledWith('https://test.com');
  });
});
