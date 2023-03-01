import React from 'react';
import { Text, View } from 'react-native';

export default function Event({ eventData }) {
  const { eventName, priceRanges, venue } = eventData;
  return (
    <View>
      <Text>{eventName}</Text>
      <Text>{priceRanges}</Text>
      {/* <Text>{date}</Text> */}
      <Text>{venue}</Text>
    </View>
  );
}
