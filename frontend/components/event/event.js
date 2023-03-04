import React, { useState } from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';

export default function Event({ eventData, navigate }) {
  const { eventName, priceRanges, venue, url, distance } = eventData;
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
          <View style={styles.eventFooter}>
            <Button
              title='Buy Tickets'
              onPress={() => {
                navigate(url);
              }}
            />
            <Button
              title='View Route'
              onPress={() => {
                navigate('/journey');
              }}
            />
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
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
  },
  eventHeader: {
    minHeight: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  eventHeaderLeft: {

  },
  eventHeaderRight: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  eventPrice: {
    
  },
  eventName: {
    fontWeight: 700,
    fontSize: 18,
    marginBottom: 8
  },
  eventDistance: {

  },
  eventVenue: {
    fontSize: 16
  },
  eventFooter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: -8
  },
})