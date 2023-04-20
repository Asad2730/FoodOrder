import React, { useState } from 'react';
import {StyleSheet, View,Text } from 'react-native';

export default function Promo({navigation}) {
  return (
    <View style={styles.container}>
        <Text>Promo</Text>
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
  