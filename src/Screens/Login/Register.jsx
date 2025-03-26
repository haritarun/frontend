
import { Text, View ,StyleSheet, TouchableOpacity, Alert} from 'react-native'
import React,{useState,useLayoutEffect} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import LottieView from 'lottie-react-native';
import { TextInput } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';






const Register = () => {
    const navigation = useNavigation()
    const [isEmail,setEmail] = useState('')
    const [isPassword,setPassword] = useState('')
    const [isEmailError,setEmailError]=useState('')
    const [isShow,setShow]=useState(false)
    const [isPasswordError,setErrorPassword]=useState("")

    const getNavigate=()=>{
        navigation.navigate("login")
    }

    useLayoutEffect(()=>{
        navigation.getParent()?.setOptions({
            tabBarStyle:{display:'none'}
        })
    })


    const getSubmit = async ()=>{
      // if(isEmail.trim()===""){
      //   setEmailError('Enter Any Email')
      // }
      // if(isPassword.trim()===""){
      //   setPassword('Enter Any Password')
      // }
      // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // if(regex.test(isEmail)){
      
      try {
        console.log('Making API call to backend...');
        const response = await axios.post('http://192.168.230.39:3000/login', {
          email:isEmail,
          password:isPassword,
        });
        console.log('Response:', response.data);
        if (response.status === 200) {
          const data = {
            email: isEmail, 
            password: isPassword,
          };
          navigation.navigate('verifyOtp', { data });
        }
      } catch (error) {
        console.error('Error during API call:', error);
      }
    }

  return (
    <LinearGradient
          colors={['#76f3c1', '#ffffff']} 
          start={{ x: 0, y: 1 }} 
          end={{ x: 0, y: 0.3 }} 
          style={styles.container}
        >
            <LottieView source={require('../../../assets/login.json')} autoPlay loop style={{flex:1,height:300,width:300}}/>;
            <View>
                <TextInput placeholder='Email' 
                  style={styles.emailInput} 
                  placeholderTextColor={'#0a8ed2'}
                  onChangeText={(val)=>{setEmail(val)}} 
                 /> 
                <TextInput 
                  placeholder='Password' 
                  style={styles.emailInput} 
                  placeholderTextColor={'#0a8ed2'}
                  onChangeText={(val)=>{setPassword(val)}} 
                />
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={getSubmit}>
                <Text style={styles.loginText}>Create Account</Text>
            </TouchableOpacity>
            <Text style={styles.bottomText}>Already You Have An Account ? <Text style={{color:'blue'}} onPress={getNavigate}>Sign In</Text></Text>
            {/* <Text onPress={getPhoneNumber}>Loing With Phone Number</Text> */}
            <Text style={{marginVertical:10,color:'gray'}}>Or</Text>
            <View style={styles.iconContainer}>
                <AntDesign
                    name="google"
                    size={30}  
                    color="#909594" 
                />
                <AntDesign
                    name="github"
                    size={30} 
                    color="#909594" 
                />
                <AntDesign
                    name="facebook-square"
                    size={30} 
                    color="#909594" 
                />

            </View>
        </LinearGradient>
  )
}

export default Register

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        paddingBottom:50,
  },
  viedoContainer:{
    flexDirection:'column'
  },
  emailInput:{
    marginHorizontal:20,
    borderBottomColor:'#058c8f',
    borderBottomWidth:2,
    width:350,
    height:40,
    color:'gray',
    marginVertical:25,
  },
  loginButton:{
    width:'80%',
    
    backgroundColor:'#058c8f',
    marginHorizontal:20,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15,
  },
  loginText:{
    paddingVertical:15,
    fontSize:20,
    color:'white',
    fontFamily:'bold',
    fontWeight:700,
    letterSpacing:1.5
  },
  bottomText:{
    color:'#6d706f',
    marginTop:5,
    fontSize:15,
  },
  iconContainer:{
    flexDirection:'row',
    width:'60%',
    justifyContent:'space-around'
  }
})
