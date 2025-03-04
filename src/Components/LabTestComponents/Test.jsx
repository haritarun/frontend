import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import ImageCard from '../HomeScreenComponents/ImageCard'

const brands=[
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
    {
      id:4,
      imageUrl:'https://images.aeonmedia.co/images/afef287f-dd6f-4a6a-b8a6-4f0a09330657/sized-kendal-l4ikccachoc-unsplash.jpg?width=3840&quality=75&format=auto',
      title:'services'
    },
    {
      id:5,
      imageUrl:'https://images.aeonmedia.co/images/afef287f-dd6f-4a6a-b8a6-4f0a09330657/sized-kendal-l4ikccachoc-unsplash.jpg?width=3840&quality=75&format=auto',
      title:'services'
    },
    {
      id:6,
      imageUrl:'https://images.aeonmedia.co/images/afef287f-dd6f-4a6a-b8a6-4f0a09330657/sized-kendal-l4ikccachoc-unsplash.jpg?width=3840&quality=75&format=auto',
      title:'services'
    },
  ]

const Test = () => {
  return (
    <View style={styles.offerContainer}>
        <View style={{flexDirection:'row',justifyContent:'space-between', }}>
            <Text style={{color:'#456b52',fontSize:18,fontWeight:700}}>Tests</Text>
            <Text style={{color:'#456b52',fontSize:15,fontWeight:600}}>View All</Text>
        </View>
        <FlatList 
        data={brands}
        renderItem={({item})=><ImageCard data={item}/>}
        horizontal={true}
        showsHorizontalScrollIndicator={false}/>
    </View>
  )
}

export default Test

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
})