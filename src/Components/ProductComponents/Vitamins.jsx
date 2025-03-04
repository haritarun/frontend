import { View, Text, StyleSheet, ScrollView,TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';

const vitamins = [
    {
      id: 1,
      name: 'Vitamin A',
      colors: ['#fbeb95', '#FFA500'], 
      icon: 'eye',
      content: 'Supports vision, immune function, and skin health.',
    },
    {
      id: 2,
      name: 'Vitamin B',
      colors: ['#87CEEB', '#4682B4'], 
      icon: 'lightning-bolt',
      content: 'Boosts energy levels and brain function.',
    },
    {
      id: 3,
      name: 'Vitamin C',
      colors: ['#FF6347', '#FF4500'], 
      icon: 'shield-sun',
      content: 'Enhances immunity and collagen production.',
    },
    {
      id: 4,
      name: 'Vitamin D',
      colors: ['#FFA07A', '#FF7F50'],
      icon: 'weather-sunny',
      content: 'Promotes bone health and calcium absorption.',
    },
    {
      id: 5,
      name: 'Vitamin E',
      colors: ['#98FB98', '#32CD32'], 
      icon: 'leaf',
      content: 'Protects cells from oxidative damage.',
    },
    {
      id: 6,
      name: 'Vitamin K',
      colors: ['#DDA0DD', '#BA55D3'],
      icon: 'water',
      content: 'Essential for blood clotting and bone health.',
    },
];
  

  const { width } = Dimensions.get('window');

const Vitamins = () => {
  return (
    <View style={styles.offerContainer}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{color:"#456b52",fontWeight:700,fontSize:17}}>Vitamins</Text>
            <TouchableOpacity >
                <Text style={{fontSize:15,fontStyle:'normal',color:'#07666d',fontWeight:600}}>View All</Text>
            </TouchableOpacity>
        </View>
    <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} loop={true} autoplayTimeout={3} showsPagination={false}>
    {vitamins.map((vitamin) => (
        <LinearGradient
          key={vitamin.id}
          colors={vitamin.colors}
          style={styles.card}
          start={{ x: 0, y: 0 }}
          end={{ x:1, y: 1 }}
        >
          <Icon name={vitamin.icon} size={40} color="#FFF" style={styles.icon} />
          <Text style={styles.vitaminName}>{vitamin.name}</Text>
          <Text style={styles.vitaminContent}>{vitamin.content}</Text>
        </LinearGradient>
      ))}
        </Swiper>
    </View>
  )
}

export default Vitamins

const styles = StyleSheet.create({
    offerContainer:{
        backgroundColor:'#edf7ef',
        height:'auto',
        marginHorizontal:20,
        borderRadius:10,
        marginTop:20,
        paddingHorizontal:17,
        paddingTop:20,
    },
      card: {
        width: width * 0.70,
        borderRadius: 20,
        padding: 20,
        alignItems:'center',
        marginLeft:30,
      },
      vitaminName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFF',
        marginTop: 10,
        textAlign: 'center',
      },
      vitaminContent: {
        fontSize: 14,
        color: '#FFF',
        marginTop: 10,
        textAlign: 'center',
        lineHeight: 20,
      },
      icon: {
        marginBottom: 10,
      },
      wrapper:{
        height:200,
        marginTop:20
      }
})