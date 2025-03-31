import { StyleSheet, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ArticalCard = ({data}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={{marginHorizontal:5,marginTop:10,width:200}} onPress={()=>{navigation.navigate('Doctors',{screen:'HealthArticalScreen',params:{articalData: data}})}}>
      <Image source={{uri:data.imageUrl,height:120,width:200}} style={{borderRadius:10}}/>
      <Text style={{marginTop:5,marginLeft:5,color:"#437959",fontWeight:700,fontSize:15}}>
        {data.title}
      </Text>
      <Text style={{color:'#797c7a',marginLeft:5,marginTop:4}}>{data.para}</Text>
    </TouchableOpacity> 
  )
}

export default ArticalCard

const styles = StyleSheet.create({})