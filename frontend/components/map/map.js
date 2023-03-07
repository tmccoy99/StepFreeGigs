import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

export default RouteMap = ({ legs }) => {
  const [mapLayout, setMapLayout] = useState(null);

  const onMapLayout = (event) => {
    setMapLayout(event.nativeEvent.layout);
  };

  const markers = legs.map((leg, index) => (
    <Marker
      key={index}
      coordinate={{
        latitude: leg.arrivalPoint.lat,
        longitude: leg.arrivalPoint.lon,
      }}
      title={leg.arrivalPoint.commonName}
      testID='marker'
    />
  ));

  const polylines = legs.map((leg, index) => {
    const polylineCoords = JSON.parse(leg.path.lineString);
    const polylineObjects = polylineCoords.map((coord) => ({
      latitude: coord[0],
      longitude: coord[1],
    }));

    return (
      <Polyline
        key={index}
        coordinates={polylineObjects}
        strokeColor='#F00'
        strokeWidth={3}
        testID='polyline'
      />
    );
  });

  let region = null;
  if (mapLayout) {
    region = {
      latitude: legs[0].departurePoint.lat,
      longitude: legs[0].departurePoint.lon,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        onLayout={onMapLayout}
        testID='map-view'
      >
        {markers}
        {polylines}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
