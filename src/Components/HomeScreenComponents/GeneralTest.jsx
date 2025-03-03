import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Data=[
    {
        imageUrl:'https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg',
        title:'Bones'
    },
    {
        imageUrl:'https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg',
        title:'shop'
    },
    {
        imageUrl:'https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg',
        title:'shop'
    },
    {
        imageUrl:'https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg',
        title:'shop'
    },
    {
        imageUrl:'https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg',
        title:'shop'
    },
    {
        imageUrl:'https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg',
        title:'shop'
    },
    {
        imageUrl:'https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg',
        title:'shop'
    },
    
]

const GeneralTest = () => {
  return (
    <View style={styles.offerContainer}>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20,marginHorizontal:10}}>
                <Text style={{fontSize:17,fontWeight:700,color:'#456b52'}}>General Test</Text>
                <TouchableOpacity>
                    <Text style={{fontSize:14,color:'#2c6d68',fontWeight:500}}>View All</Text>
                </TouchableOpacity>
            </View>

        <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>
            
    {
        Data.map((eachItem, index) => (
            <View key={index} style={{ marginTop: 29, position: 'relative' }}>
                
                <Image
                    source={{ uri: eachItem.imageUrl }}
                    style={{ height: 200, width: 120, borderRadius: 20 }}
                />
                
                <Text style={{ position: 'absolute', top: 10, left: 10, color: 'white', fontWeight: 'bold', fontSize: 16 }}>
                    {eachItem.title}
                </Text>
            </View>
        ))
    }
</View>
    </View>
  )
}

export default GeneralTest

const styles = StyleSheet.create({
    offerContainer:{
        backgroundColor:'#edf7ef',
        height:'auto',
        marginHorizontal:20,
        borderRadius:10,
        marginTop:20,
       
      },
})