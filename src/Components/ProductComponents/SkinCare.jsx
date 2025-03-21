import { StyleSheet, Text, View,ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation  } from '@react-navigation/native'

const brands=[
    {
      id:1,
      imageUrl:'https://m.media-amazon.com/images/I/61eeFlpzxRL._AC_UF1000,1000_QL80_.jpg',
      title:'Posay'
    },
    {
      id:2,
      imageUrl:'https://m.media-amazon.com/images/I/51fDijePdrL.jpg',
      title:'Aveeno'
    },
    {
      id:3,
      imageUrl:'https://images-static.nykaa.com/media/catalog/product/e/f/efeabb34006000028705_2.jpg?tr=w-500',
      title:'Eucerin'
    },
    {
      id:4,
      imageUrl:'https://m.media-amazon.com/images/I/710MG96UH4L.jpg',
      title:'Vichy'
    },
    {
      id:5,
      imageUrl:'https://m.media-amazon.com/images/I/41uRQRV609L.jpg',
      title:'SkinCeuticals'
    },
    {
      id:6,
      imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZC5sgodT_WSUDrvBcGUrF2V4ZFzW_CHabTA&s',
      title:'CeraVe'
    },
]

const SkinCare = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.offerContainer}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{color:'#456b52',fontSize:18,fontWeight:700}}>Skin Care</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('Doctors',{screen:'SkinCare'})}}>
            <Text style={{fontWeight:700,}}>View All</Text>
        </TouchableOpacity>
        </View>
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}>
            {
                brands.map(eachItem=>(
                    <View style={{marginTop:10}}>
                        <View style={{height:170,width:170,borderColor:'#e5e9e6',borderWidth:1.6,borderTopLeftRadius:'50%',borderTopRightRadius:'50%',justifyContent:'center',alignItems:'center',marginRight:20,borderBottomLeftRadius:'45%',borderBottomRightRadius:'6%'}}>
                            <Image source={{uri:eachItem.imageUrl,height:100,width:100}}/>
                            <Text style={{marginTop:10,color:'#456b52',fontWeight:'bold',}}>{eachItem.title}</Text>
                        </View>
                    </View>
                ))
            }
        </ScrollView>  
    </View>
  )
}

export default SkinCare

const styles = StyleSheet.create({
    offerContainer:{
        backgroundColor:'#ffffff',
        height:'auto',
        borderRadius:10,
        marginTop:20,
        paddingHorizontal:17,
        paddingTop:20,
    },
})