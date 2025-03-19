import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Search from '../Components/Search';

const CartScreen = ({route}) => {
    const navigation = useNavigation()
    const previousScreen = route.params?.previousScreen || 'Home';

    const getNavigate=()=>{
        navigation.navigate('Product')
    }
  return (
    <View style={styles.headerContainer}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <View style={{height:30,width:30,borderRadius:50,borderWidth:1,justifyContent:'center',alignItems:'center'}}>
                    <Icon 
                        name="arrowleft" 
                        size={20} 
                        color={'gray'} 
                        style={{ fontWeight: 700 }} 
                        onPress={() => navigation.navigate(previousScreen)} 
                    />
                </View>
                <Text style={styles.title}>Cart</Text>
                <Text style={{color:'#ed9a3a',fontWeight:'bold'}} onPress={()=>{getNavigate()}}>Add Items</Text>
          </View>
            <Search />
          <View style={{marginTop:100}}>
                <Text style={{textAlign:'center'}}>
                    Your Cart is Empty
                </Text>
          </View>
        </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'gray',
        
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
      cartIcon:{
        height:300,
        width:300
      }
})