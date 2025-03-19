import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React from 'react'
import ArticalCard from './ArticalCard'


const Data=[
    {
        imageUrl:'https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg',
        title:'Bones',
        para:'This is about Health Artical.There are many articals'
    },
    {
        imageUrl:'https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg',
        title:'shop',
        para:'This is about Health Artical.There are many articals'
    },
    {
        imageUrl:'https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg',
        title:'shop',
        para:'This is about Health Artical.There are many articals'
    },
    {
        imageUrl:'https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg',
        title:'shop',
        para:'This is about Health Artical.There are many articals'
    },
    {
        imageUrl:'https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg',
        title:'shop',
        para:'This is about Health Artical.There are many articals'
    },
    {
        imageUrl:'https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg',
        title:'shop',
        para:'This is about Health Artical.There are many articals'
    },
    {
        imageUrl:'https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg',
        title:'shop',
        para:'This is about Health Artical.There are many articals'
    },
    
]

const HealthArticals = () => {

  return (
  <View style={styles.offerContainer}>
    <Text style={{fontSize:17,color:'#456b52',fontWeight:700}}>Health Articals</Text>
    <FlatList 
    data={Data}
    renderItem={({item})=><ArticalCard data={item}/>}
    keyExtractor={item=>item.id}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    />
  </View>
   
  )
}

export default HealthArticals

const styles = StyleSheet.create({
    offerContainer:{
        backgroundColor:'#ffffff',
        height:'auto',
        marginHorizontal:20,
        borderRadius:10,
        marginTop:20,
        padding:20,
        
      },
})