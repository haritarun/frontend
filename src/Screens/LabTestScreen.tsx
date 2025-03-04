import { StyleSheet,ScrollView,View,Text,TouchableOpacity} from 'react-native'
import React from 'react'
import HomeHeader from '../Components/HomeHeader';
import LinearGradient from 'react-native-linear-gradient';
import GeneralTest from '../Components/HomeScreenComponents/GeneralTest';
import Primium from '../Components/LabTestComponents/Primium';
import LabTestSwiper from '../Components/LabTestComponents/LabTestSwiper';
import HealthCheckUp from '../Components/LabTestComponents/HealthCheckUp';
import LabChat from '../Components/LabTestComponents/LabChat';
import Test from '../Components/LabTestComponents/Test';
import MenTest from '../Components/LabTestComponents/MenTest';
import WomenTest from '../Components/LabTestComponents/WomenTest';
import Folled from '../Components/Folled';
import OraganTest from '../Components/LabTestComponents/OraganTest';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const LabTestScreen = () => {
  return (
    <LinearGradient 
        colors={['#e4f4f0','#89eaa9']} 
        style={styles.container}
        locations={[0.7,1.0]}
        >
      <HomeHeader />
      <ScrollView>
        <Primium />
        <View style={styles.offerContainer}>
          <Text style={{textAlign:'center',marginTop:10,color:'#69726b',fontSize:15}}>
                        Test With
                      </Text>
                      <View style={{paddingHorizontal:50,marginTop:20,flexDirection:'row',justifyContent:'space-between',marginBottom:30}}>
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
        <GeneralTest />
        <LabTestSwiper />
        <HealthCheckUp />
        <LabChat />
        <Test />
        <OraganTest />
        <MenTest />
        <WomenTest />
        <Folled />
      </ScrollView>
    </LinearGradient>
  )
}

export default LabTestScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  offerContainer:{
    backgroundColor:'#edf7ef',
    height:'auto',
    marginHorizontal:20,
    borderRadius:10,
    marginTop:20,
    paddingHorizontal:17,
    paddingTop:20,
    
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
})