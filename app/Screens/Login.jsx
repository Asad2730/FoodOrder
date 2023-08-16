import React, { useState } from 'react';
import {StyleSheet, View } from 'react-native';
import CustomInput from '../Components/UI/CustomInput';
import CustomButton from '../Components/UI/CustomButton';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Colors } from '../utils/colors';

export default function Login({navigation}) {

  const [name,setName] = useState();
  const[number,setNumber] = useState();
 
  return (
    <View style={styles.container}>
       <CustomInput 
       PlaceHolder={'Name'} Type={'text'} OnChange={setName}
        Value={name} />
       <CustomInput 
       PlaceHolder={'Phone Number'} Type={'numeric'} OnChange={setNumber} 
        Value={number} />

        <CustomButton children={'Login'}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    height:hp('100%'),
    width:wp('100%')
  },
});

