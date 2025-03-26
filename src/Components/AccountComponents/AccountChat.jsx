import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const AccountChat = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.offerContainer} onPress={()=>{navigation.navigate('Doctors',{screen:'ImageScreen'})}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
            <Ionicons name="chatbubble-ellipses-outline" size={30} color={'#6e716d'} style={{marginTop:5}}/>
            <View style={{flexDirection:'column',marginLeft:10}}>
                <Text style={{fontSize:19,color:"#5f695c",fontWeight:700}}>Chat With Us</Text>
                <Text style={{fontSize:15,color:'#757b74',fontWeight:500,marginTop:3}}>For Better UnderStading</Text>
            </View> 
            </View>
            <AntDesign name="rightcircleo" size={25} color={'#6e716d'} style={{marginTop:5,marginLeft:110,left:10,top:5}}/>
        </View>
    </TouchableOpacity>
  )
}

export default AccountChat

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