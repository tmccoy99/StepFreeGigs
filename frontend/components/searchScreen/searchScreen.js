import React, { useState } from 'react';
import {
  StyleSheet,
  Button,
  Dimensions,
  View,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import Event from '../event/event';
import logo from '../../assets/stepfreegigs-logo.png';
import wheelchair from '../../assets/wheelchair-icon.gif';

export default function SearchScreen({ navigation, route }) {
  const { currentLocation } = route.params;
  const [events, setEvents] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const getEvents = async () => {
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
    <ScrollView testID='SearchScreen'>
      <Button
        onPress={() => {
          getEvents(), setIsLoading(true);
        }}
        title='Find events near me!'
        testID='search-button'
        size='sm'
        color='#FFA458'
      />
      {events ? (
        <>
          <Button
            title='clear'
            testID='clearButton'
            onPress={() => {
              setEvents(null);
              setIsLoading(false);
            }}
          />
          {events.map((data, index) => (
            <Event
              currentLocation={currentLocation}
              eventData={data}
              key={index}
              navigation={navigation}
              testID='Event'
            />
          ))}
        </>
      ) : isLoading ? (
        <View style={styles.loadingContainer}>
          <Image
            testID='wheelchair-loading'
            source={wheelchair}
            style={styles.wheelchair}
          />
          <Text>Loading... </Text>
        </View>
      ) : (
        <>
          <View>
            <Image testID='logo' source={logo} style={styles.logo} />
          </View>
        </>
      )}
    </ScrollView>
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
