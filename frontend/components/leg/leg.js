import React, { useEffect, useState } from 'react';
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default function Leg({ summary }) {
  return (
    <>
      <View>
        <Text>Leg</Text>
        <Text>{summary}</Text>
      </View>
    </>
  );
}
