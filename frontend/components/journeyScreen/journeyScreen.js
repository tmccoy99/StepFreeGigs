import React, { useEffect } from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function JourneyScreen({
  navigation,
  startLocation,
  endLocation,
}) {
  useEffect(() => {
    const getDirections = async (startLocation, endLocation) => {
      const result = await axios.get();
      return result;
    };

    startLocation && endLocation
      ? getDirections(startLocation, endLocation)
      : null;
  }, [startLocation, endLocation]);

  return (
    <>
      <Text>Directions</Text>
    </>
  );
}
