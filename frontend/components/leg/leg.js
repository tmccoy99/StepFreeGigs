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
  return (
    <>
      <View>
        <Text>Leg</Text>
        <Text>{summary}</Text>
        {steps && steps.map((step, key) => <Step key={key} step={step} />)}
      </View>
    </>
  );
}
