import React from 'react';
import {TextInput,View,StyleSheet } from "react-native";

export default function CustomInput({PlaceHolder,Type,OnChange,Value,Secure}) {
  return (
   <View>
      <TextInput 
      style={styles.container}
      placeholder={PlaceHolder} keyboardType={Type}
       onChangeText={text=> OnChange(text)}  value={Value}
       textAlign="left" secureTextEntry={Secure}
      />
   </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
        width:330,
        height:50,     
        marginBottom:10,
        marginTop:10,
        // borderRadius:50,
        color:'#E1D9D1',
        borderColor: '#808080',
        paddingLeft: 20,
    },


  });
  