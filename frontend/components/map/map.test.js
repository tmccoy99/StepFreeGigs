import { render } from '@testing-library/react-native';
import RouteMap from './map';

const legs = [
  {
    departurePoint: { lat: 51.503364, lon: -0.127625, commonName: 'London' },
    arrivalPoint: { lat: 48.856614, lon: 2.3522219, commonName: 'Paris' },
    path: { lineString: '[[51.503364,-0.127625],[48.856614,2.3522219]]' },
  },
];

describe('RouteMap', () => {
  it('renders a MapView component', () => {
    const { queryByTestId } = render(<RouteMap legs={legs} />);
    const mapView = queryByTestId('map-view');
    expect(mapView).not.toBeNull();
  });
});
