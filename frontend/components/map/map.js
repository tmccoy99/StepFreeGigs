import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

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

  return (
    <View>
      <MapView region={region} testID='map-view'>
        {markers}
      </MapView>
    </View>
  );
};
