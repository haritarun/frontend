import { StyleSheet,ScrollView,View,Text,TouchableOpacity,Linking,Alert} from 'react-native'
import React,{useState} from 'react'
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
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';

const LabTestScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
  
    const toggleModal = () => setModalVisible(!isModalVisible);
    
  const getWhatsapp = () => {
    const phoneNumber = '+919010144168'; 
    const message =('Hello, I’d like to chat with you!');
    const url = `whatsapp://send?phone=${phoneNumber}&text=${message}`;
  
    Linking.canOpenURL(url)
        .then((supported) => {
            if (supported) {
                Linking.openURL(url);
            } else { 
                Linking.openURL(`https://wa.me/${phoneNumber}?text=${message}`);
            }
        })
        .catch((err) => {
            console.error('Error:', err);
            Alert.alert('Error', 'An unexpected error occurred.');
        });
  };

  const getPhone =()=>{
    const phoneNumber = '+919010144168'
    const url = `tel:${phoneNumber}`
  
    Linking.canOpenURL(url)
    .then((Supported)=>{
      if (Supported){
        Linking.openURL(url)
      }
      else{
        Alert.alert("App Not Intalled In This Device")
      }
    })
    .catch((err)=>{
      Alert.alert("something went wrong",err)
    })
  }

  
    // Open Camera
    const openCamera = () => {
      const options = {
        mediaType: 'photo',
        quality: 1,
      };
      launchCamera(options, (response) => {
        if (response.didCancel) {
          console.log('User cancelled camera.');
        } else if (response.errorMessage) {
          console.error('Camera Error: ', response.errorMessage);
        } else {
          console.log('Camera Response:', response);
        }
      });
    };
  
    // Open Gallery
    const openGallery = () => {
      const options = {
        mediaType: 'photo',
        quality: 1,
      };
      launchImageLibrary(options, (response) => {
        if (response.didCancel) {
          console.log('User cancelled gallery selection.');
        } else if (response.errorMessage) {
          console.error('Gallery Error: ', response.errorMessage);
        } else {
          console.log('Gallery Response:', response);
        }
      });
    };

  return (
    <LinearGradient 
        colors={['#ffffff','#ffffff']} 
        style={styles.container}
        locations={[0.7,1.0]}
        >
      <HomeHeader item={'LabTest'}/>
      <ScrollView>
        <Primium />
        <View style={styles.offerContainer}>
          <Text style={{textAlign:'center',marginTop:10,color:'#69726b',fontSize:15}}>
                        Test With
                      </Text>
                      <View style={{paddingHorizontal:50,marginTop:20,flexDirection:'row',justifyContent:'space-between',marginBottom:30}}>
                        <TouchableOpacity style={styles.IconContainer} onPress={getWhatsapp}>
                          <FontAwesome6 name="whatsapp" size={21} color={'green'} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.IconContainer} onPress={toggleModal}>
                          <Fontisto name="paperclip" size={20} color={'#737d7c'} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.IconContainer}>
                          <Ionicons name="call-sharp" size={20} color={'#737d7c'} onPress={getPhone}/>
                        </TouchableOpacity>
                        <Modal
                                        isVisible={isModalVisible}
                                        onBackdropPress={toggleModal}
                                        backdropOpacity={0.5}
                                        animationIn="slideInUp"
                                        animationOut="slideOutDown"
                                        style={styles.modal}
                                    >
                                        <View style={styles.modalContent}>
                                            <TouchableOpacity style={styles.optionButton} onPress={openCamera}>
                                                <Icon name="photo-camera" size={24} color="#4CAF50" />
                                                <Text style={styles.optionText}>Camera</Text>
                                            </TouchableOpacity>
                        
                                            <TouchableOpacity style={styles.optionButton} onPress={openGallery}>
                                                <Icon name="photo-library" size={24} color="#2196F3" />
                                                <Text style={styles.optionText}>Gallery</Text>
                                            </TouchableOpacity>   
                                        </View>
                                    </Modal>
                      </View>
        </View>
        <GeneralTest item={'LabTest'}/>
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
    backgroundColor:'#ffffff',
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
modal: {
  justifyContent: 'flex-end',
  margin: 0,
},
modalContent: {
  backgroundColor: '#fff',
  paddingVertical: 20,
  paddingHorizontal: 25,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  elevation: 5,
},
modalTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 15,
  textAlign: 'center',
  color: '#333',
},
optionButton: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 12,
  borderBottomWidth: 1,
  borderColor: '#E0E0E0',
},
optionText: {
  fontSize: 18,
  marginLeft: 10,
  color: '#333',
},
})