import { StyleSheet, Text, View ,ScrollView,TouchableOpacity} from 'react-native'
import React,{useState,useLayoutEffect} from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';


const data = [
    {
      id: 1,
      title: "Login and Logout",
      questions: [
        { id: 1, title: "How do I log in to the medical app?", answer: "Open the app, enter your registered email or phone number and password, then tap 'Login'." },
        { id: 2, title: "What should I do if I forget my login PIN or password?", answer: "Tap 'Forgot Password' on the login screen, follow the prompts to reset it via email or SMS, and create a new one." },
        { id: 3, title: "Why am I seeing an 'account locked' message?", answer: "This happens after multiple failed login attempts. Wait 15 minutes or reset your password to unlock it." },
        { id: 4, title: "Can I log in from multiple devices for my appointments?", answer: "Yes, but only one device can be active for a telemedicine call at a time." },
        { id: 5, title: "How do I log out securely to protect my health data?", answer: "Go to the app settings, tap 'Log Out,' and confirm. Avoid using public devices." },
        { id: 6, title: "What happens if I don’t log out after a session?", answer: "Your account remains active, but it will auto-logout after a period of inactivity for security." }
      ]
    },
    {
      id: 2,
      title: "Account Creation",
      questions: [
        { id: 1, title: "How do I sign up for a patient account?", answer: "Download the app, tap 'Sign Up,' and fill in your details like name, email, and phone number." },
        { id: 2, title: "What details are needed to register as a user?", answer: "You’ll need your full name, email or phone number, date of birth, and optionally your insurance info." },
        { id: 3, title: "Why do I need to provide my medical ID or insurance info?", answer: "This helps verify your identity and link your account to healthcare services." },
        { id: 4, title: "Can I create an account for a family member?", answer: "Yes, use the 'Add Dependent' option in your profile to create a linked account." },
        { id: 5, title: "What if I don’t get the account confirmation SMS?", answer: "Check your spam folder or request a new code via the app. Contact support if it persists." },
        { id: 6, title: "Is there a minimum age to use the app?", answer: "You must be 13 or older to create an account, per our terms of service." }
      ]
    },
    {
      id: 3,
      title: "Health Profile Setup",
      questions: [
        { id: 1, title: "How do I add my medical history to my profile?", answer: "Go to 'Profile,' select 'Medical History,' and input details like conditions or surgeries." },
        { id: 2, title: "Can I update my allergy or medication list?", answer: "Yes, in 'Profile,' edit the 'Allergies' or 'Medications' section anytime." },
        { id: 3, title: "How do I link my wearable device to track vitals?", answer: "In 'Devices,' select your wearable brand and follow the pairing instructions." },
        { id: 4, title: "Why isn’t my health data syncing properly?", answer: "Check your internet connection, ensure the wearable app is updated, or re-link the device." },
        { id: 5, title: "How do I share my profile with my doctor?", answer: "Go to 'Share Data,' select your doctor, and send a secure link." },
        { id: 6, title: "Can I delete old health records from my profile?", answer: "Yes, select the record in 'Medical History' and tap 'Delete,' but some data may be retained for legal reasons." }
      ]
    },
    {
      id: 4,
      title: "Appointments",
      questions: [
        { id: 1, title: "How do I book a telemedicine appointment?", answer: "Go to 'Appointments,' pick a doctor, choose a time slot, and confirm." },
        { id: 2, title: "Can I reschedule or cancel an appointment?", answer: "Yes, in 'Appointments,' select the booking and choose 'Reschedule' or 'Cancel.'" },
        { id: 3, title: "Why don’t I see available doctors in my area?", answer: "Availability depends on your location and doctor schedules. Try a wider search radius." },
        { id: 4, title: "How do I join a video consultation?", answer: "At the appointment time, tap 'Join Call' from the app’s home screen or notification." },
        { id: 5, title: "What if I miss my scheduled appointment?", answer: "You’ll get a notification to reschedule. Some providers may charge a no-show fee." },
        { id: 6, title: "How do I view my past appointment history?", answer: "Go to 'Appointments,' then switch to the 'Past' tab to see details." }
      ]
    },
    {
      id: 5,
      title: "Prescriptions",
      questions: [
        { id: 1, title: "How do I request a prescription refill?", answer: "In 'Prescriptions,' select your medication and tap 'Request Refill.'" },
        { id: 2, title: "What if my prescription request is still pending?", answer: "It’s under review by your doctor. Check status in the app or contact them if delayed." },
        { id: 3, title: "Can I download my prescription as a PDF?", answer: "Yes, go to 'Prescriptions,' select it, and tap 'Download PDF.'" },
        { id: 4, title: "How do I transfer my prescription to a pharmacy?", answer: "Choose 'Transfer' in the prescription details and select your pharmacy." },
        { id: 5, title: "What if my medication isn’t listed in the app?", answer: "Manually add it in 'Medications' or ask your doctor to update it." },
        { id: 6, title: "How do I check my prescription status?", answer: "Go to 'Prescriptions' and view the status next to each request." }
      ]
    },
    {
      id: 6,
      title: "Symptom Tracking",
      questions: [
        { id: 1, title: "How do I log my daily symptoms?", answer: "In 'Symptoms,' tap 'Add Symptom,' select or type it, and save." },
        { id: 2, title: "Can I set reminders to track my symptoms?", answer: "Yes, go to 'Settings,' then 'Reminders,' and schedule symptom logs." },
        { id: 3, title: "Why aren’t my symptom logs saving?", answer: "Ensure you’re online and tap 'Save' after entering details." },
        { id: 4, title: "How do I generate a report from my symptom data?", answer: "In 'Symptoms,' select 'Generate Report' and choose a time range." },
        { id: 5, title: "Can I share my symptom log with my healthcare provider?", answer: "Export the report as a PDF and send it via the app or email." },
        { id: 6, title: "What do the symptom trend graphs mean?", answer: "They show patterns in your symptoms over time to help identify triggers." }
      ]
    },
    {
      id: 7,
      title: "Lab Results",
      questions: [
        { id: 1, title: "How do I upload my lab test results?", answer: "In 'Lab Results,' tap 'Upload,' and attach a photo or PDF." },
        { id: 2, title: "Why are my lab results not showing up?", answer: "Processing may take time, or the file format might be unsupported. Check again later." },
        { id: 3, title: "Can I view my past test results in the app?", answer: "Yes, go to 'Lab Results' and scroll through the history." },
        { id: 4, title: "How do I understand my lab result values?", answer: "Tap a result for a breakdown or consult the in-app glossary." },
        { id: 5, title: "Can I share my lab results with a specialist?", answer: "Select the result, tap 'Share,' and choose your specialist." },
        { id: 6, title: "What file types are supported for lab uploads?", answer: "PDFs, JPEGs, and PNGs are accepted up to 10MB." }
      ]
    },
    {
      id: 8,
      title: "Notifications and Alerts",
      questions: [
        { id: 1, title: "How do I enable medication reminders?", answer: "In 'Settings,' go to 'Notifications,' and turn on 'Medication Reminders.'" },
        { id: 2, title: "Why am I not getting appointment notifications?", answer: "Check your phone’s notification settings and ensure the app has permission." },
        { id: 3, title: "Can I customize alerts for my health goals?", answer: "Yes, in 'Goals,' set targets and enable personalized alerts." },
        { id: 4, title: "How do I stop receiving non-urgent notifications?", answer: "In 'Settings,' disable 'Non-Essential Alerts' under notifications." },
        { id: 5, title: "What does a 'critical health alert' mean?", answer: "It indicates a serious issue detected by your vitals or doctor input." },
        { id: 6, title: "Why do I get alerts about my wearable device?", answer: "Your device may be disconnected or reporting unusual data." }
      ]
    },
    {
      id: 9,
      title: "Privacy and Security",
      questions: [
        { id: 1, title: "How is my medical data kept secure?", answer: "We use end-to-end encryption and comply with HIPAA standards." },
        { id: 2, title: "Can I control who sees my health records?", answer: "Yes, adjust permissions in 'Privacy Settings' for each data type." },
        { id: 3, title: "What should I do if I think my account is compromised?", answer: "Log out all devices, reset your password, and contact support." },
        { id: 4, title: "How do I enable biometric login for extra security?", answer: "In 'Security,' turn on 'Biometric Login' and set it up." },
        { id: 5, title: "Are my telemedicine calls private and encrypted?", answer: "Yes, all calls are encrypted and not recorded." },
        { id: 6, title: "What happens to my data if I delete the app?", answer: "Your data stays on our servers unless you request account deletion." }
      ]
    },
    {
      id: 10,
      title: "Billing and Insurance",
      questions: [
        { id: 1, title: "How do I submit a payment for a consultation?", answer: "In 'Billing,' select the invoice and pay with a saved method." },
        { id: 2, title: "Why was my insurance claim rejected?", answer: "It could be due to coverage limits or missing info. Check with your provider." },
        { id: 3, title: "Can I view my medical bills in the app?", answer: "Yes, go to 'Billing' to see all invoices and payment history." },
        { id: 4, title: "How do I add or update my insurance details?", answer: "In 'Profile,' under 'Insurance,' enter or edit your policy info." },
        { id: 5, title: "What if my payment method isn’t accepted?", answer: "Try another card or contact support to verify accepted methods." },
        { id: 6, title: "How do I get a receipt for my appointment?", answer: "After payment, download it from 'Billing' as a PDF." }
      ]
    }
  ];

const Help = () => {
     const navigation = useNavigation()   
    const [isShowArray,setShowArray]=useState(null)
    const [selectedId,setSelected]=useState(null)

    useLayoutEffect(()=>{
        navigation.getParent()?.setOptions({
            tabBarStyle:{display:'none'}
        })
    })

    const getSelected=(id)=>{
        if (id === selectedId){
            setSelected(null)
        }
        else{
            setSelected(id)
        }
    }

    const getToggle =(id)=>{
        if (id === isShowArray){
            setShowArray(null)
            setSelected(null)
        }
        else{
            setShowArray(id)
            setSelected(null)
        }

    }
  return (
    <View style={styles.headerContainer}>
        <View style={{flexDirection:'row'}}>
            <Icon 
                name="arrowleft" 
                size={22} 
                color={'gray'} 
                style={{ fontWeight: 700 }} 
                onPress={() => navigation.navigate('Account')} 
            />
            <Text style={styles.title}>FAQ</Text>
        </View>
      <ScrollView contentContainerStyle={styles.content}>
              <Text style={styles.subTitle}>Here ! You Can Find Your Answer</Text>
              {data.map((option) => (
                <>
                <TouchableOpacity
                  key={option.id}
                  style={styles.helpItem}
                  onPress={()=>{getToggle(option.id)}}
                >
                  <Text style={styles.helpText}>{option.title}</Text>
                  <Icon name={isShowArray === option.id ? 'up':'down'} size={20} color="#ccc"style={{fontWeight:'bold'}}/>
                </TouchableOpacity>
                {
                    option.id === isShowArray && option.questions.map(eachItem=>(
                        <TouchableOpacity style={{flexDirection:'column',marginHorizontal:10}} onPress={()=>{getSelected(eachItem.id)}}>
                            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginBottom:10}}> 
                                <Text style={{width:'80%',fontSize:15,color:'gray',fontWeight:'bold'}}>{eachItem.title}</Text>
                            <Entypo name={selectedId === eachItem.id ? "chevron-up":"chevron-down"} size={17} color={'gray'}/>
                            </View>
                            {
                                selectedId === eachItem.id && <Text style={{width:'90%',marginBottom:10,lineHeight:20}}>{eachItem.answer}</Text>
                            }
                            <View style={{height:1,backgroundColor:'gray',width:'100%',marginBottom:20}}/>
                        </TouchableOpacity>
                    ))
                }
                </>
              ))}
            </ScrollView>
    </View>
  )
}

export default Help

const styles = StyleSheet.create({
    title: {
        fontSize: 19,
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
      content: {
        padding: 20,
      },
      subTitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
        textAlign: 'center',
      },
      helpItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#e5e9e6',
      },
      
      helpText: {
        flex: 1,
        fontSize: 16,
        fontWeight: '600',
        color: '#2a5e5a',
      },
})