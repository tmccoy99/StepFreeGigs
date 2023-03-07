import React, { useEffect, useState, useContext } from 'react';
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
import Leg from '../leg/leg';
import { mockTFLResponse } from '../../fixtures/mockTFLResponse';

export default function JourneyScreen({ navigation, route }) {
  const { currentLocation, endLocation } = route.params;
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
      try {
        const result = await axios.get(
          'https://step-free-gigs.onrender.com/journey',
          {
            params: {
              start: `${currentLocation.latitude},${currentLocation.longitude}`,
              destination: endLocation,
            },
          }
        );
        setDirections(result.data.directions);
      } catch (error) {
        console.error(error);
      }
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
          directions.journeys[0].legs.map((leg, index) => (
            <Leg
              key={`Journey-${index}`}
              summary={leg.instruction.summary}
              steps={leg.instruction.steps}
            />
          ))
        ) : directions &&  (
          <View>
            <Text testID='Map'>Route map:</Text>
            <RouteMap testID='Map' legs={directions.journeys[0].legs} />
          </View>
        )}
      </View>
    </>
  );
}
