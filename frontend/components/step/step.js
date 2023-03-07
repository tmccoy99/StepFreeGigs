import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Step({ step }) {
  return (
    <>
      <View style={styles.stepContainer}>
        <Text style={styles.stepHeading} testID='Step'>
          {step.descriptionHeading}
        </Text>
        <Text style={styles.stepDesc}>{step.description}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  stepContainer: {
    backgroundColor: '#fff',
    padding: 15,
    paddingBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 3,
    marginTop: 3,
  },
  step: {
    opacity: 0,
  },
  stepHeading: {
    fontWeight: 700,
    fontSize: 18,
    marginBottom: 8,
  },
});
