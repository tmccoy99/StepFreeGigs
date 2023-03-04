import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

export default RouteMap = ({ legs }) => {
  const region = {
    latitude: legs[0].departurePoint.lat,
    longitude: legs[0].departurePoint.lon,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
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

  const polylines = legs.map((leg, index) => (
    <Polyline
      key={index}
      coordinates={JSON.parse(leg.path.lineString)}
      strokeColor='#F00'
      strokeWidth={3}
      testID='polyline'
    />
  ));

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region} testID='map-view'>
        {markers}
        {polylines}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
