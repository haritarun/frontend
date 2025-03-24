import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';


const AccountOurServices = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.offerContainer} onPress={()=>{navigation.navigate('Doctors',{screen:'ServicesAll'})}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
                <MaterialCommunityIcons  name="users" size={30} color={'#6e716d'} style={{marginTop:5}}/>
                <View style={{flexDirection:'column',marginLeft:10}}>
                    <Text style={{fontSize:18,color:"#5f695c",fontWeight:700}}>Our Services</Text>
                    <Text style={{fontSize:15,color:'#757b74',fontWeight:500,marginTop:3}}>To Know More About Our Services</Text>
                </View> 
              </View>
            <AntDesign name="rightcircleo" size={25} color={'#6e716d'} style={{marginTop:5,marginLeft:48,left:10,top:5}}/>
        </View>
    </TouchableOpacity>
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
        padding:20,
      },
})