import React, { useEffect, useState } from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function JourneyScreen({
  navigation,
  startLocation,
  endLocation,
}) {
  const [directions, setDirections] = useState();

  useEffect(() => {
    const getDirections = async (startLocation, endLocation) => {
      const result = await axios.get('localhost:3000/');
      setDirections(result);
      console.log(result)
      console.log(directions);
    };

    startLocation && 
    endLocation || 
    getDirections(startLocation, endLocation)

  }, [startLocation, endLocation]);

  return (
    <>
      {/* <Text>Directions</Text>
      { directions || 

       directions.journeys.map(journey => {
         journey.legs.map((leg) => {
          })}
       )} */}
    </>
  );
}
