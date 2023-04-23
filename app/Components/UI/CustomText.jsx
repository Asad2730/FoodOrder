import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

const CustomText = ({ text, onPress }) => {
  return (
    <Pressable onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 16,
  },
});

export default CustomText;
