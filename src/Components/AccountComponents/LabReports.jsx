import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';


const LabReports = () => {
  return (
    <View style={styles.offerContainer}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
              <AntDesign name="dropbox" size={35} color={'#6e716d'} style={{marginTop:5,marginLeft:3}}/>
              <View style={{flexDirection:'column',marginLeft:10}}>
                  <Text style={{fontSize:20,color:"#5f695c",fontWeight:700}}>Lab Reports </Text>
                  <Text style={{fontSize:15,color:'#757b74',fontWeight:500,marginTop:3}}>Check Your Order and Histroy</Text>
              </View> 
            </View>
            <AntDesign name="rightcircleo" size={25} color={'#6e716d'} style={{marginTop:5,marginLeft:80,left:10,top:5}}/>
        </View>
    </View>
  )
}

export default LabReports

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