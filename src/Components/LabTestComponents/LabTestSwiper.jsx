import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import Swiper from 'react-native-swiper';
import LabTestScreen from '../../Screens/LabTestScreen';

const Data=[
  {
    id:1,
    imageUrl:'https://images.aeonmedia.co/images/afef287f-dd6f-4a6a-b8a6-4f0a09330657/sized-kendal-l4ikccachoc-unsplash.jpg?width=3840&quality=75&format=auto',
    title:'services'
  },
  {
    id:2,
    imageUrl:'https://content3.jdmagicbox.com/comp/guntur/n2/9999px863.x863.190302122759.v8n2/catalogue/online-medical-services-guntur-0jq42bbxuz.jpg',
    title:'services'
  },
  {
    id:3,
    imageUrl:'https://www.chatbot.com/images/og-images/livechat.c2d4958432e2015140f038fdf555db649ccfe97ef66f3fc68528a90cf4736c59.jpg',
    title:'services'
  },
  ]

const LabTestSwiper = () => {
  return (
    <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} loop={true} autoplayTimeout={3} showsPagination={true}>
      {Data.map((item) => (
        <View key={item.id} style={styles.slide}> 
          <Image source={{uri:item.imageUrl,height:200,width:'98%'}} style={{borderRadius:20,marginTop:10,marginBottom:20}}/>

        </View>
      ))}
    </Swiper>
  );
};

export default LabTestSwiper;  

const styles = StyleSheet.create({
  wrapper: {
    height:230,
    
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