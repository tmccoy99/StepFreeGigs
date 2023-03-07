import { fireEvent, render, waitFor } from '@testing-library/react-native';
import Leg from './leg';

describe('leg component', () => {
  it('should render a leg', () => {
    renderedComponent = render(<Leg />);
    expect(renderedComponent.getByText('Leg')).not.toBeNull;
  });
  it('should render a leg with a summary prop', () => {
    const summaryProp = 'fake turn right';
    renderedComponent = render(<Leg summary={summaryProp} />);
    expect(renderedComponent.getByText('Leg')).not.toBeNull;
    expect(renderedComponent.getByText('fake turn right')).not.toBeNull;
  });
});
