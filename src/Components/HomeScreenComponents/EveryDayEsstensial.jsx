import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const Data=[
    {
        imageUrl:'https://www.cabotcorp.com/-/media/images/interface/body-images/solutions/applications/photo-pharmaceuticals-and-personal-care-tablet-production.jpg?rev=607bbed7d41c4916adf55b6d7a591a60',
        title:'Personal Care'
    },
    {
        imageUrl:'https://png.pngtree.com/thumb_back/fw800/background/20220921/pngtree-reviving-school-vibes-essential-stationeries-on-white-wooden-backdrop-photo-image_33875726.jpg',
        title:'Stationery'
    },
    {
        imageUrl:'https://media.gettyimages.com/id/521704389/photo/prescription-drugs.jpg?s=612x612&w=gi&k=20&c=s63GdoBdjfnl1hTZ1-Fjdij-tsb6rF1DbfStvjHX15o=',
        title:'usehold'
    },
    {
        imageUrl:'https://bakson-production.s3.ap-south-1.amazonaws.com/pub/media/catalog/product/cache/d4bd18e21a1798ce1454755b1950e778/f/g/fgms100049_1.jpg',
        title:'Baby Care'
    },
    {
        imageUrl:'https://m.media-amazon.com/images/I/81jhz7-iyfL.jpg',
        title:'Skin Care'
    },
    {
        imageUrl:'https://5.imimg.com/data5/SELLER/Default/2023/6/320341546/EK/CU/OD/188947807/women-care-tablet.jpg',
        title:'Women Care'
    },
    {
        imageUrl:'https://media.post.rvohealth.io/wp-content/uploads/sites/3/2022/05/eye-health-vitamins-thumb.jpg',
        title:'Vitamins'
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
                            <Text style={{marginLeft:10,marginTop:10}}>{eachItem.title}</Text>
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