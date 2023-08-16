import React from 'react';
import { Pressable,Text,View,StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Colors } from '../../utils/colors';


export default function CustomBtn({children,onClick}) {
  return (
   <View>
      <Pressable 
      onPress={onClick}
        style={styles.container}>
            <Text>{children}</Text>
        </Pressable>
   </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:wp('80%'),
        height:hp('6%'),
        backgroundColor:Colors.red,
        // borderRadius:50,
        marginBottom:10,
        marginTop:10,
    },

  });
  