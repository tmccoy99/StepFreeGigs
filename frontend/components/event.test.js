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

  test('it displays the distance from the user', () => {
    const renderedComponent = render(
      <Event eventData={{ distance: '1.32 miles' }} />
    );
    expect(renderedComponent.getByText('1.32 miles')).toBeDefined();
  });

  // test('it displays the Date', () => {
  //   const { getByText } = render(
  //     <Event eventData={{ date: '2023-03-01T19:00:00Z' }} />
  //   );
  //   const textElement = getByText('2023-03-01T19:00:00Z');
  //   expect(textElement).toBeDefined();
  // });

  test('Buy tickets button is not rendered unless event pressed', () => {
    const { getByText } = render(<Event eventData={{}} />);
    expect(() => {
      getByText('Buy Tickets');
    }).toThrow(new Error('Unable to find an element with text: Buy Tickets'));
  });

  test('View Route button is not rendered unless event pressed', () => {
    const { getByText } = render(<Event eventData={{}} />);
    expect(() => {
      getByText('View Route');
    }).toThrow(new Error('Unable to find an element with text: View Route'));
  });

  test('Buy tickets button is rendered after event is pressed', () => {
    const { getByText, getByTestId } = render(<Event eventData={{}} />);
    fireEvent.press(getByTestId('eventButton'));
    const getTicketsButton = getByText('Buy Tickets');
    expect(getTicketsButton).toBeDefined();
  });

  test('View Route button is rendered after event is pressed', () => {
    const { getByText, getByTestId } = render(<Event eventData={{}} />);
    fireEvent.press(getByTestId('eventButton'));
    const getTicketsButton = getByText('View Route');
    expect(getTicketsButton).toBeDefined();
  });

  test('Pressing buy tickets takes you to given url', () => {
    const mockNavigate = jest.fn();
    const { getByText, getByTestId } = render(
      <Event eventData={{ url: 'https://test.com' }} navigate={mockNavigate} />
    );
    fireEvent.press(getByTestId('eventButton'));
    fireEvent.press(getByText('Buy Tickets'));
    expect(mockNavigate).toHaveBeenCalledWith('https://test.com');
  });

  test('Pressing view route takes you to journey page', () => {
    const mockNavigate = jest.fn();
    const { getByText, getByTestId } = render(
      <Event eventData={{}} navigate={mockNavigate} />
    );
    fireEvent.press(getByTestId('eventButton'));
    fireEvent.press(getByText('View Route'));
    expect(mockNavigate).toHaveBeenCalledWith('/journey');
  });

  test('Buy tickets button is not rendered after event pressed twice', () => {
    const { getByText, getByTestId } = render(<Event eventData={{}} />);
    fireEvent.press(getByTestId('eventButton'));
    fireEvent.press(getByTestId('eventButton'));
    expect(() => {
      getByText('Buy Tickets');
    }).toThrow(new Error('Unable to find an element with text: Buy Tickets'));
  });

  test('View Route button is not rendered after event pressed twice', () => {
    const { getByText, getByTestId } = render(<Event eventData={{}} />);
    fireEvent.press(getByTestId('eventButton'));
    fireEvent.press(getByTestId('eventButton'));
    expect(() => {
      getByText('View Route');
    }).toThrow(new Error('Unable to find an element with text: View Route'));
  });
});
