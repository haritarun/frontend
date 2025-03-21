import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const AboutUs = () => {
     const navigation = useNavigation()
       
  return (
    <View style={styles.headerContainer}>
        <View style={{flexDirection:'row'}}>
            <Icon 
                name="arrowleft" 
                size={22} 
                color={'gray'} 
                style={{ fontWeight: 700 }} 
                onPress={() => navigation.navigate('Account')} 
            />
            <Text style={styles.title}>FAQ</Text>
        </View>
      
    </View>

  )
}

export default AboutUs

const styles = StyleSheet.create({
    title: {
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'gray',
        marginLeft: 15
      },
      headerContainer: {
        width: 'auto',
        backgroundColor: '#ffffff',
        height:'100%',
        flexDirection: 'column',
        paddingTop: 20,
        paddingLeft:10,
        paddingRight:10
      },
})