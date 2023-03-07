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
      <View>
        <Text>Step</Text>
        <Text>{step.descriptionHeading}</Text>
        <Text>{step.description}</Text>
      </View>
    </>
  );
}
