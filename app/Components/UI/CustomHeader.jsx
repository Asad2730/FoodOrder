import { View, Text, StyleSheet } from 'react-native';

export default function  CustomHeader ({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000000',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
   
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color:'#ffffff'
  },
});


