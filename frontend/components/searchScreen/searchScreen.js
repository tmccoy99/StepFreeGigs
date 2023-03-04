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
    setEvents(eventsData);
  };
  
  const testData = {
    id: '1',
    image: 'www.imageurl.com',
    eventName: 'Event 1',
    url: 'https://www.ticketmaster.com/event1',
    date: '2023-03-01T19:00:00Z',
    distance: '1.5 miles',
    priceRanges: '£10 - £40',
    venue: 'Venue 1',
    venueAddress: '123 Main St',
    venuePostcode: '12345',
  }

  return (
    <View testID='SearchScreen'>
      <Button
        onPress={onPress}
        title='Find events near me!'
        testID='search-button'
      />

      <Event eventData={testData} />

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
    height: 400
  },
})