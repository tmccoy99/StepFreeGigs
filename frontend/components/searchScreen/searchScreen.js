import React, { useState } from 'react';
import { Button, Text, View, Image } from 'react-native';
//import Geolocation from '@react-native-community/geolocation';


export default function SearchScreen() {
  return (
    <>
      <Button title="Find events near me!" />
      <Image testID="logo" source={require('../../assets/stepfreegigs-logo.png')}></Image>
      <Text>StepFreeGigs</Text>
    </>
  );
}
