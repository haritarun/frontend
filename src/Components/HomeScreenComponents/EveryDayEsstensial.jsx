import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const Data=[
    {
        imageUrl:'https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg',
        title:'shop'
    },
    {
        imageUrl:'https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg',
        title:'shop'
    },
    {
        imageUrl:'https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg',
        title:'shop'
    },
    {
        imageUrl:'https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg',
        title:'shop'
    },
    {
        imageUrl:'https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg',
        title:'shop'
    },
    {
        imageUrl:'https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg',
        title:'shop'
    },
    {
        imageUrl:'https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg',
        title:'shop'
    },
    
]

const EveryDayEsstensial = () => {
    const navigation = useNavigation()
    const getNavigate =()=>{
        
            navigation.navigate('Doctors', {
              screen: 'EveryDayEssentialsAll',
             
            });
        
    }
  return (
    <View style={styles.offerContainer}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{color:"#456b52",fontWeight:700,fontSize:17}}>Every Day Essentials</Text>
            <TouchableOpacity onPress={()=>{getNavigate()}}>
                <Text style={{fontSize:15,fontStyle:'normal',color:'#07666d',fontWeight:600}}>View All</Text>
            </TouchableOpacity>
        </View>
        <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row',flexWrap:'wrap'}}>
            {
                Data.map(eachItem=>{
                    return(
                        <View style={{flexDirection:'column',marginTop:29}}>
                            <Image source={{uri:eachItem.imageUrl,height:100,width:100}} style={{borderRadius:20}}/>
                            <Text style={{marginLeft:10}}>{eachItem.title}</Text>
                        </View>
                    )
                })
            }
        </View>
    </View>
  )
}

export default EveryDayEsstensial

const styles = StyleSheet.create({
    offerContainer:{
        backgroundColor:'#ffffff',
        height:'auto',
        marginHorizontal:20,
        borderRadius:10,
        marginTop:20,
        
        paddingHorizontal:20,
        paddingTop:15,
      },
})