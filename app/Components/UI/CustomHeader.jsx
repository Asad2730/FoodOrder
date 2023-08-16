import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../utils/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function CustomHeader({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: hp('3%'), 
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  title: {
    fontSize: hp('2.0%'), 
    fontWeight: 'bold',
    color: Colors.white,
  },
});


