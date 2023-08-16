import React, { useState } from 'react';
import {StyleSheet, View,Text } from 'react-native';
import { Colors } from '../utils/colors';

export default function Bucket({navigation}) {
  return (
    <View style={styles.container}>
        <Text>Bucket</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.black,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  