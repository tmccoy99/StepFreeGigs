import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchScreen from './components/searchScreen/searchScreen';
import Geolocation from '@react-native-community/geolocation';
import { useState, useEffect } from 'react';

export default function App() {
  const [currentLocation, setCurrentLocation] = useState({
    //default location random spot in london
    latitude: 51.537187,
    longitude: 0.050094,
  });
  console.log('current location: ', currentLocation);
  useEffect(() => {
    const getLocation = () => {
      Geolocation.getCurrentPosition((info) => {
        setCurrentLocation({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        });
      });
    };
    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      <SearchScreen currentLocation={currentLocation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
