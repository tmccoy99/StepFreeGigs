import React, { useState } from 'react';
import {
  StyleSheet,
  Button,
  Dimensions,
  View,
  Image,
  Text,
} from 'react-native';
import axios from 'axios';
import Event from '../event/event';
import logo from '../../assets/stepfreegigs-logo.png';
import wheelchair from '../../assets/wheelchair-icon.gif';

export default function SearchScreen({ navigation, currentLocation }) {
  const [events, setEvents] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const onPress = async () => {
    try {
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
      setIsLoading(false);
    } catch (error) {
      console.log('Error retrieving events:', error);
    }
  };

  return (
    <View testID='SearchScreen'>
      <Button
        onPress={() => {
          onPress(), setIsLoading(true);
        }}
        title='Find events near me!'
        testID='search-button'
      />
      <Button
        title='clear'
        onPress={() => {
          setEvents(null), setIsLoading(false);
        }}
      />
      {isLoading && (
        <View style={styles.loadingContainer}>
          <Image
            testID='wheelchair'
            source={wheelchair}
            style={styles.wheelchair}
          />
          <Text>Loading... </Text>
        </View>
      )}
      {events &&
        events.map((data, index) => (
          <Event
            currentLocation={currentLocation}
            eventData={data}
            key={index}
            navigation={navigation}
            testID='Event'
          />
        ))}
      {!events && !isLoading && (
        <>
          <View>
            <Image testID='logo' source={logo} style={styles.logo} />
          </View>
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
  wheelchair: {
    height: 200,
    width: 200,
  },
  loadingContainer: {
    display: 'flex',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
