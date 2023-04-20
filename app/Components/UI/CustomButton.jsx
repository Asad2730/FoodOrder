import React from 'react';
import { Pressable,Text,View,StyleSheet } from "react-native";

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
        width:330,
        height:50,
        backgroundColor:'#8b0000',
        // borderRadius:50,
        marginBottom:10,
        marginTop:10,
    },

  });
  