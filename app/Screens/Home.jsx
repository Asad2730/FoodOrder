import React, { useState } from 'react';
import {StyleSheet, View,Text } from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
        <Text>Home</Text>
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
  