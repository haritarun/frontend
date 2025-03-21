import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const Help = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.offerContainer} onPress={()=>{navigation.navigate('Doctors',{screen:'Help'})}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
              <MaterialIcons name="help-circle" size={30} color={'#6e716d'} style={{marginTop:5,marginLeft:9}}/>
              <View style={{flexDirection:'column',marginLeft:10}}>
                  <Text style={{fontSize:20,color:"#5f695c",fontWeight:700}}>Help</Text>
                  <Text style={{fontSize:14,color:'#757b74',fontWeight:500,marginTop:3}}>For Any Queries</Text>
              </View> 
            </View>
            <AntDesign name="rightcircleo" size={25} color={'#6e716d'} style={{marginTop:5,top:5}}/>
        </View>
    </TouchableOpacity>
  )
}

export default Help

const styles = StyleSheet.create({
    offerContainer:{
        backgroundColor:'#ffffff',
        height:'auto',
        marginHorizontal:10,
        borderRadius:10,
        marginTop:20,
        padding:20,
      },
})