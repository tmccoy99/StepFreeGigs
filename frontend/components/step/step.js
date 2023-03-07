import React, { useEffect, useState } from 'react';
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default function Step({ step }) {
  return (
    <>
      <View style={styles.stepContainer}>
        <Text testID='Step'>{step.descriptionHeading}</Text>
        <Text>{step.description}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  stepContainer: {
    backgroundColor: '#D3D3D3',
    padding: 15,
    paddingBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 6,
  },
  step: {
    opacity: 0,
  },
});
