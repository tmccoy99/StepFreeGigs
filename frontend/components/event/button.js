import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function FlatButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text>{ text }</Text>
      </View>
    </TouchableOpacity>
  )
}