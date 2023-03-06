import React from 'react';
import { View, Text, TouchableWithoutFeedback, Alert } from 'react-native';

export default function BuyTicketsButton({ url }) {
  const handlePress = () => {
    Alert.alert(`Cannot open URL: ${url}`);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress} testID='Buy Tickets button'>
      <View>
        <Text>Buy Tickets</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
