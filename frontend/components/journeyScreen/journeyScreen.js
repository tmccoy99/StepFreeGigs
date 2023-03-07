import React, { useEffect, useState } from 'react';
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import RouteMap from '../map/map';
import axios from 'axios';

export default function JourneyScreen({
  navigation,
  startLocation,
  endLocation,
}) {
  const [directions, setDirections] = useState(null);
  const [displayType, setDisplayType] = useState('Steps');
  const viewMap = () => {
    setDisplayType('Map');
  };
  const viewSteps = () => {
    setDisplayType('Steps');
  };

  useEffect(() => {
    const getDirections = async () => {
      const result = await axios.get(
        'https://step-free-gigs.onrender.com/journey',
        {
          params: { start: startLocation, destination: endLocation },
        }
      );
      setDirections(result.data);
    };
    if (!directions) getDirections();
  }, []);

  return (
    <>
      <View>
        <Button
          title='Steps'
          onPress={viewSteps}
          testID='Steps button'
        ></Button>
        <Button title='Map' onPress={viewMap} testID='Map button'></Button>
      </View>
      <View>
        {displayType === 'Steps' ? (
          directions &&
          directions.journeys.map((steps, index) => (
            <Text testID='Step' key={`Journey-${index}`}></Text>
          ))
        ) : (
          <View>
            <Text testID='Map'>Route map:</Text>
            <RouteMap testID='Map' legs={directions.journeys[0].legs} />
          </View>
        )}
      </View>
    </>
  );
}
