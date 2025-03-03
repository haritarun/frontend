import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const ArticalCard = ({data}) => {
  return (
    <View style={{marginHorizontal:5,marginTop:10,width:200}}>
      <Image source={{uri:data.imageUrl,height:120,width:200}} style={{borderRadius:10}}/>
      <Text style={{marginTop:5,marginLeft:5,color:"#437959",fontWeight:700,fontSize:15}}>
        {data.title}
      </Text>
      <Text style={{color:'#797c7a',marginLeft:5,marginTop:4}}>{data.para}</Text>
    </View> 
  )
}

export default ArticalCard

const styles = StyleSheet.create({})