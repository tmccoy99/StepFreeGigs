import React, { useState, useContext } from 'react';
import { Button, Text, View, Image } from 'react-native';
import axios from 'axios';
import Event from '../event/event';
import logo from '../../assets/stepfreegigs-logo.png';
const baseURL = 'http://localhost:3000';

export default function SearchScreen({ navigation, currentLocation }) {
  const [events, setEvents] = useState(null);
  const onPress = async () => {
    const eventsData = await axios.get(`http://localhost:3000/events`, {
      params: {
        latlong: `${currentLocation.latitude},${currentLocation.longitude}`,
        radius: '5',
      },
    });
    setEvents(eventsData.accessibleEvents);
  };

  return (
    <View testID='SearchScreen'>
      <Button
        onPress={onPress}
        title='Find events near me!'
        testID='search-button'
      />
      {events &&
        events.map((data, index) => (
          <Event
            eventData={data}
            key={index}
            navigation={navigation}
            testID='Event'
          />
        ))}
      {!events && (
        <>
          <Text>StepFreeGigs</Text>
          <Image testID='logo' source={logo} />
        </>
      )}
    </View>
  );
}
