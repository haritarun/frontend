import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useEffect, useState,useRef,useLayoutEffect} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import LottieView from 'lottie-react-native'
import { TextInput } from 'react-native-gesture-handler'
import AntDesign from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'


const VerifyOtp = ({route}) => {
  const navigation = useNavigation()
  const {data}=route.params
  const [timer,setTimer]=useState(59)
  const [running,setIsRunning]=useState(true)
  const [resend,setResend] = useState(false)
  const [odd,setOdd] = useState(false)
  const [otp, setOtp] = useState(['', '', '', '', '', '']); 
  const otpInputs = useRef([]); 
  
  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

  
    if (value && index < 5) {
      otpInputs.current[index + 1].focus();
    }
  };

  const handleBackspace = (index, value) => {
    const newOtp = [...otp];
    if (value === '' && index > 0) {
      
      newOtp[index - 1] = ''; 
      setOtp(newOtp);
      otpInputs.current[index - 1].focus();
    } else if (value === '' && index === 0) {
      
      return;
    }
  };

  useLayoutEffect(()=>{
          navigation.getParent()?.setOptions({
              tabBarStyle:{display:'none'}
          })
      })
  
  useEffect(() => {
    let interval;
    if (running && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1); 
        setOdd(!odd)
      }, 1000);

    } else if (timer === 0) {
      setResend(true)
      setIsRunning(false);
    }
    return () => clearInterval(interval); 
  },[]);


  const getVerify=async()=>{
    try{
      const finalOtp = otp.join('')
      const response = await axios.post("http://192.168.172.39:3000/verifyOtp",{
        userOtp:finalOtp,
        email:data.email,
        password:data.password,
      })
      if(response.status===200){
        navigation.navigate('Home')
      }
    }catch(e){
      console.log("something went wrong",e)

    }
  }

  const getResend = async () => {
    try{
      const response = await axios.post('http://192.168.172.39:3000/login',{
        email:data.email,
        password:data.password,
      })
      if (response.status===200){
        setTimer(59)
        setIsRunning(true)
        setResend(false)
      }
    }catch(e){
      console.log("somethign went wrong",e)
    }
  }
  return (
    <LinearGradient
              colors={['#76f3c1', '#ffffff']} 
              start={{ x: 0, y: 1 }} 
              end={{ x: 0, y: 0.3 }} 
              style={styles.container}
            >  
              <LottieView source={require('../../../assets/otp.json')} autoPlay loop style={{height:300,width:300,marginTop:100}}/>;
              <View style={styles.otpContainer}>
                {otp.map((digit, index) => (
                    <TextInput
                    key={index}
                    style={styles.otpBox}
                    value={digit}
                    onChangeText={(value) => handleOtpChange(index, value)}
                    keyboardType="numeric"
                    maxLength={1}
                    onKeyPress={({ nativeEvent }) => {
                        if (nativeEvent.key === 'Backspace') {
                        handleBackspace(index, digit);
                        }
                    }}
                    ref={(ref) => (otpInputs.current[index] = ref)}
                    placeholder="0"
                    placeholderTextColor="#aeb4b6"
                    />
                ))}
                </View>
              <View style={styles.timercontainer}>
                {
                  resend ?
                  <TouchableOpacity  onPress={getResend}>
                    <Text style={styles.otpText}>Resend OTP</Text>
                  </TouchableOpacity>
                  :
                  <Text style={styles.otpText}>OTP Sent </Text>
                }
                {
                  running && <View style={{flexDirection:'row',alignItems:'center',}}>
                  <Text style={{fontSize:17,marginHorizontal:5,color:'#f0246d'}}>{timer}s</Text>
                <AntDesign name={odd ? 'timer-sand-complete':'timer-sand'} size={17} color={'#f00c37'}/>
                </View>
                }
              </View>  
              <TouchableOpacity style={styles.loginButton} onPress={getVerify}>
                <Text style={styles.loginText}>Sign Up</Text>
              </TouchableOpacity>
    </LinearGradient>
  )
}

export default VerifyOtp

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    paddingBottom:50,
},
otpContainer: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems:'center',
  marginTop:10
},
otpBox: {
  height: 45,
  width: 45,
  borderWidth: 2,
  borderColor: '#aeb4b6',
  borderRadius: 10,
 textAlign:'center',
  marginHorizontal: 7,
fontWeight:700,
  fontSize: 19,
  color: '#0a78d6',
  
},
timercontainer:{
  flexDirection:'row',
  width:'76%',
  justifyContent:'space-between',
  marginTop:30,
},
otpText:{
  color:'#0a78d6',
  fontSize:17,
  fontFamily:'bold',
  fontWeight:700,
},
timeImage:{
 
},
loginButton:{
  width:'77%',
  marginTop:50,
  backgroundColor:'#058c8f',
  marginHorizontal:20,
  alignItems:'center',
  justifyContent:'center',
  borderRadius:15,
},
loginText:{
  paddingVertical:15,
  fontSize:20,
  color:'#76f3c1',
  fontFamily:'bold',
  fontWeight:700,
  letterSpacing:1.5
},

})