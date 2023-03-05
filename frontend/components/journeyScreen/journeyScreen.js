import React, { useEffect, useState } from 'react';
import { Button, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';

export default function JourneyScreen({
  navigation,
  startLocation,
  endLocation,
}) {
  const [directions, setDirections] = useState(null);
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
        <Button title='Steps'></Button>
        <Button title='Map'></Button>
      </View>
      <View>
        {directions &&
          directions.journeys.map((journey, index) => (
            <Text testID='Journey' key={`Journey-${index}`}></Text>
          ))}
      </View>
    </>
  );
}
