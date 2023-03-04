import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

export default RouteMap = ({ legs }) => {
  const region = {
    latitude: legs[0].departurePoint.lat,
    longitude: legs[0].departurePoint.lon,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View>
      <MapView region={region} testID='map-view' />
    </View>
  );
};
