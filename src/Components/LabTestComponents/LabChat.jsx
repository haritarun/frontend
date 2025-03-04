import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const LabChat = () => {
  return (
    <View style={styles.offerContainer}>
        <MaterialCommunityIcons name="whatsapp" size={30} style={{marginHorizontal:20}} color={'green'}/>
        <View style={{flexDirection:'column',width:'60%'}}>
            <Text style={styles.text}>Chat With Us </Text>
            <Text style={{marginTop:7,fontSize:15,color:'gray'}}>chat with an Expert</Text>
        </View>
    </View>
  ) 
}

export default LabChat

const styles = StyleSheet.create({
    offerContainer:{
        backgroundColor:'#edf7ef',
        height:'auto',
        marginHorizontal:20,
        borderRadius:20,
        marginTop:20,
        paddingVertical:20,
        flexDirection:'row',
        alignItems:'center',
      },
      text:{
        width:'60%',
        fontSize:20,
        color:'#456b52',
        fontWeight:600,

      }
})