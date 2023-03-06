import { StyleSheet } from 'react-native';
import SearchScreen from './components/searchScreen/searchScreen';
// import JourneyScreen from './components/journeyScreen/journeyScreen
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
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
