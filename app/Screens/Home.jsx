import React from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView,FlatList } from 'react-native';
import Categories from '../Components/Cards/categories';
import CustomText from '../Components/UI/CustomText';
import TopSelling from '../Components/Cards/TopSelling';
import HomePageSlider from '../Components/Slider/HomePageSlider';

const data = [
  { key: '1', text: 'Everyday meal', url: 'https://i.insider.com/51fc266a6bb3f75277000020?width=400&format=jpeg&auto=webp' },
  { key: '2', text: 'Everyday meal', url: 'https://i.insider.com/51fc266a6bb3f75277000020?width=400&format=jpeg&auto=webp' },
  { key: '3', text: 'Everyday meal', url: 'https://i.insider.com/51fc266a6bb3f75277000020?width=400&format=jpeg&auto=webp' },
  { key: '4', text: 'Everyday meal', url: 'https://i.insider.com/51fc266a6bb3f75277000020?width=400&format=jpeg&auto=webp' },
  { key: '5', text: 'Everyday meal', url: 'https://i.insider.com/51fc266a6bb3f75277000020?width=400&format=jpeg&auto=webp' },
  { key: '6', text: 'Everyday meal', url: 'https://i.insider.com/51fc266a6bb3f75277000020?width=400&format=jpeg&auto=webp' },
];

const details = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligula enim.`;

const price = '250';

export default function Home({ navigation }) {
  const renderItemCategories = ({ item }) => <Categories text={item.text} url={item.url} />;

  const renderItemSelling = ({ item }) => (
    <TopSelling text={item.text} url={item.url} details={details} price={price} />
  );

  return (
   <SafeAreaView style={styles.safeArea}>
     <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.main}>
            <HomePageSlider/>
          <View style={styles.row}>
         <View style={styles.rowContainer}>
              <CustomText text={'Categories'} />
        </View>
         <View style={[styles.rowContainer, {alignItems:'flex-end' }]}>
           <CustomText text={'See All >'} />
        </View>
         </View>

          <View style={styles.list}>
            <FlatList data={data} horizontal={true} renderItem={renderItemCategories} keyExtractor={(item) => item.key} />
          </View>
          <CustomText text={'Top Selling'} />
          <View style={styles.list}>
            <FlatList
              data={data}
              renderItem={renderItemSelling}
              keyExtractor={(item) => item.key}
              numColumns={2}
            />
          </View>
        </View>
      </ScrollView>
    </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000000',
  },
  container: {
    flex: 1,   
  },
  main: {
    margin: 10,
  },
  list: {
    marginLeft: 2,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  rowContainer: {
    flex: 1,
    justifyContent:'space-between',
 
  },
  row: {
    flexDirection: 'row',
    marginTop:30,
  },
});
