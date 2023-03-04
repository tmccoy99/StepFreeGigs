import { render } from '@testing-library/react-native';
import RouteMap from './map';

const mockLegs = require('../../fixtures/mockJourneyLegs');

describe('RouteMap', () => {
  it('renders a MapView component', () => {
    const { queryByTestId } = render(<RouteMap legs={mockLegs} />);
    const mapView = queryByTestId('map-view');
    expect(mapView).not.toBeNull();
  });

  it('renders Markers for each leg', () => {
    const { getAllByTestId } = render(<RouteMap legs={mockLegs} />);
    const markers = getAllByTestId('marker');
    expect(markers).toHaveLength(mockLegs.length);
  });

  it('renders Polylines for each leg', () => {
    const { getAllByTestId } = render(<RouteMap legs={mockLegs} />);
    const polylines = getAllByTestId('polyline');
    expect(polylines).toHaveLength(mockLegs.length);
  });
});
