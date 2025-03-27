import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useEffect,useState} from 'react'
import Icon from 'react-native-vector-icons/Entypo';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import useLocationStore from './GlobalState/LocationStore';
import axios from 'axios';

const HomeHeader = ({item}) => {
    const navigation = useNavigation();
    const [placeholder, setPlaceholder] = useState('');
      const [textIndex, setTextIndex] = useState(0);
      const {currentLocation,setCurrentLocation} = useLocationStore()
      
      const placeholderOptions = [
          'Enter Your Location...',
          'Search Nearby Places...',
          'Search Any Products...',
          'Add a Landmark...',
          'Type Your Destination...'
      ];
    
      useEffect(() => {
        let text = placeholderOptions[textIndex];
        let charIndex = 0;
    
        const typeEffect = setInterval(() => {
          if (charIndex < text.length) {
            setPlaceholder(text.slice(0, charIndex + 1));
            charIndex++;
          } else {
            clearInterval(typeEffect);
    
            
            setTimeout(() => {
              setTextIndex((prevIndex) => (prevIndex + 1) % placeholderOptions.length);
              setPlaceholder('');
            }, 1500); 
          }
        }, 100); 
    

        getFetchedLocation()
        return () => clearInterval(typeEffect);
      }, [textIndex]);

      const getFetchedLocation =async()=>{
        try{
          if(Object.keys(currentLocation).length === 0){
            const response = await axios.get('http:localhost:3000/getLocation')
            if (response.status===200){
              setCurrentLocation(response.data.data)
            }
          }
          
        }
        catch(e){
          console.log(e)
        }
      }

    return (
        <>
            <View style={styles.HeaderContainer}>
              <TouchableOpacity style={{marginTop:5,flexDirection:'row'}} onPress={() => {
              navigation.navigate('Doctors', { screen: 'LocationScreen', params: { previousScreen: item } });
              }} >
              <Icon name="location-pin" size={20} color={'green'} />
                  {
                    Object.keys(currentLocation).length === 0 ? 
                    <Text style={styles.textContainer}>Add Location</Text> :
                    <Text style={{fontSize:17,fontWeight:700,color:'#373734'}}>{currentLocation.street},{currentLocation.city} {currentLocation.pincode}</Text> 
                    
                  }
              </TouchableOpacity>
              <View style={styles.notificationContainer}>
                  <TouchableOpacity style={styles.IconContainer} onPress={()=>{
                    navigation.navigate('Doctors',{screen:'StoreScreen',params:{previousScreen:item}})
                  }}>
                      <FontAwesome6 name="store" size={20} color={'#737d7c'} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.IconContainer} onPress={()=>{
                    navigation.navigate('Doctors',{screen:'NotificationScreen',params:{previousScreen:item}})
                  }}>
                  <Icon name="notification" size={20} color={'#737d7c'}/>
                  </TouchableOpacity>
            </View>
        </View>

        <View style={{flexDirection:'row',alignItems:'center',position:'fixed',top:0,left:0,right:0,zIndex:50,marginBottom:10}}>
            <View style={styles.container}>
                <TextInput
                    placeholder={placeholder}
                    style={styles.input}
                />
                <Feather name="search" size={20} color="#888" style={styles.icon} />
            </View>
            <TouchableOpacity onPress={()=>{
                    navigation.navigate('Doctors',{screen:'CartScreen',params:{previousScreen:item}})
                  }}>
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

        borderRadius: 8, 
        paddingHorizontal: 10, 
        paddingVertical: 5, 
        width: '79%',
        marginLeft:20,
        marginTop: 10, 
        borderColor: '#32CE7A',
     
      },
      icon: {
        marginRight: 10, 
      },
      input: {
        flex: 1, 
        fontSize: 18,
        paddingVertical: 8, 
        fontWeight:500
      },
})