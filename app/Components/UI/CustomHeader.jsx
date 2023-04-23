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
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color:'#ffffff'
  },
});


