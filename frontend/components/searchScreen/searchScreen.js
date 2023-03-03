import React, { useState } from 'react';
import { Button, Text, View, Image } from 'react-native';
import Event from '../event/event'
//import Geolocation from '@react-native-community/geolocation';

//Geolocation.setRNConfiguration(config);

const baseURL = process.env.NATIVE_APP_API_URL


export default function SearchScreen() {

  //Geolocation.getCurrentPosition((info) => console.log(info));


  onPress = () => {
    fetch(`${baseURL}/events`)
      .then(response => response.json())
      .then(eventsData => eventsData.map(data => <Event eventData={data} />))
      .catch(error => console.error(error));
  }

  return (
    <>
      <Button onPress={onPress} title="Find events near me!" />
      <Image testID="logo" source={require('../../assets/stepfreegigs-logo.png')}></Image>
      <Text>StepFreeGigs</Text>
    </>
  );
}
