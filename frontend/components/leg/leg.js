import React, { useEffect, useState } from 'react';
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Step from '../step/step';

export default function Leg({ summary, steps }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <View style={styles.legContainer}>
        <Text testID='Leg'>{summary}</Text>

        {steps && steps.length > 0 && (
          <Button
            onPress={() => {
              setIsExpanded(!isExpanded);
            }}
            title={isExpanded ? 'hide steps' : 'show steps'}
            testID='showSteps'
          />
        )}

        {isExpanded &&
          steps &&
          steps.map((step, key) => <Step key={key} step={step} />)}
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  legContainer: {
    backgroundColor: '#D3D3D3',
    padding: 15,
    paddingBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 6,
  },
});
