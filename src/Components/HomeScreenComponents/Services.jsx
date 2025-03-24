import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const Services = ({data}) => {
    const navigation = useNavigation()
   
  return (
      <TouchableOpacity style={{flexDirection:'row',marginTop:20,marginLeft:20}} onPress={() => {
        navigation.navigate('Doctors', {
          screen: 'ServicesScreen',
          params: { title:data.title,previousScreen:'Home'}, 
          
        });
      }} >
        <View style={{flexDirection:'column',alignItems:'center'}}>
            <Image source={{uri:data.icon,
                height:80,
                width:80,
            }}
            style={styles.imageContaier}
            />
            <Text style={{marginLeft:8,marginTop:7,fontSize:13,}}>{data.title}</Text>
        </View>
      </TouchableOpacity>
  )
}

export default Services

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ffffff',
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