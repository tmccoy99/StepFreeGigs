
import FlatButton from './button';
import { render, fireEvent } from '@testing-library/react-native';

describe('<FlatButton />', () => {
  it('renders the correct text', () => {
    const { getByText } = render(<FlatButton text="Press me" />);
    const buttonText = getByText('Press me');
    expect(buttonText).toBeDefined();
  });

  it('calls onPress function when button is pressed', () => {
    const onPressMock = jest.fn();
    const { getByText} = render(<FlatButton text="Press me" onPress={onPressMock} />);
    const button = getByText('Press me');
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalled();
  })
})