import { StyleSheet, Text, TouchableOpacity, View,Animated, Alert } from 'react-native'
import React,{useEffect,useState,useRef} from 'react'
import Entypo from 'react-native-vector-icons/Feather';
import axios from 'axios';
import { useNavigation,useIsFocused } from '@react-navigation/native';


const BottomCart = () => {
    const navigation = useNavigation()
    const [cartList,setCartList]=useState([])
    const slideAnim = useRef(new Animated.Value(0)).current;
    
    

    useEffect(() => {
        fetchedList();
    });

    useEffect(() => {
        if (cartList.length > 0) {
            Animated.sequence([
                Animated.timing(slideAnim, {
                    toValue: -10,
                    duration: 100,
                    useNativeDriver: true
                }),
                Animated.spring(slideAnim, {
                    toValue: 0,
                    friction: 3,
                    useNativeDriver: true
                })
            ]).start();
        }
    }, [cartList.length]); 

    
    
    const fetchedList = async()=>{
        try{
            const response = await axios.get('http://localhost:3000/getcartdetailes')
            if (response.status===200){
                const fetchedList = response.data.data
                setCartList([...fetchedList])
            }
        }catch(e){
            console.log('something went wrong',e)
        }
    }

    const total = cartList.reduce((sum,item) => sum+item.price*item.quantity,0)
    


  return (
    <View style={{flexDirection:'row',position:'absolute',bottom:8,zIndex:1,height:80,backgroundColor:'#ebffe9',width:'95%',marginHorizontal:10,borderRadius:20,paddingHorizontal:20,justifyContent:'space-between',alignItems:'center'}}>

      <View style={{flexDirection:'row'}}>
        <Entypo name="shopping-cart" size={30} style={{marginTop:10}} color={'#7d797a'}/>
        <View style={{marginLeft:14,marginTop:5}}>
            <Text style={{fontSize:17,fontWeight:700,color:"#7d797a"}}>Items {cartList.length}</Text>
            <Text style={{marginTop:5,fontSize:20,fontWeight:700}}>{total}.00</Text>
        </View>
      </View>
      <TouchableOpacity style={{backgroundColor:'#757373',padding:12,borderRadius:15}} onPress={()=>{navigation.navigate('Doctors',{screen:'CartScreen'})}}>
            <Text style={{color:'white',fontWeight:700,fontSize:16}}>View Cart</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BottomCart

const styles = StyleSheet.create({})