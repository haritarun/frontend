import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';


const AccountOurServices = () => {
  return (
    <View style={styles.offerContainer}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
                <MaterialCommunityIcons  name="users" size={30} color={'#6e716d'} style={{marginTop:5}}/>
                <View style={{flexDirection:'column',marginLeft:10}}>
                    <Text style={{fontSize:18,color:"#5f695c",fontWeight:700}}>About Us</Text>
                    <Text style={{fontSize:15,color:'#757b74',fontWeight:500,marginTop:3}}>To Know More About Our Services</Text>
                </View> 
              </View>
            <AntDesign name="rightcircleo" size={25} color={'#6e716d'} style={{marginTop:5,marginLeft:48,left:10,top:5}}/>
        </View>
    </View>
  )
}

export default AccountOurServices

const styles = StyleSheet.create({
    offerContainer:{
        backgroundColor:'#ffffff',
        height:'auto',
        marginHorizontal:20,
        borderRadius:10,
        marginTop:10,
        padding:20

      },
})