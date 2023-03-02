import React, { useState } from 'react';
import { Button, Text, View, Image } from 'react-native';


export default function SearchScreen() {
  return (
    <>
      <Text>StepFreeGigs</Text>
      <Image testID="logo" source={require('../../assets/stepfreegigs-logo.png')}></Image>
    </>
  );
}
