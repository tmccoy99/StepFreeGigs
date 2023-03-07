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
import Leg from '../leg/leg';
import { mockTFLResponse } from '../../fixtures/mockTFLResponse';

export default function JourneyScreen({
  navigation,
  startLocation,
  endLocation,
}) {
  const [directions, setDirections] = useState(mockTFLResponse);
  const [displayType, setDisplayType] = useState('Steps');
  const viewMap = () => {
    setDisplayType('Map');
  };
  const viewSteps = () => {
    setDisplayType('Steps');
  };

  useEffect(() => {
    const getDirections = async () => {
      const result = await axios.get('http://localhost:3000/journey', {
        params: { start: startLocation, destination: endLocation },
      });
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
          directions.journeys[0].legs.map((leg, index) => (
            <Leg
              key={`Journey-${index}`}
              summary={leg.instruction.summary}
              steps={leg.instruction.steps}
            />
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
