import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import { Colors } from '../../utils/colors';
import { heightPercentageToDP as hp} from 'react-native-responsive-screen';

const CustomText = ({ text, onPress }) => {
  return (
    <Pressable onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.white,
    fontSize: hp('2%'),
  },
});

export default CustomText;
