import React, { useEffect, useState } from 'react';
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
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

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

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
          <View style={styles.map}>
            <Text testID='Map'>Route map:</Text>
            <RouteMap legs={directions.journeys[0].legs} />
          </View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
});
