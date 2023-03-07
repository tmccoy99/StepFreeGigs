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

  it('should render a leg with no steps shown until button pressed', () => {
    const summaryProp = 'fake turn right';
    const stepProp = [
      { descriptionHeading: 'Turn right' },
      { descriptionHeading: 'Turn left' },
    ];
    renderedComponent = render(<Leg summary={summaryProp} steps={stepProp} />);
    expect(() => {
      renderedComponent.getByText('Step');
    }).toThrow(new Error('Unable to find an element with text: Step'));
  });

  it('should render a button', () => {
    renderedComponent = render(<Leg />);
    const showStepsButton = renderedComponent.getByTestId('showSteps');
    expect(showStepsButton).not.toBeNull();
  });
  it('should render the steps when button is clicked', () => {
    const summaryProp = 'fake turn right';
    const stepProp = [
      { descriptionHeading: 'Turn right' },
      { descriptionHeading: 'Turn left' },
    ];
    renderedComponent = render(<Leg summary={summaryProp} steps={stepProp} />);
    const showStepsButton = renderedComponent.getByTestId('showSteps');
    fireEvent.press(showStepsButton);
    expect(renderedComponent.getAllByText('Step').length).toBe(2);
  });

  it('when button clicked shoes the event, when clicked again it hides it', () => {
    const summaryProp = 'fake turn right';
    const stepProp = [
      { descriptionHeading: 'Turn right' },
      { descriptionHeading: 'Turn left' },
    ];
    renderedComponent = render(<Leg summary={summaryProp} steps={stepProp} />);
    const showStepsButton = renderedComponent.getByTestId('showSteps');
    fireEvent.press(showStepsButton);
    expect(renderedComponent.getAllByText('Step').length).toBe(2);
    fireEvent.press(showStepsButton);
    expect(() => {
      renderedComponent.getByText('Step');
    }).toThrow(new Error('Unable to find an element with text: Step'));
  });
});
