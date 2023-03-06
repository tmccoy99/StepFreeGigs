import { render } from '@testing-library/react-native';
import BuyTicketsButton from './buyTicketsButton';

describe('BuyTicketsButton component testing', () => {
  test('button renders with correct text', () => {
    const renderedButton = render(<BuyTicketsButton />);
    expect(renderedButton.queryByText('Buy Tickets')).not.toBeNull();
  });
});
