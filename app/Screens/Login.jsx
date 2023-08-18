import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import CustomInput from '../Components/UI/CustomInput';
import CustomButton from '../Components/UI/CustomButton';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../utils/colors';
import { FormItems } from '../Components/UI/FormItems';

export default function Login({ navigation }) {


  const [formValues, setFormValues] = useState({
    name: { value: '', type: 'default', placeHolder: 'Name' },
    number: { value: '', type: 'numeric' ,placeHolder: 'Phone Number'},
  })


  return (
    <View style={styles.container}>
     
       <FormItems form={formValues} setForm={setFormValues}/> 

      <CustomButton children={'Login'} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('100%'),
    width: wp('100%')
  },
});

