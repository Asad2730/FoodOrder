import React from 'react';
import { StyleSheet, View, Text, Pressable, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Colors } from '../../utils/colors';


export default function Categories({ text, url }) {
  return (
    <Pressable>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.rowContainer}>
            <Text style={styles.text} >{text}</Text>
          </View>
          <View style={styles.rowContainer}>
            <Image
              style={styles.image}
              source={{
                uri: url,
              }}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    justifyContent: 'center',
    width: wp('35%'),
    height: hp('10%'),
    backgroundColor:Colors.secondary_color,
    borderRadius: 20,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 20,
    paddingLeft:10,
  
  },

  row: {
    marginLeft: 4,
    flexDirection: 'row',
  },
  rowContainer: {
    flex: 1,
  },
  text:{
    color:Colors.white,
  
  },
  image: {
    borderRadius: 30,
    width: hp('5%'),
    height: wp('10%'),
    paddingLeft:5
  },
});
