import { render } from '@testing-library/react-native';
import JourneyScreen from './journeyScreen';

describe('Journey Screen component testing', () => {
  test('it displays the title', () => {
    const renderedComponent = render(
      <JourneyScreen />
    );
    expect(renderedComponent.getByText('Directions')).toBeDefined();
  });
})