import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchScreen from './components/searchScreen/searchScreen';
import Geolocation from '@react-native-community/geolocation';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const LocationContext = React.createContext('');

export default function App() {
  const [currentLocation, setCurrentLocation] = useState({
    //default location random spot in london
    latitude: 51.537187,
    longitude: 0.050094,
  });
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
  const LocationContext = React.createContext(null);
  return (
    <LocationContext.Provider currentLocation={currentLocation}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Search' component={SearchScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </LocationContext.Provider>
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
