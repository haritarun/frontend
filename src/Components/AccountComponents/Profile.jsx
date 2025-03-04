import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={styles.offerContainer} >
        <View style={{flexDirection:'row',justifyContent:'start',}}>
            <Image source={{uri:'https://images.aeonmedia.co/images/afef287f-dd6f-4a6a-b8a6-4f0a09330657/sized-kendal-l4ikccachoc-unsplash.jpg?width=3840&quality=75&format=auto',height:70,width:70}} 
            style={{borderRadius:10}}/>
            <View style={{marginTop:5,marginLeft:20,marginTop:20}}>
                <Text style={{fontSize:17,color:'#0c5b41',fontWeight:700}}>Welcome User</Text>
                <Text style={{fontSize:16,color:"#868d8b",fontWeight:700}}>tarunbommana798@gmail.com</Text>
            </View>
        </View>
        <TouchableOpacity style={{borderWidth:2,borderColor:'#57aa8f',padding:10,marginTop:20,borderRadius:10,}}>
            <Text style={{textAlign:'center',color:'#57aa8f',fontWeight:700,fontSize:18,}}>Create Profile</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    offerContainer:{
        backgroundColor:'#edf7ef',
        height:'auto',
        marginHorizontal:20,
        borderRadius:10,
        marginTop:20,
        paddingHorizontal:17,
        paddingTop:20,
        
        paddingVertical:20
      },
})