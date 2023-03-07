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
      <View>
        <Text>Leg</Text>
        <Text>{summary}</Text>
        <Button
          onPress={() => {
            setIsExpanded(!isExpanded);
          }}
          title={isExpanded ? 'hide steps' : 'show steps'}
          testID='showSteps'
        />
        {isExpanded &&
          steps &&
          steps.map((step, key) => <Step key={key} step={step} />)}
      </View>
    </>
  );
}
