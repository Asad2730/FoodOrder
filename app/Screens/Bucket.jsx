import React, { useState } from 'react';
import {StyleSheet, View,Text } from 'react-native';

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
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  