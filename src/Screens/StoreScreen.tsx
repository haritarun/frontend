import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

const StoreScreen = ({route}) => {
    const navigation = useNavigation()
    const previousScreen = route.params?.previousScreen || 'Home';
    return (
        <View style={styles.headerContainer}>
                <Icon 
                    name="arrowleft" 
                    size={30} 
                    color={'gray'} 
                    style={{ fontWeight: 700 }} 
                    onPress={() => navigation.navigate(previousScreen)} 
                />
                <Text style={styles.title}>Location</Text>
            </View>
    )
}

export default StoreScreen

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'gray',
        marginLeft: 15
      },
      headerContainer: {
        height: 70,
        width: 'auto',
        backgroundColor: '#fff',
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        flexDirection: 'row',
        paddingTop: 20,
        paddingLeft: 20,
      },
})