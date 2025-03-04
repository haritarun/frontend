import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';


const Aboutus = () => {
  return (
    <View style={styles.offerContainer}>
        <View style={{flexDirection:'row'}}>
            <MaterialCommunityIcons  name="users" size={35} color={'#6e716d'} style={{marginTop:5}}/>
            <View style={{flexDirection:'column',marginLeft:20}}>
                <Text style={{fontSize:20,color:"#5f695c",fontWeight:700}}>About Us</Text>
                <Text style={{fontSize:15,color:'#757b74',fontWeight:500,marginTop:3}}>To Know About Us</Text>
            </View> 
            <AntDesign name="rightcircleo" size={30} color={'#6e716d'} style={{marginTop:5,marginLeft:145,left:10,top:5}}/>
        </View>
    </View>
  )
}

export default Aboutus

const styles = StyleSheet.create({
    offerContainer:{
        backgroundColor:'#edf7ef',
        height:'auto',
        marginHorizontal:20,
        borderRadius:10,
        marginTop:10,
        padding:20

      },
})