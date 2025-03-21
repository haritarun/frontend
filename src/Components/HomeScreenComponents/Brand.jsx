import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import ImageCard from './ImageCard'




const brands=[
    {
      id:1,
      imageUrl:'https://static.wixstatic.com/media/6116de_59fb9393806c4c9eb8f5782aa469f0ae~mv2.jpg/v1/fill/w_480,h_322,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/6116de_59fb9393806c4c9eb8f5782aa469f0ae~mv2.jpg',
      title:'Dove'
    },
    {
      id:2,
      imageUrl:'https://www.netmeds.com/images/product-v1/400x400/379578/cetaphil_syndet_bar_75gm_45420_0_3.webp',
      title:'Cetaphil'
    },
    {
      id:3,
      imageUrl:'https://www.cerave.com/-/media/project/loreal/brand-sites/cerave/americas/us/products-v4/moisturizing-cream/cerave_moisturizing_cream_16oz_jar_front-700x875-v4.jpg?rev=db6e3c22250e4928bc749dd2c207de5b&w=900&hash=E68F77D279494CD09396613CB8496EB7',
      title:'CeraVe'
    },
    {
      id:4,
      imageUrl:'https://images.ctfassets.net/aub2fvcyp2t8/2KI14YhORnDh2caKjEM5q0/265e671b61eec588add9aac4cd4b70a9/water_gel_50g_front-en-in',
      title:'Neutrogena'
    },
    {
      id:5,
      imageUrl:'https://images-cdn.ubuy.co.in/65dda03ba6c6283324107379-dial-liquid-hand-soap-ocean-splash-7-5.jpg',
      title:'Dial'
    },
    {
      id:6,
      imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDfFtL9we7rinEsvVGCN-zUdTekeFRy3-s0w&s',
      title:'Hibiclens'
    },
]

const Brand = () => {
  return (
    <View style={styles.offerContainer}>
        <Text style={{color:'#456b52',fontSize:18,fontWeight:700}}>Shop By Brand</Text>
        <FlatList 
        data={brands}
        renderItem={({item})=><ImageCard data={item}/>}
        horizontal={true}
        showsHorizontalScrollIndicator={false}/>
    </View>
  )
}

export default Brand

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