import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Services = ({data}) => {
  return (
    
      
      <View style={{flexDirection:'row',marginTop:20,marginLeft:20}}>
        <View style={{flexDirection:'column',alignItems:'center'}}>
            <Image source={{uri:data.imageUrl,
                height:80,
                width:80,
            }}
            style={styles.imageContaier}
            />
            <Text style={{marginLeft:5,marginTop:7,fontSize:13,}}>{data.title}</Text>
        </View>
      </View>
   
  )
}   

export default Services

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#edf7ef',
        height:200,
        marginHorizontal:20,
        borderRadius:10,
        marginTop:20,
    },
    imageContaier:{
        borderRadius:40,
        marginLeft:20,
    }
})