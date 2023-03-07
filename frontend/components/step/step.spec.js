import Step from './step.js';
import { render } from '@testing-library/react-native';

describe('step component', () => {
  it('should render a step', () => {
    stepProp = {
      descriptionHeading: 'Turn right',
      description: 'along this road',
    };
    renderedComponent = render(<Step step={stepProp} />);
    expect(renderedComponent.getByText('Step')).not.toBeNull;
    expect(renderedComponent.getByText('Turn right')).not.toBeNull;
    expect(renderedComponent.getByText('along this road')).not.toBeNull;
  });
});
