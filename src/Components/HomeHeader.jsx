import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Feather from 'react-native-vector-icons/Feather';


const HomeHeader = () => {
  return (
    <>
        <View style={styles.HeaderContainer}>
        <TouchableOpacity style={{marginTop:5,flexDirection:'row'}}>
        <Icon name="location-pin" size={20} color={'green'} />
            <Text style={styles.textContainer}>Add Location</Text> 
            
        </TouchableOpacity>
        <View style={styles.notificationContainer}>
            <TouchableOpacity style={styles.IconContainer}>
                <FontAwesome6 name="store" size={20} color={'#737d7c'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconContainer}>
            <Icon name="notification" size={20} color={'#737d7c'}/>
            </TouchableOpacity>
        </View>
    </View>

    <View style={{flexDirection:'row',alignItems:'center',position:'fixed',top:0,left:0,right:0,zIndex:50,marginBottom:10}}>
        <View style={styles.container}>
        
            <TextInput
                placeholder="Enter Something"
                style={styles.input}
            />
            <Feather name="search" size={20} color="#888" style={styles.icon} />
        </View>
        <TouchableOpacity>
            <FontAwesome6 name='cart-shopping' size={28} color={'#a0a9a8'} style={{marginLeft:15,marginTop:10}}/>
        </TouchableOpacity>
    </View>
    </>
  )
}


export default HomeHeader

const styles = StyleSheet.create({
    HeaderContainer:{

        flexDirection:'row',
        paddingHorizontal:15,
        paddingTop:15,
        justifyContent:'space-between'
    },
    notificationContainer:{
        flexDirection:'row', 
    },
    IconContainer:{
        height:35,
        width:35,
        borderRadius:'50%',
        borderColor:'#bec5c4',
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:17,
    },
    textContainer:{
        fontSize:15,
        color:'#737d7c',
        marginTop:1,

    },
    container: {
        flexDirection: 'row',
        alignItems: 'center', 
        borderWidth: 1, 
        borderColor: '#ccc',
        borderRadius: 8, 
        paddingHorizontal: 10, 
        paddingVertical: 5, 
        width: '79%',
        marginLeft:20,
        marginTop: 10, 
      },
      icon: {
        marginRight: 10, 
      },
      input: {
        flex: 1, 
        fontSize: 16,
        paddingVertical: 8, 
      },
})