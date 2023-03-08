import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Alert,
  Linking,
} from 'react-native';

export default function BuyTicketsButton({ url }) {
  const handlePress = async () => {
    const validURL = await Linking.canOpenURL(url);
    validURL
      ? await Linking.openURL(url)
      : Alert.alert(`Cannot open URL: ${url}`);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress} testID='Buy Tickets button'>
      <View>
        <Text>Buy Tickets</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
