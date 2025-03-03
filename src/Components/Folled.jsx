import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Folled = () => {
  return (
     <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:25,paddingHorizontal:40}}>
                  <View style={{height:0.5,backgroundColor:'#959897',width:'30%',}}/>
                  <Text style={{color:'#6d716f'}}>Follow With</Text>
                  <View style={{height:0.5,backgroundColor:'#959897',width:'30%',}}/>
                </View>
                
                <View style={{paddingHorizontal:90,marginTop:30,flexDirection:'row',justifyContent:'space-between',marginBottom:150}}>
                  <TouchableOpacity style={styles.IconContainer}>
                    <FontAwesome6 name="whatsapp" size={25} color={'green'} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.IconContainer}>
                    <Fontisto name="facebook" size={25} color={'#1e42ab'} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.IconContainer}>
                    <Ionicons name="logo-instagram" size={25 } color={'#c30686'} />
                  </TouchableOpacity>
                </View>
     </View>
  )
}

export default Folled

const styles = StyleSheet.create({})