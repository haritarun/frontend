import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const data =[
    {
        id:1,
        imageUrl:'https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2220431045.jpg',
        title:'Hari Tarun Kumar'
    },
    {
        id:2,
        imageUrl:'https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2220431045.jpg',
        title:'Ramya'
    },
    {
        id:3,
        imageUrl:'https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2220431045.jpg',
        title:'Rama'
    },
]

const OutTeam = () => {
  return (
    <View style={{marginTop:20}}>
      <Text style={{fontSize:23,fontWeight:700}}>Our Team</Text>
            {
                data.map(eachItem=>(
                    <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                        <Image source={{uri:eachItem.imageUrl,height:150,width:200}}/>
                        <Text style={{fontSize:17,fontWeight:700,color:'#7c7c7a'}}>{eachItem.title}</Text>
                    </View>
                ))
            }
    </View>
  )
}

export default OutTeam

const styles = StyleSheet.create({})