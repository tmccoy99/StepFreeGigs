import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Event({ eventData, navigate }) {
  const { eventName, priceRanges, venue, url } = eventData;
  return (
    <View>
      <Text>{eventName}</Text>
      <Text>{priceRanges}</Text>
      {/* <Text>{date}</Text> */}
      <Text>{venue}</Text>
      <Button
        title='Buy Tickets'
        onPress={() => {
          navigate(url);
        }}
      />
    </View>
  );
}
