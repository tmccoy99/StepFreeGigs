import React, { useState } from 'react';
import { StyleSheet, Button, Text, View, Image } from 'react-native';
import axios from 'axios';
import Event from '../event/event';
import logo from '../../assets/stepfreegigs-logo.png';

export default function SearchScreen({ navigation, route }) {
  const { currentLocation } = route.params;
  const [events, setEvents] = useState(null);
  const onPress = async () => {
    try {
      console.log(currentLocation);
      const eventsData = await axios.get(
        `https://step-free-gigs.onrender.com/events`,
        {
          params: {
            latlong: `${currentLocation?.latitude},${currentLocation?.longitude}`,
            radius: '5',
          },
        }
      );
      setEvents(eventsData.data.accessibleEvents);
    } catch (error) {
      console.log('Error retrieving events:', error);
    }
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
          <Image testID='logo' source={logo} style={styles.logo} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 400,
    height: 400,
  },
});
