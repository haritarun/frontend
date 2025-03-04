import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/Feather';

const Help = () => {
  return (
    <View style={styles.offerContainer}>
        <View style={{flexDirection:'row'}}>
            <MaterialIcons name="help-circle" size={40} color={'#6e716d'} style={{marginTop:5}}/>
            <View style={{flexDirection:'column',marginLeft:20}}>
                <Text style={{fontSize:20,color:"#5f695c",fontWeight:700}}>Help</Text>
                <Text style={{fontSize:15,color:'#757b74',fontWeight:500,marginTop:3}}>For Any Queries</Text>
            </View> 
            <AntDesign name="rightcircleo" size={30} color={'#6e716d'} style={{marginTop:5,marginLeft:170,top:5}}/>
        </View>
    </View>
  )
}

export default Help

const styles = StyleSheet.create({
    offerContainer:{
        backgroundColor:'#edf7ef',
        height:'auto',
        marginHorizontal:20,
        borderRadius:10,
        marginTop:20,
        padding:20,
      },
})