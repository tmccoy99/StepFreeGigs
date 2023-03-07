import React, { useState } from 'react';
import { StyleSheet, Button, Text, View, Image } from 'react-native';
import axios from 'axios';
import Event from '../event/event';
import logo from '../../assets/stepfreegigs-logo.png';
const baseURL = 'http://localhost:3000';

export default function SearchScreen() {
  const [events, setEvents] = useState(null);
  const onPress = async () => {
    const eventsData = await axios.get(`${baseURL}/events`);
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
          <Event eventData={data} key={index} testID='Event' />
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
