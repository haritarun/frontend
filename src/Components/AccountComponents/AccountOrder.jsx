import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';


const AccountOrder = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.offerContainer} onPress={()=>{navigation.navigate('Doctors',{screen:'OrderScreen'})}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
              <AntDesign name="dropbox" size={35} color={'#6e716d'} style={{marginTop:5}}/>
              <View style={{flexDirection:'column',marginLeft:10}}>
                  <Text style={{fontSize:20,color:"#5f695c",fontWeight:700}}>Orders</Text>
                  <Text style={{fontSize:15,color:'#757b74',fontWeight:500,marginTop:3}}>Check Your Order and Histroy</Text>
              </View> 
            </View>
            <AntDesign name="rightcircleo" size={25} color={'#6e716d'} style={{marginTop:5,marginLeft:0,left:10,top:5}}/>
        </View>
    </TouchableOpacity>
  )
}

export default AccountOrder

const styles = StyleSheet.create({
    offerContainer:{
        backgroundColor:'#ffffff',
        height:'auto',
        marginHorizontal:20,
        borderRadius:10,
        marginTop:20,
        padding:20

      },
})