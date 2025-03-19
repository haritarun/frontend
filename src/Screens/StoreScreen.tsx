import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';


const faqData = [
    {
      id: 1,
      question: 'How do I check my wallet balance?',
      answer: 'You can check your wallet balance by navigating to the "Wallet" section in the app. Your current balance will be displayed at the top of the screen.',
    },
    {
      id: 2,
      question: 'Why is my wallet balance incorrect?',
      answer: 'If your wallet balance seems incorrect, please ensure that all recent transactions have been processed. If the issue persists, contact support for assistance.',
    },
    {
      id: 3,
      question: 'How long does it take to update my wallet balance after a transaction?',
      answer: 'Wallet balances are usually updated immediately after a transaction. However, in some cases, it may take a few minutes due to processing delays.',
    },
    {
      id: 4,
      question: 'Can I transfer my wallet balance to another user?',
      answer: 'Yes, you can transfer your wallet balance to another user. Go to the "Transfer" section in the app and follow the instructions to complete the transfer.',
    },
    {
      id: 5,
      question: 'What should I do if my wallet balance is zero?',
      answer: 'If your wallet balance is zero, you can add funds by going to the "Add Money" section in the app. Follow the steps to complete the payment.',
    },
    
  ];

const StoreScreen = ({route}) => {
    const [selectedId,setSelected]=useState(null)
    const navigation = useNavigation()
    const previousScreen = route.params?.previousScreen || 'Home';

    const getSelected=(id)=>{
        if (id === selectedId){
            setSelected(null)
        }
        else{
            setSelected(id)
        }

    }
    return (
            <View style={styles.headerContainer}>
                <View style={{flexDirection:'row'}}>
                <Icon 
                    name="arrowleft" 
                    size={30} 
                    color={'gray'} 
                    style={{ fontWeight: 700 }} 
                    onPress={() => navigation.navigate(previousScreen)} 
                />
                <Text style={styles.title}>Store</Text>
                </View>
                <LinearGradient
                          colors={ ['#87CEEB', '#4682B4']}
                          style={styles.card}
                          start={{ x: 0, y: 0 }}
                          end={{ x:1, y: 1 }}
                        >
                            <View style={styles.walletContainer}>
                                <View style={{flexDirection:'column',marginLeft:30}}>
                                    <Text style={{fontSize:20,color:'#0f6372',}}>
                                        Wallet Balance
                                    </Text>
                                    <Text style={{fontSize:23,fontWeight:'bold',color:'#015d6d',marginTop:10}}>
                                        0 $
                                    </Text>
                                </View>
                                <LottieView
                                    source={require('../../assets/wallet.json')}
                                    style={styles.walletIcon}
                                    autoPlay
                                    loop
                                />
                            </View>

                </LinearGradient>
                <View style={{marginTop:30,marginLeft:10}}>
                    <Text style={{fontSize:24,fontWeight:'bold',color:"#082c32"}}>FAQ</Text>
                    {
                        faqData.map(eachItem=>(
                            <TouchableOpacity style={{flexDirection:'column'}} onPress={()=>{getSelected(eachItem.id)}}>
                                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:40,marginBottom:20}}> 
                                    <Text style={{width:'80%',fontSize:15,fontWeight:'bold'}}>{eachItem.question}</Text>
                                    <Entypo name={selectedId === eachItem.id ? "chevron-up":"chevron-down"} size={17}/>
                                </View>
                                {
                                    selectedId === eachItem.id && <Text style={{width:'80%',marginBottom:20,lineHeight:20}}>{eachItem.answer}</Text>
                                }
                                <View style={{height:1,backgroundColor:'gray',width:'100%',}}/>
                            </TouchableOpacity>
                        ))
                    }
                </View>
                <View style={{marginTop:30,marginLeft:10}}>
                     <Text style={{fontSize:20,fontWeight:'bold'}}>Transaction</Text>
                     <Text style={{marginTop:40,textAlign:'center'}}>
                        No Transactions ! You Not Purchased Anything
                     </Text>
                </View>
            </View>
    )
}

export default StoreScreen

const styles = StyleSheet.create({
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'gray',
        marginLeft: 15
      },
      headerContainer: {
        width: 'auto',
        backgroundColor: '#ffffff',
        height:'100%',
        flexDirection: 'column',
        paddingTop: 20,
        paddingLeft:10,
        paddingRight:10
      },
      card: {
        width:'auto',
        borderRadius: 20,
        height:200,
        alignItems:'center',
        padding:15
        
      },
      walletContainer:{
        width:'100%',
        height:'100%',
        backgroundColor:'#ffffff',
        borderRadius:20,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
      },
      walletIcon:{
        height:230,
        width:230,
        marginTop:-40
      }
})