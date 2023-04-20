import React, { useState } from 'react';
import {StyleSheet, View,Text } from 'react-native';

export default function More({navigation}) {
  return (
    <View style={styles.container}>
        <Text>More</Text>
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
  