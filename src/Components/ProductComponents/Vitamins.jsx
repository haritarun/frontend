import { View, Text, StyleSheet, ScrollView,TouchableOpacity, Dimensions,Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React,{useState} from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';



const Data = [
  { 
    id: 1, 
    title: 'Vitamins A', 
    imageUrl: 'https://i0.wp.com/medika.life/wp-content/uploads/2021/05/Vitamins.jpg?fit=1200%2C856&ssl=1' 
  },
  { 
    id: 2, 
    title: 'Vitamins B', 
    imageUrl: 'https://premmedical.in/wp-content/uploads/2021/05/httpspremmedical.inproductaccu-chek-active%E2%80%A6-free-multicolor3.jpg' 
  },
  { 
    id: 3, 
    title: 'Vitamins C', 
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Yd62jT12XD7QNeDePnYF1pBjOkJ0RW3Iaw&s' 
  },
  { 
    id: 4, 
    title: 'Vitamins D', 
    imageUrl: 'https://vietsingdnd.com/wp-content/uploads/2023/12/20012024-Website-VietsingDND-Anh-bai-viet-TV-12.jpg' 
  },
  { 
    id: 5, 
    title: 'Vitamins E', 
    imageUrl: 'https://m.media-amazon.com/images/I/31dJHFzPjeL._AC_UF1000,1000_QL80_.jpg' 
  },
  { 
    id: 6, 
    title: 'Vitamins F', 
    imageUrl: 'https://img.freepik.com/free-vector/respiratory-care-technology-template-vector_53876-119563.jpg' 
  },
  { 
    id: 7, 
    title: 'Vitamins K', 
    imageUrl: 'https://m.media-amazon.com/images/I/71s9AkrXk7L.jpg' 
  },
  { 
    id: 8, 
    title: 'Vitamins P', 
    imageUrl: 'https://m.media-amazon.com/images/I/71s9AkrXk7L.jpg' 
  },
  { 
    id: 9, 
    title: 'Vitamins A', 
    imageUrl: 'https://i0.wp.com/medika.life/wp-content/uploads/2021/05/Vitamins.jpg?fit=1200%2C856&ssl=1' 
  },
  
];
  
const Vitamins = () => {
  const [isShow,setShow]= useState(false)
  const intialShow = 4
  const filterData = isShow ? Data : Data.slice(0,intialShow)
  return (
    <View style={styles.offerContainer}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{color:"#456b52",fontWeight:700,fontSize:17}}>Vitamins</Text>
            <TouchableOpacity onPress={()=>setShow(!isShow)}>
                <Text style={{fontSize:15,fontStyle:'normal',color:'#07666d',fontWeight:600}}>{isShow ? 'Show Less' : 'Show More'}</Text>
            </TouchableOpacity>
        </View>
        <View style={{flexWrap:'wrap',justifyContent:'space-between',flexDirection:'row',marginHorizontal:20}}>
            {
              filterData.map(eachItem=>(
                  <TouchableOpacity style={{width:'28%',marginTop:40,justifyContent:'center',alignItems:'center'}}>
                    <Image source={{uri:eachItem.imageUrl,height:100,width:'100%'}} style={{borderRadius:20}}/>
                    <Text style={{textAlign:'center',marginTop:10,fontWeight:'bold'}}>{eachItem.title}</Text>
                  </TouchableOpacity>
              ))
            }
        </View>
    </View>
  )
}

export default Vitamins

const styles = StyleSheet.create({
    offerContainer:{
        backgroundColor:'ffffff',
        height:'auto',
        
        borderRadius:10,
        marginTop:20,
        paddingHorizontal:17,
        paddingTop:20,
    },
      
      vitaminName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFF',
        marginTop: 10,
        textAlign: 'center',
      },
      vitaminContent: {
        fontSize: 14,
        color: '#FFF',
        marginTop: 10,
        textAlign: 'center',
        lineHeight: 20,
      },
      icon: {
        marginBottom: 10,
      },
      wrapper:{
        height:200,
        marginTop:20
      },
      
})