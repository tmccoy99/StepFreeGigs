import React, { useState, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

export default RouteMap = ({ legs }) => {
  const [mapLayout, setMapLayout] = useState(null);
  const mapViewRef = useRef(null);
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
      title={leg.instruction.summary}
      pinColor='#f7a45f'
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
        strokeColor='#2196f3'
        strokeWidth={3}
        testID='polyline'
      />
    );
  });

  let region = null;
  if (mapLayout) {
    const startCoords = {
      latitude: legs[0].departurePoint.lat,
      longitude: legs[0].departurePoint.lon,
    };
    const endCoords = {
      latitude: legs[0].arrivalPoint.lat,
      longitude: legs[0].arrivalPoint.lon,
    };
    const coords = [startCoords, endCoords];

    mapViewRef.current.fitToCoordinates(coords, {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
      animated: false,
    });
  }

  return (
    <View style={styles.container}>
      <MapView
        ref={mapViewRef}
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
