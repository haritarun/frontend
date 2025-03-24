import { StyleSheet,Text,View,Image, TouchableOpacity, FlatList ,ScrollView,Linking,Alert} from 'react-native'
import React,{useState} from 'react'
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
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Data = [
  {
    id: 1,
    icon: 'https://img.freepik.com/free-vector/delivery-staff-ride-motorcycles-shopping-concept_1150-34879.jpg',
    title: 'Medicine Delivery',
    description: 'Get your medicines delivered to your doorstep within 30 minutes.',
  },
  {
    id: 2,
    icon: 'https://media.istockphoto.com/id/1319031310/photo/doctor-writing-a-medical-prescription.jpg?s=612x612&w=0&k=20&c=DWZGM8lBb5Bun7cbxhKT1ruVxRC_itvFzA9jxgoA0N8=',
    title: 'Doctor Consultation', 
    description: 'Consult with certified doctors online via video or chat.',
  },
  {
    id: 3,
    icon: 'https://t4.ftcdn.net/jpg/02/11/04/53/360_F_211045328_HnemU2NVFNwDWnQtDi5JHeHVhMV1jTOr.jpg  ',
    title: 'Lab Tests',
    description: 'Book lab tests and get samples collected from home.',
  },
  {
    id: 4,
    icon: 'https://applehospital.in/wp-content/uploads/2022/10/helth-checkup-2-768x498.jpg',
    title: 'Health Packages',
    description: 'Avail comprehensive health checkup packages at discounted rates.',
  },
  {
    id: 5,
    icon: 'https://5.imimg.com/data5/SELLER/Default/2024/3/405631831/UC/AH/NK/127997/first-aid-emergency-kit.jpg',
    title: 'Emergency Care',
    description: '24/7 emergency care services with ambulance support.',
  },
];

const HomeScreen = () => {
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
      <HomeHeader item={'Home'}/>
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
              <TouchableOpacity style={styles.IconContainer} onPress={getWhatsapp}>
                <FontAwesome6 name="whatsapp" size={21} color={'green'} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.IconContainer}>
                <Fontisto name="paperclip" size={20} color={'#737d7c'} onPress={toggleModal}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.IconContainer} onPress={getPhone}>
                <Ionicons name="call-sharp" size={20} color={'#737d7c'} />
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
        <View style={styles.Serviescontainer}>
          <Text style={{marginLeft:20,marginTop:20,fontSize:17,fontWeight:700,color:'#074614'}}>Our Services</Text>
        
          <FlatList
            data={Data}
            renderItem={({ item }) => <Services data={item} /> }
            
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <HomeScreenSlider />
      
        <EveryDayEsstensial />
        
        <Offer />
        <Brand />
        <GeneralTest item={'Home'}/>
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
    backgroundColor:'#ffffff',
    height:280,
    marginHorizontal:20,
    borderRadius:20,
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
    backgroundColor:'#ffffff',
    height:200,
    marginHorizontal:20,
    borderRadius:10,
    marginTop:20,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
},
modalContent: {
    backgroundColor: '#ffffff',
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