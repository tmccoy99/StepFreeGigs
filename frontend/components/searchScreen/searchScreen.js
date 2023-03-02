import React, { useState } from 'react';
import { Button, Text, View, Image } from 'react-native';
// import Geolocation from '@react-native-community/geolocation';
const baseURL = process.env.NATIVE_APP_API_URL


export default function SearchScreen() {

  onPress = () => {
    fetch(`${baseURL}/events`)
  }

  return (
    <>
      <Button onPress={onPress} title="Find events near me!" />
      <Image testID="logo" source={require('../../assets/stepfreegigs-logo.png')}></Image>
      <Text>StepFreeGigs</Text>
    </>
  );
}
