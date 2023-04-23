import * as React from 'react';
import { Dimensions, Text, View,Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';


const images = [
    { uri: 'https://media.istockphoto.com/id/914886270/photo/close-up-of-fresh-flame-grilled-burgers-displayed-in-a-row-at-food-market.jpg?s=1024x1024&w=is&k=20&c=A2ISZk6yydK70lNe4O5t4q4tkru7wH1oWNY_4_5bolU=' },
    { uri: 'https://media.istockphoto.com/id/1190809363/photo/meaty-hamburger-and-fries-on-a-table.jpg?s=1024x1024&w=is&k=20&c=EeYdoB7I6rjKszd3iQLGUl_ZMdXBrmlJzfQQ9A9h2Uk=' },
    { uri: 'https://media.istockphoto.com/id/1425843897/photo/freshly-flame-grilled-chicken-burger-and-fries-on-wooden-counter-at-food-market.jpg?s=1024x1024&w=is&k=20&c=VgRXxwSCQ-JgU9u4vtAGWlWerJW_vo3WTIpbtCiSBBg=' },
  ];

  export default function HomePageSlider() {
    const width = Dimensions.get('window').width;
    return (
      <View style={{ flex: 1 }}>
        <Carousel
          loop
          width={width}
          height={width / 2}
          autoPlay={true}
          data={images}
          scrollAnimationDuration={1000}
         // onSnapToItem={(index) => console.log('current index:', index)}
          renderItem={({ index }) => (
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                justifyContent: 'center',
              }}
            >
              <Image source={{ uri: images[index].uri }} style={{ width: '100%', height: '100%' }} />
            </View>
          )}
        />
      </View>
    );
  }

 