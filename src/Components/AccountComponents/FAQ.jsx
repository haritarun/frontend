import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';


const FAQ = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.offerContainer} onPress={()=>{navigation.navigate('Doctors',{screen:"FAQAll"})}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
              <MaterialCommunityIcons  name="chat-question-outline" size={35} color={'#6e716d'} style={{marginTop:5}}/>
              <View style={{flexDirection:'column',marginLeft:10}}>
                  <Text style={{fontSize:20,color:"#5f695c",fontWeight:700}}>FAQ</Text>
                  <Text style={{fontSize:10,color:'#757b74',fontWeight:500,marginTop:3}}>Just For FAQ Questions</Text>
              </View> 
            </View>
            <AntDesign name="rightcircleo" size={25} color={'#6e716d'} style={{marginTop:5,marginLeft:110,left:10,top:5}}/>
        </View>
    </TouchableOpacity>
  )
}

export default FAQ

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