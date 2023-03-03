import React, { useState } from 'react';
import { Button, Text, View, Image } from 'react-native';
import axios from 'axios';
const baseURL = 'http://localhost:3000';

export default function SearchScreen() {
  onPress = () => {
    axios.get(`${baseURL}/events`);
    setEventsDisplayed(!eventsDisplayed);
  };

  const [eventsDisplayed, setEventsDisplayed] = useState(false);
  return (
    <>
      <Button onPress={onPress} title='Find events near me!' />
      {!eventsDisplayed && (
        <>
          <Text>StepFreeGigs</Text>
          <Image
            testID='logo'
            source={require('../../assets/stepfreegigs-logo.png')}
          ></Image>
        </>
      )}
    </>
  );
}
