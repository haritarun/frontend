import { StyleSheet, Text, View ,Image, TouchableOpacity, TextInput, Platform } from 'react-native'
import React,{useState,useEffect} from 'react'

import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import DateTimePicker from '@react-native-community/datetimepicker';

import ImagePicker from 'react-native-image-crop-picker'
import { launchCamera,launchImageLibrary } from 'react-native-image-picker';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import axios from 'axios';


const Profile = () => {
  const [day,setDay]=useState('') 
  const [month,setMonth]=useState('')
  const [year,setYear]=useState('')
  const [date,setDate] = useState(new Date)
  const [error,setError]=useState('')
  const [showError,setShowError] = useState(false) 
  const [showPicker,setShowPicker] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null);   
  const [showImageModal,setImageModal] = useState(false)
  const [gender,setGender] = useState('Male')
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  

 
  const [isShowModal,setShowModal]=useState(false)

  const [imageUri, setImageUri] = useState(
    'https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg'
  );

  const setChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios');
    setDate(currentDate);
    setDay(currentDate.getDate().toString().padStart(2,'0'));
    setMonth((currentDate.getMonth() + 1).toString().padStart(2,'0'));
    setYear(currentDate.getFullYear().toString()); 
  };

  const options = [
    { id: '1', label: 'Male' },
    { id: '2', label: 'Female' },
    { id: '3', label: 'Other' },
  ];  

  useEffect(() => {
    fetchedList()
  },[])


  const fetchedList = async () => {
    try {
      const response = await axios.get('http://localhost:3000/getEmail');
      
      if (response.status === 200) {  
        console.log('Fetched data:', response.data.data);
        const { name, age, imageurl, gender } = response.data.data; 
        const email = response.data.email
        setEmail(email)
        
        setName(name);
        console.log('Name:', name);
        
        setImageUri(imageurl);  
        const [day, month, year] = age.split('-');  
        setDay(day);
        setMonth(month);
        setYear(year);
        const selectedGenderOption = options.find(option => option.label === gender);
        if (selectedGenderOption) {
          setSelectedOption(selectedGenderOption.id);
          setGender(selectedGenderOption.label);
        }
        
        console.log('Successfully fetched data');
      } else {
        console.log('Unexpected status code:', response.status);
      }
    } catch (e) {
      console.error('Error fetching data:', e);
    }
  };





  const handleSelect = (id,label) => {
    setGender(label)
    setSelectedOption(id);
  };


  const handleEditPhoto = () => {
    ImagePicker.openCropper({
      path:imageUri,
      height:300,
      width:300,
      cropping:true,
      cropperCircleOverlay:true
    })
    .then((image)=>{
      setImageUri(image.path)
    })
    .catch((e)=>{
      console.log(e)
    })
  };


  const handleRemovePhoto = () => {
    setImageUri(null); 
  };

  const toggleMode =()=>{
    setImageModal(!showImageModal)
  }

  
  const openCamera = async () => {
      try {
        const options = {
          mediaType: 'photo',
          quality: 1,
          saveToPhotos: true,
        };
  
        launchCamera(options, (response) => {
          if (response.didCancel) {
            console.log('User cancelled camera');
          } else if (response.errorCode) {
            console.log('Camera error:', response.errorCode, response.errorMessage);
          } else if (response.assets && response.assets.length > 0) {
            const imageURl = response.assets[0].uri
            setImageUri(imageURl)
            console.log('Photo captured successfully:', response.assets[0]);
          } else {
            console.log('Unexpected response:', response);
          }
        });
      } catch (error) {
        console.log('Permission check error:', error);
      }
  };

  const openPhotos = async()=>{
    const options = {
      mediaType:'photo',
      quality:1,
      saveToPhotos:true
    }

    launchImageLibrary(options,(response)=>{
      if (response.didCancel){
        console.log('image Will Cancel')
      }
      else if(response.errorCode){
        console.log('Error code or Error Message',response.errorCode ,response.errorMessage)
      }
      else if(response.assets && response.assets.length > 0 ){
        const imageURl = response.assets[0].uri
        setImageUri(imageURl)
        console.log("somethign went wrong")
      }
      else{
        console.log('successfully ')
      }
    })
  }

  const getHandle=async()=>{
    try{
      console.log(name)
      const response = await axios.post('http://localhost:3000/updateProfile',{
        title:name,
        image:imageUri,
        date:`${day}-${month}-${year}`,
        gender:gender

      })
      if (response.status === 200){
        console.log('successfully updated')
      }
      else{
        console.log('something went wrong')
      }
    }catch(e){

    }
  }

  return (
    <View style={styles.offerContainer} > 
        <View style={{flexDirection:'row',justifyContent:'start',}}>
            <Image source={{uri:imageUri,height:70,width:70}} 
            style={{borderRadius:10}} onPress={()=>{toggleMode()}}/>
            <View style={{marginTop:5,marginLeft:10,marginTop:10}}>
                <Text style={{fontSize:19,color:'#0c5b41',fontWeight:700}}>{name}</Text>
                <Text style={{fontSize:17,color:"#868d8b",fontWeight:700,marginTop:5}}>{email}</Text>
            </View>
        </View>
        <TouchableOpacity style={{borderWidth:2,borderColor:'#57aa8f',padding:10,marginTop:20,borderRadius:10,}} onPress={()=>{setShowModal(!isShowModal)}}>
            <Text style={{textAlign:'center',color:'#57aa8f',fontWeight:700,fontSize:18,}}>Create Profile</Text>
        </TouchableOpacity>
        <Modal
                    isVisible={isShowModal}
                    backdropOpacity={0.5}
                    onBackdropPress={()=>{setShowModal(!isShowModal)}}
                    animationIn={'slideInUp'}
                    animationOut={'slideOutDown'}
                    style={styles.modal}>
                        <View style={styles.modalContainer}>
                          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20,}}>
                            <Text style={{fontSize:20,fontWeight:700,color:'#484845'}}>Profile</Text>
                            <TouchableOpacity onPress={()=>{setShowModal(!isShowModal)}}>
                              <Icon name='cross' size={25} color={'gray'} fontWeight={'200'} />
                            </TouchableOpacity>
                          </View>

                          <View style={{paddingHorizontal:10,marginTop:10}}>
                            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20,alignItems:'center'
                            }}>
                          <TouchableOpacity onPress={()=>{toggleMode()}}>
                            <Image
                                      source={{ uri: imageUri || 'https://static.vecteezy.com/system/resources/previews/003/715/527/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg' }} 
                                      style={{ height: 100, width: 100, borderRadius: 50 }}
                                      
                            />
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={{
                              backgroundColor: '#f5f5f5',
                              paddingVertical: 15,
                              paddingHorizontal: 25,
                              borderRadius: 50,
                            }}
                            onPress={handleEditPhoto} 
                          >
                            <Text
                              style={{
                                color: '#333',
                                fontWeight: '600',
                                fontSize: 15,
                                letterSpacing: 0.5,
                              }}
                            >
                              Edit Photo
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={{
                              backgroundColor: '#ffeded',
                              paddingVertical: 15,
                              paddingHorizontal: 25,
                              borderRadius: 50,
                            }}
                            onPress={handleRemovePhoto} 
                          >
                            <Text
                              style={{
                                color: '#ef5a5a',
                                fontWeight: '600',
                                fontSize: 15,
                                letterSpacing: 0.5,
                              }}
                            >
                              Remove
                            </Text>
                          </TouchableOpacity>
                            </View>
                            <View style={{marginTop:10}}>
                              <Text style={styles.title}>Full Name</Text>
                              <TextInput 
                              placeholder='Enter Your Name' 
                              style={{marginLeft:10,marginTop:10 }}
                              value={name}
                              onChangeText={(text) => setName(text)}  />
                              <Text style={styles.inputName}
                              />
                              <Text style={styles.title}>Date Of Birth</Text>
                              <View style={styles.container}>
                                  <View style={styles.inputContainer}>
                                        <TextInput
                                        style={styles.input}
                                        placeholder="DD"
                                        value={day}
                                        maxLength={2}
                                        keyboardType='numeric'
                                        onChangeText={(text)=>{
                                          const val = parseInt(text)
                                          console.log(val)
                                            setDay(text)
                                        }} 
                                        onBlur={()=>{
                                          const val = parseInt(day)
                                          if (val<0 || val > 31){
                                            setShowError(true)
                                            setError('Enter Valid Date')
                                          }
                                          else{
                                            setMonth(month.padStart(2,'0'))
                                            setShowError(false)
                                          }
                                        }}> 
                                        </TextInput>

                                        <TextInput
                                        style={styles.input}
                                        placeholder="MM"
                                        value={month}
                                        maxLength={2}
                                        keyboardType='numeric'
                                        onChangeText={(text)=>{
                                          const val = parseInt(text)
                                          console.log(val)
                                            setMonth(val)
                                        }} 
                                        onBlur={()=>{
                                          const val = parseInt(day)
                                          if (val<0 || val > 31){
                                            setShowError(true)
                                            setError('Enter Valid Date')
                                          }
                                          else{
                                            setMonth(month.padStart(2,'0'))
                                            setShowError(false)
                                          }
                                        }}> 
                                        </TextInput>

                                        <TextInput
                                        style={styles.input}
                                        placeholder="YYYY"
                                        value={year}
                                        maxLength={4}
                                        keyboardType='numeric'
                                        onChangeText={(text)=>{
                                          setYear(text)
                                        }}
                                        onBlur={()=>{
                                          const val = parseInt(year)
                                          if (val<1950 || val >2026 ){
                                            setShowError(true)
                                            setError('Enter Valid Year')
                                          }
                                          else{
                                            setYear(year.padStart(4,'0'))
                                            setShowError(false)
                                          }
                                        }} > 

                                        </TextInput>
                                        
                                  </View>
                                  {
                                          showError && <Text style={{marginTop:-10,color:'red',marginBottom:10,fontSize:14,fontWeight:700}}>{error}</Text>
                                  }
                                  <TouchableOpacity style={styles.button} onPress={()=>{setShowPicker(true)}}>
                                      <Text style={styles.buttonText}>Select Date Of Birth</Text>
                                  </TouchableOpacity>
                                  {
                                    showPicker && 
                                    <DateTimePicker 
                                    value={date}
                                    mode='date'
                                    maximumDate={new Date()}
                                    onChange={setChange}
                                    display={Platform.OS === 'ios' ? 'spinner':'default'}
                                    />
                                  }
                              </View>
                              <Text style={styles.inputName}/>
                                <Text style={styles.title}>Gender</Text>
                                    <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,marginTop:20}}>
                                      {options.map((option) => (
                                        <TouchableOpacity
                                          key={option.id}
                                          style={styles.radioContainer}
                                          onPress={() => handleSelect(option.id,option.label)}
                                        >
                                          <View style={styles.radioCircle}>
                                            {selectedOption === option.id && <View style={styles.selectedDot} />}
                                          </View>
                                          <Text style={styles.radioText}>{option.label}</Text>
                                        </TouchableOpacity>
                                      ))}
                      
                                    </View>
                                    <TouchableOpacity style={{marginTop:20,height:70,width:'100%',backgroundColor:'#2b2b2a',borderRadius:20,justifyContent:'center',alignItems:'center'}} onPress={()=>{getHandle()}}>
                                      <Text style={{color:'#ffffff',fontWeight:700,fontSize:20}}>Update Profile</Text>
                                    </TouchableOpacity>
                            </View>
                          </View>

                        </View>
        </Modal>
        <Modal
                        isVisible={showImageModal}
                        onBackdropPress={toggleMode}
                        backdropOpacity={0.5}
                        animationIn="slideInUp"
                        animationOut="slideOutDown"
                        style={styles.modal}
                    >
                        <View style={styles.modalContent}>
                            <TouchableOpacity style={styles.optionButton} onPress={openCamera}>
                                <MaterialIcons name="photo-camera" size={24} color="#4CAF50" />
                                <Text style={styles.optionText}>Camera</Text>
                            </TouchableOpacity>
        
                            <TouchableOpacity style={styles.optionButton} onPress={openPhotos}>
                                <MaterialIcons name="photo-library" size={24} color="#2196F3" />
                                <Text style={styles.optionText}>Gallery</Text>
                            </TouchableOpacity>
        
                            
                        </View>
        </Modal>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    offerContainer:{
        backgroundColor:'#ffffff',
        height:'auto',
        marginHorizontal:20,
        borderRadius:10,
        marginTop:20,
        paddingHorizontal:17,
        paddingTop:20,
        paddingVertical:20
      },
      modal:{
        margin:0,
        justifyContent:'flex-end'
      },
      modalContainer:{
        height:670,
        backgroundColor:'white',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:20,
      },
      inputName:{
        height:1,
        borderBottomWidth:1,
        width:'100%',
        marginLeft:10
      },
      container: {
        padding: 20,
      },
      inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
      },
      input: {
        width: '30%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        textAlign: 'center',
      },
      button: {
        backgroundColor:'#868681',
        padding: 12,
        borderRadius: 5,
        alignItems: 'center',
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight:700,
      },
      selectedDate: {
        marginTop: 20,
        fontSize: 18,
        textAlign: 'center',
      },
      title: {
        fontSize: 16,
        fontWeight: 'bold',
        
        marginTop:20,
      },
      radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
      },
      radioCircle: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#868681',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
      },
      selectedDot: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: '#2c2c2a',
      },
      radioText: {
        fontSize: 16,
        color: '#333',
      },
      selectedText: {
        marginTop: 20,
        fontSize: 16,
        color: '#555',
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
    modalContent: {
      backgroundColor: '#ffffff',
      paddingVertical: 20,
      paddingHorizontal: 25,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      elevation: 5,
  },
  
})