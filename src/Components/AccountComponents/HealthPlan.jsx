import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HealthPlan = () => {
  return (
    <View style={styles.offerContainer}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
              <MaterialIcons name="health-and-safety" size={35} color={'#6e716d'} style={{marginTop:5,marginLeft:9}}/>
              <View style={{flexDirection:'column',marginLeft:10}}>
                  <Text style={{fontSize:19,color:"#5f695c",fontWeight:700}}>Health Plans</Text>
                  <Text style={{fontSize:15,color:'#757b74',fontWeight:500,marginTop:3}}>Check All Health Plans</Text>
              </View> 
            </View>
            <AntDesign name="rightcircleo" size={25} color={'#6e716d'} style={{marginTop:5,marginLeft:130,top:5}}/>
        </View>
    </View>
  )
}

export default HealthPlan

const styles = StyleSheet.create({
    offerContainer:{
        backgroundColor:'#ffffff',
        height:'auto',
        marginHorizontal:10,
        borderRadius:10,
        marginTop:10,
        padding:20,
      },
})