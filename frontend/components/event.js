import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function Event({ eventData, navigate }) {
  const { eventName, priceRanges, venue, url, distance } = eventData;
  const [isExpanded, setExpanded] = useState(false);

  return (
    <View>
      <Text>{ eventName }</Text>
      <Text>{ priceRanges }</Text>
      {/* <Text>{date}</Text> */}
      <Text>{ distance }</Text>
      <Text>{ venue }</Text>
      {isExpanded && (
        <>
          <Button
            title='Buy Tickets'
            onPress={() => {
              navigate(url);
            }}
          />
          <Button
            title='View Route'
            onPress={() => {
              navigate(url);
            }}
          />{' '}
        </>
      )}
    </View>
  );
}
