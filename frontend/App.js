import { StyleSheet } from 'react-native';
import SearchScreen from './components/searchScreen/searchScreen';
// import JourneyScreen from './components/journeyScreen/journeyScreen
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

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Search'>
        <Stack.Screen name='Search' component={SearchScreen}></Stack.Screen>
        {/* <Stack.Screen name='Journey' component={JourneyScreen}></Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>

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
