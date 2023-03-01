import React from 'react';
import { Text, View } from 'react-native';

export default function Event({ eventName }) {
  return (
    <View>
      <Text>{eventName}</Text>
    </View>
  );
}

//Mocking the event data from the backend and then calling them in the previous function
