import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const NotificationScreen = ({route}) => {
     const navigation = useNavigation()
        const previousScreen = route.params?.previousScreen || 'Home';
  return (
    <View style={styles.headerContainer}>
        <View style={{flexDirection:'row'}}>
            <Icon 
                name="arrowleft" 
                size={30} 
                color={'gray'} 
                style={{ fontWeight: 700 }} 
                onPress={() => navigation.navigate(previousScreen)} 
            />
            <Text style={styles.title}>Notifications</Text>
        </View>
      <Text style={{textAlign:'center',marginTop:50,fontSize:17}}>No Notifications</Text>
    </View>

  )
}

export default NotificationScreen

const styles = StyleSheet.create({
    title: {
        fontSize: 23,
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