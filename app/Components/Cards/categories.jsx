import React from 'react';
import { StyleSheet, View, Text, Pressable, Image } from 'react-native';

export default function Categories({ text, url }) {
  return (
    <Pressable>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.rowContainer}>
            <Text>{text}</Text>
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
    width: 130,
    height: 70,
    backgroundColor: '#FBE6E6',
    borderRadius: 20,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 20,
  },

  row: {
    marginLeft: 4,
    flexDirection: 'row',
  },
  rowContainer: {
    flex: 1,
  },
  image: {
    borderRadius: 30,
    width: 50,
    height: 50,
    marginLeft: 2,
    marginRight: 2,
  },
});
