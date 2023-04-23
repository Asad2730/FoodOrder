import React from 'react';
import { StyleSheet, View, Text, Pressable, Image } from 'react-native';
import CustomHeader from '../UI/CustomHeader';
import { Feather } from '@expo/vector-icons'; 

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
             <Text>{details}</Text>
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
    width: 160,
    height: 240,
    backgroundColor: '#FBE6E6',
    borderRadius: 20,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 20,
  },


  image: {
    borderRadius: 10,
    marginTop:10,
    marginBottom:5,
    width: 100,
    height: 70,
    marginLeft: 2,
    marginRight: 2,
  },
  main:{
    flex:1,
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
