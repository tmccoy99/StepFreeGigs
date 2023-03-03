import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Event from './components/event/event';

export default function App() {

  const eventData = {
    eventName: 'Example Event',
    priceRanges: '$10 - $50',
    venue: 'Example Venue',
    url: 'https://example.com',
    distance: '5 miles',
  };

  const navigate = (url) => {
    console.log(`Navigating to ${url}`);
  };

  return (
    <View style={styles.container}>
      <Event eventData={eventData} navigate={navigate} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6eeff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
