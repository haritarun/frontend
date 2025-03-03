import { StyleSheet,Text,View,Image, TouchableOpacity, FlatList ,ScrollView} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import HomeHeader from '../Components/HomeHeader';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Services from '../Components/HomeScreenComponents/Services';
import HomeScreenSlider from '../Components/HomeScreenComponents/HomeScreenSlider';
import EveryDayEsstensial from '../Components/HomeScreenComponents/EveryDayEsstensial';
import Offer from '../Components/HomeScreenComponents/Offer';
import Brand from '../Components/HomeScreenComponents/Brand';
import GeneralTest from '../Components/HomeScreenComponents/GeneralTest';
import HealthArticals from '../Components/HomeScreenComponents/HealthArticals';
import Folled from '../Components/Folled';


const Data=[
  {
    id:1,
    imageUrl:'https://images.aeonmedia.co/images/afef287f-dd6f-4a6a-b8a6-4f0a09330657/sized-kendal-l4ikccachoc-unsplash.jpg?width=3840&quality=75&format=auto',
    title:'services'
  },
  {
    id:2,
    imageUrl:'https://images.aeonmedia.co/images/afef287f-dd6f-4a6a-b8a6-4f0a09330657/sized-kendal-l4ikccachoc-unsplash.jpg?width=3840&quality=75&format=auto',
    title:'services'
  },
  {
    id:3,
    imageUrl:'https://images.aeonmedia.co/images/afef287f-dd6f-4a6a-b8a6-4f0a09330657/sized-kendal-l4ikccachoc-unsplash.jpg?width=3840&quality=75&format=auto',
    title:'services'
  },
  {
    id:4,
    imageUrl:'https://images.aeonmedia.co/images/afef287f-dd6f-4a6a-b8a6-4f0a09330657/sized-kendal-l4ikccachoc-unsplash.jpg?width=3840&quality=75&format=auto',
    title:'services'
  },
  {
    id:5,
    imageUrl:'https://images.aeonmedia.co/images/afef287f-dd6f-4a6a-b8a6-4f0a09330657/sized-kendal-l4ikccachoc-unsplash.jpg?width=3840&quality=75&format=auto',
    title:'services'
  },
  {
    id:6,
    imageUrl:'https://images.aeonmedia.co/images/afef287f-dd6f-4a6a-b8a6-4f0a09330657/sized-kendal-l4ikccachoc-unsplash.jpg?width=3840&quality=75&format=auto',
    title:'services'
  },
]



const HomeScreen = () => {
  return (
    <LinearGradient 
    colors={['#e4f4f0','#89eaa9']} 
    style={styles.container}
    locations={[0.7,1.0]}
    >
      <HomeHeader />
      <ScrollView>
      
        <View style={styles.offerContainer}>
            <View style={{flexDirection:'row'}}>
              <TouchableOpacity style={styles.offerOrderContainer}>
                <View style={styles.offer}>
                  <Text style={{textAlign:'center',marginVertical:2,color:'#e4f4e9'}}>50% Off</Text>
                </View>
                <View style={{flexDirection:'row',width:10,justifyContent:'space-between',paddingHorizontal:5,marginTop:20,marginBottom:10,}}>
                    <Text style={{fontSize:19,fontWeight:900,width:80,marginTop:10,color:"#4e6b57"}}>
                      Order Medicines
                    </Text>
                    <Image source={{uri:"https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg",
                      height:80,
                      width:60,
                      
                    }} style={{borderRadius:10,marginRight:5,marginLeft:15,marginTop:-5}} 
                    />
                  </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.offerOrderContainer}>
                <View style={styles.offer}>
                  <Text style={{textAlign:'center',marginVertical:2,color:'#e4f4e9'}}>50% Off</Text>
                </View>
                <View style={{flexDirection:'row',width:10,justifyContent:'space-between',paddingHorizontal:5,marginTop:20,marginBottom:10,}}>
                    <Text style={{fontSize:19,fontWeight:900,width:80,marginTop:10,color:"#4e6b57"}}>
                      Lab Reports
                    </Text>
                    <Image source={{uri:"https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg",
                      height:80,
                      width:60,
                      
                    }} style={{borderRadius:10,marginRight:5,marginLeft:15,marginTop:-5}} 
                    />
                  </View>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:15,paddingHorizontal:40}}>
              <View style={{height:0.5,backgroundColor:'#ccd7cf',width:'40%',}}/>
              <Text style={{color:'#abb5ad'}}>Or</Text>
              <View style={{height:0.5,backgroundColor:'#ccd7cf',width:'40%',}}/>
            </View>
            <Text style={{textAlign:'center',marginTop:10,color:'#69726b',fontSize:15}}>
              Order with
            </Text>
            <View style={{paddingHorizontal:50,marginTop:20,flexDirection:'row',justifyContent:'space-between'}}>
              <TouchableOpacity style={styles.IconContainer}>
                <FontAwesome6 name="whatsapp" size={21} color={'green'} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.IconContainer}>
                <Fontisto name="paperclip" size={20} color={'#737d7c'} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.IconContainer}>
                <Ionicons name="call-sharp" size={20} color={'#737d7c'} />
              </TouchableOpacity>
            </View>
        </View>
        <View style={styles.Serviescontainer}>
          <Text style={{marginLeft:20,marginTop:20,fontSize:17,fontWeight:700,color:'#074614'}}>Our Services</Text>
        
          <FlatList
            data={Data}
            renderItem={({ item }) => <Services data={item} /> }
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <HomeScreenSlider />
      
        <EveryDayEsstensial />
        
        <Offer />
        <Brand />
        <GeneralTest />
        <HealthArticals />
        <Folled />
        </ScrollView>
        
    </LinearGradient>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  offerContainer:{
    backgroundColor:'#edf7ef',
    height:280,
    marginHorizontal:20,
    borderRadius:10,
    marginTop:20,
  },
  offerOrderContainer:{
    height:'auto',
    width:180,
    borderWidth:2,
    borderRadius:8,
    borderColor:'#bbc6bd',
    marginTop:10,
    marginLeft:11,
  },
  offer:{
    marginLeft:80,
    marginTop:10,
    backgroundColor:'orange',
    width:'auto',
    marginRight:5,
    borderRadius:5,

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
  Serviescontainer:{
    backgroundColor:'#edf7ef',
    height:200,
    marginHorizontal:20,
    borderRadius:10,
    marginTop:20,
  },
})