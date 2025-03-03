import { StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'

const ImageCard = ({data}) => {
  return (
    <View style={{flexDirection:'column',alignItems:'start',marginTop:15,borderWidth:2,borderColor:'#e5e9e6',marginHorizontal:8,padding:10,borderRadius:10,marginBottom:20}}>
        <Image source={{uri:data.imageUrl,height:80,width:80}} style={{borderRadius:10,}}/>
        <Text style={{marginLeft:12,color:'#456b52',fontSize:15,fontWeight:600,marginTop:5}}>{data.title}</Text>
    </View>
  )
}

export default ImageCard

const styles = StyleSheet.create({})