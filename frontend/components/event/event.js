import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button } from '@rneui/themed';
import Collapsible from 'react-native-collapsible';
import BuyTicketsButton from '../buyTicketsButton/buyTicketsButton';

export default function Event({ eventData, navigation, currentLocation }) {
  const { eventName, priceRanges, venue, url, distance, venuePostcode } =
    eventData;
  const [isExpanded, setExpanded] = useState(false);

  const onPress = () => {
    setExpanded(!isExpanded);
  };
  return (
    <View style={styles.eventContainer}>
      <TouchableOpacity onPress={onPress} testID='eventButton'>
        <View style={styles.eventHeader}>
          <View style={styles.eventHeaderLeft}>
            <Text style={styles.eventName}>{eventName}</Text>
            <Text style={styles.eventVenue}>{venue}</Text>
          </View>
          {/* <Text>{date}</Text> */}
          <View style={styles.eventHeaderRight}>
            <Text style={styles.eventPrice}>{priceRanges}</Text>
            <Text style={styles.eventDistance}>{distance}</Text>
          </View>
        </View>
        <Collapsible collapsed={!isExpanded}>
          <View
            style={styles.eventFooter}
            testID='collapsible'
            isCollapsed={!isExpanded}
          >
            <BuyTicketsButton url={url} />
            <Button
              onPress={() => {
                navigation.push('Journey', {
                  currentLocation: currentLocation,
                  endLocation: venuePostcode,
                });
              }}
              size='sm'
              color='#FFA458'
              testID='journeyButton'
            >
              View Route
            </Button>
          </View>
        </Collapsible>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  eventContainer: {
    backgroundColor: '#D3D3D3',
    padding: 15,
    paddingBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 6,
  },
  eventHeader: {
    minHeight: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  eventHeaderLeft: {},
  eventHeaderRight: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  eventPrice: {},
  eventName: {
    fontWeight: 700,
    fontSize: 18,
    marginBottom: 8,
  },
  eventDistance: {},
  eventVenue: {
    fontSize: 16,
  },
  eventFooter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
    minHeight: 30,
  },
});
