import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Offer = () => {
  return (
    <View style={styles.offerContainer}>
        <MaterialCommunityIcons name="brightness-percent" size={30} style={{marginHorizontal:20}}/>
        <Text style={styles.text}>Get Flat 100 Offer On Your 1st Order</Text>
    </View>
  )
}

export default Offer

const styles = StyleSheet.create({
    offerContainer:{
        backgroundColor:'#f2ebe6',
        height:'auto',
        marginHorizontal:20,
        borderRadius:10,
        marginTop:20,
       
        paddingVertical:20,
        flexDirection:'row',
        alignItems:'center'
        
      },
      text:{
        width:'60%',
        fontSize:20,
        color:'#456b52',
        fontWeight:600,
      }
})