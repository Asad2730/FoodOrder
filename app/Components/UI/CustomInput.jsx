import React from 'react';
import { TextInput, View, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../../utils/colors';
import { HandleChange } from '../../utils/hooks/onChange';

export default function CustomInput({ PlaceHolder, Type, OnChange, Value, Field, Secure }) {

  const handleOnChange = (text) => {
   
    if (OnChange) {
      HandleChange(Field, text, OnChange)
    }
  }

  return (
    <View>
      <TextInput
        style={styles.container}
        placeholder={PlaceHolder}
        keyboardType={Type}
        onChangeText={text => handleOnChange(text)}
        value={Value}
        textAlign="left" secureTextEntry={Secure}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('80%'),
    height: hp('6%'),
    marginBottom: 10,
    marginTop: 10,
    // borderRadius:50,
    color: Colors.white,
    borderColor: Colors.gray,
    paddingLeft: 20,
  },


});
