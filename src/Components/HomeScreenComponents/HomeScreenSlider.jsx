import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import Swiper from 'react-native-swiper';

const Data=[
    {
      id:1,
      imageUrl:'https://images.aeonmedia.co/images/afef287f-dd6f-4a6a-b8a6-4f0a09330657/sized-kendal-l4ikccachoc-unsplash.jpg?width=3840&quality=75&format=auto',
      title:'services'
    },
    {
      id:2,
      imageUrl:'https://images.aeonmedia.co/images/afef287f-dd6f-4a6a-b8a6-4f0a09330657/sized-kendal-l4ikccachoc-unsplash.jpg?width=3840&quality=75&format=auto',
      title:'services'
    },
    {
      id:3,
      imageUrl:'https://images.aeonmedia.co/images/afef287f-dd6f-4a6a-b8a6-4f0a09330657/sized-kendal-l4ikccachoc-unsplash.jpg?width=3840&quality=75&format=auto',
      title:'services'
    },
  ]

const CarouselSlider = () => {
  return (
    <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} loop={true} autoplayTimeout={100}>
      {Data.map((item) => (
        <View key={item.id} style={styles.slide}> 
          <Image source={{uri:item.imageUrl,height:200,width:'98%'}} style={{borderRadius:20,marginTop:10,marginBottom:20}}/>

        </View>
      ))}
    </Swiper>
  );
};

export default CarouselSlider;  

const styles = StyleSheet.create({
  wrapper: {
    height:230
  },
  slide: {
    marginHorizontal:10,
    borderRadius:20,
    marginTop:10,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
});