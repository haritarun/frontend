import {  Image, StyleSheet,Text, TouchableOpacity, View } from 'react-native'
import { useState,useLayoutEffect} from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const data =[
    {
        id:0,
        content:"We provide user friendly and user experiences."
    },
    {
        id:1, 
        content:"Real Time Chating With Ai Chat Bot"
    },
    {
        id:2,
        content:"Our services ensure quick and hassle-free delivery for your convenience."
    },
    {
        id:3,
        content:"Integrated maps make navigation and tracking effortless and efficient."
    },
]



const LandingPage = () => {
    const navigation = useNavigation()
    const [activePage,setActivePage]=useState(data[0]);

    const getNext=()=>{

        if( activePage.id < data.length-1 ){
            setActivePage(data[activePage.id+1])
        }
        else{
            navigation.navigate("Doctors",{screen:"register"})
        }
        
    }


    useLayoutEffect(()=>{
            navigation.getParent()?.setOptions({
                tabBarStyle:{display:'none'}
            })
    })

    const getSkip=()=>{
        navigation.navigate("Doctors",{screen:"register"})
    }
  return (
    <LinearGradient
      colors={['#76f3c1', '#ffffff']} 
      start={{ x: 0, y: 1 }} 
      end={{ x: 0, y: 0.3 }} 
      style={styles.container}
    >
        <View style={styles.imageContainer}> 
            {
                activePage.id === 0 && <LottieView source={require('../../../assets/UserFriendly.json')} autoPlay loop style={{height:500,width:500,marginTop:10}}/>
            }  
            {
                activePage.id === 1 && <LottieView source={require('../../../assets/aichatbot.json')} autoPlay loop style={{height:500,width:450,marginTop:10}}/>
            }  
            {
                activePage.id === 2 && <LottieView source={require('../../../assets/delivary.json')} autoPlay loop style={{height:500,width:400,marginTop:10}}/>
            }  
            {
                activePage.id === 3 && <LottieView source={require('../../../assets/all.json')} autoPlay loop style={{height:500,width:500,marginTop:10}}/>
            }  
            <Text style={styles.text}>{activePage.content}</Text>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.skipbutton} onPress={getSkip}>
                <Text style={styles.skiptext}>Skip</Text>
            </TouchableOpacity>
            {
                data.map((eachItem,index)=>(
                    
                    <Icon name={'dot-single'} 
                    style={styles.dotContainer}
                    color={index===activePage.id ? '#0b7eba':'gray'}
                    />
                    
                ))
            }
            <TouchableOpacity style={styles.skipbutton} onPress={getNext} >
                <Text style={styles.skiptext}>Next</Text>
            </TouchableOpacity>
        </View>
    </LinearGradient>
  )
}

export default LandingPage

const First =()=>{
    <Text>hi</Text>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between',
        paddingTop:80,
        paddingBottom:50
  },
    image:{
        height:300,
        width:400,
    },
    text:{
        
        color:'#224003',
        fontSize:30,
        fontFamily:'serif',
        textAlign:'center',
        marginHorizontal:40
        
    },
    imageContainer:{
        padding:10,
    },
    skipbutton:{
        backgroundColor:'#54b6e9',
        borderRadius:25,  
        marginHorizontal:10
    },
    skiptext:{
        color:'white',
        padding:12,
        fontSize:20,
        letterSpacing:2,
        fontFamily:'serif',
        fontWeight:700
    },
    buttonContainer:{ 
        flexDirection:'row',
        alignItems:'center',  
    },
    dotContainer:{
        fontSize:30,
        marginHorizontal:2,
    }
})