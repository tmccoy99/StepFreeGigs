import React, { useEffect, useState } from 'react';
import { Button, Text, View, TouchableOpacity, ScrollView } from 'react-native';
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
      const result = await axios.get('http://localhost:3000/');
      setDirections(result);
    };
    if (!directions) getDirections();
  }, []);

  return (
    <>
      <View>
        <Button title='Steps' onPress={viewSteps}></Button>
        <Button title='Map' onPress={viewMap}></Button>
      </View>
      <View>
        {displayType === 'Steps' ? (
          directions &&
          directions.journeys.map((steps, index) => (
            <Text testID='Step' key={`Journey-${index}`}></Text>
          ))
        ) : (
          <Text testID='Map' />
        )}
      </View>
    </>
  );
}
