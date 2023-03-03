import React, { useRef, useState} from 'react';
import { Button, Animated, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Emoticons from 'react-native-emoticons';
import FlatButton from './button';

export default function Event({ eventData, navigate }, testID="Event") {
  const { eventName, priceRanges, venue, url, distance } = eventData;
  const [isExpanded, setExpanded] = useState(false);
  const translation = useRef(new Animated.Value(0)).current;


  const onPress = () => {
    setExpanded(!isExpanded);
    Animated.timing(translation, {
      toValue: isExpanded? 0 : 1,
      duration: 9000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={[styles.expandableContent, { transform: [{ translateY: translation }] }]}>
      <TouchableOpacity style={styles.container} onPress={onPress} testID='eventButton'>
        <Text style={styles.evName}>{eventName}</Text>
        <Text style={styles.price}>{priceRanges}</Text>
        <Text style={styles.miles}>{distance}</Text>
        <Text style={styles.venue}>{venue}</Text>
        {isExpanded && (
          <>
            <FlatButton
              text='Buy Tickets'
              onPress={
                navigate(url)}
            />
            <FlatButton
              text='View Route'
              onPress={
                navigate(url)}
            />{' '}
          </>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
}


const styles = StyleSheet.create({
  container: {
    height: 150,
    flex: 1,
    backgroundColor: '#9BD5E2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 17,
    borderRadius: 5,
  },
  button: {
    marginVertical: 5,
    color: 'red',
    padding: 10,
    borderRadius: 5,
  },
  evName: {
    fontFamily: 'italic',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  expandableContent: {
    overflow: 'hidden',
  },
  price: {
    fontFamily: 'crimson-numeric',
    fontSize: 15,
    fontWeight: 'lighter',
    marginBottom: 10,
  },
  venue: {
    fontFamily: 'georgia',
    fontSize: 15,
    fontWeight: 'lighter',
    marginBottom: 10,
  },
  miles: {
    venue: {
      fontFamily: 'italic',
      fontSize: 15,
      fontWeight: 'lighter',
      marginBottom: 10,
    }
  }
});

