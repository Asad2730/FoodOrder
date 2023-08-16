import React from 'react';
import { StyleSheet, View, Text, Pressable, Image } from 'react-native';
import CustomHeader from '../UI/CustomHeader';
import { Feather } from '@expo/vector-icons'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Colors } from '../../utils/colors';

export default function TopSelling({ text, url,details,price }) {
  return (
    
    <Pressable>
      <View style={styles.container}>
      <Image
            style={styles.image}
              source={{
                uri: url,
              }}
            /> 
            <CustomHeader title={text}/>
             <View style={styles.main}>
              <Text style={styles.text}>{details}</Text>
             </View>

             <View style={styles.row}>
          <View style={styles.rowContainer}>
             <CustomHeader title={`Rs.${price}`}/>
          </View>
          <View style={[styles.rowContainer, { marginRight:10,alignItems:'flex-end'  }]}>
          <Feather name="plus" size={20} color="red" />
          </View>
        </View>   
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    justifyContent:'flex-start',
    alignItems:'center',
    width:wp('40%'),
    height: hp('30%'),
    backgroundColor: Colors.secondary_color,
    borderRadius: 20,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 20,
  },
  text:{
    color:Colors.white,
    textAlign:'center'
  },

  image: {
    borderRadius: 10,
    marginTop:10,
    marginBottom:5,
    width: wp('30%'),
    height: hp('10%'),
    marginLeft: 2,
    marginRight: 2,
  },
  main:{
    flex:1,
    justifyContent:'center',
    
  },
  row: {
    marginLeft: 4,
    flexDirection: 'row',
  },
  rowContainer: {
    flex: 1,
    marginBottom:10,
  },
});
