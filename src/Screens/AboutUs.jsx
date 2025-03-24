import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React,{useLayoutEffect} from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import OutTeam from '../Components/OutTeam';


const AboutUs = () => {
  const navigation = useNavigation()

  useLayoutEffect(()=>{
    navigation.getParent()?.setOptions({
      tabBarStyle:{display:"none"}
    })
  })
       
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
            <Text style={styles.title}>About Us</Text>
        </View>
        <ScrollView 
        showsVerticalScrollIndicator={false}
        style={{marginHorizontal:10}}>
            <Text style={{fontSize:18,fontWeight:700}}>Why We Established Our Services</Text>
            <Text style={{fontSize:16,lineHeight:25,color:'#7c7c7a',marginTop:10}}>
            HealthSync was born out of a recognition that modern healthcare, 
            while advanced, often leaves patients and providers overwhelmed 
            by complexity and disconnected systems. We saw the challenges: 
            missed appointments due to poor communication, delays in prescription 
            refills, and the difficulty of tracking health data across multiple 
            platforms. Our mission was clear—establish a service that reduces 
            these burdens, improves patient outcomes, and supports healthcare 
            professionals in delivering exceptional care. We exist to make 
            healthcare more accessible, transparent, and responsive to the 
            needs of all stakeholders, driven by the belief that technology 
            can transform lives when it prioritizes people over processes.
            </Text>
            <Text style={{fontSize:18,fontWeight:700,marginTop:20}}>What We Do</Text>
            <Text style={{fontSize:16,lineHeight:25,color:'#7c7c7a',marginTop:10}}>
            At HealthSync Initiative, we empower patients, healthcare providers, 
            and families by delivering a seamless, technology-driven platform that 
            enhances medical care and personal health management. We bridge the gap 
            between patients and professionals through innovative tools that simplify 
            access to healthcare services, streamline communication, and provide 
            real-time health insights. Our work focuses on creating an ecosystem 
            where managing appointments, tracking symptoms, accessing prescriptions, 
            and understanding lab results is intuitive and efficient.
            </Text>
            
            <Text style={{fontSize:18,fontWeight:700,marginTop:20}}>Our Services</Text>
            <Text style={{fontSize:16,lineHeight:25,color:'#7c7c7a',marginTop:10}}>
              HealthSync offers a comprehensive suite of services designed to meet the diverse needs of our users:
              </Text>
              <Text style={{marginTop:10,}}>
                  <Text style={{fontWeight:700,fontSize:16}}>Appointment Management : </Text>
                  <Text style={{fontSize:15,lineHeight:25,color:'#7c7c7a',marginTop:10}}>Book, reschedule, or cancel telemedicine and in-person appointments with ease, 
                    and join video consultations directly through our platform.</Text>
              </Text>
              <Text style={{marginTop:10,}}>
                  <Text style={{fontWeight:700,fontSize:16}}>Prescription Handling : </Text>
                  <Text style={{fontSize:15,lineHeight:25,color:'#7c7c7a',marginTop:10}}>Request refills, download prescriptions as PDFs, 
                    transfer them to pharmacies, and track their status—all in one place.</Text>
              </Text>
              <Text style={{marginTop:10,}}>
                  <Text style={{fontWeight:700,fontSize:16}}>Symptom Tracking : </Text>
                  <Text style={{fontSize:15,lineHeight:25,color:'#7c7c7a',marginTop:10}}>Log daily symptoms, set reminders, generate reports, 
                      and share them with healthcare providers to monitor health trends.</Text>
              </Text>
              <Text style={{marginTop:10,}}>
                  <Text style={{fontWeight:700,fontSize:16}}>Health Profile Management : </Text>
                  <Text style={{fontSize:15,lineHeight:25,color:'#7c7c7a',marginTop:10}}>Build and update a detailed health profile, including medical history, allergies, and medications, shareable with doctors as needed.</Text>
              </Text>
              <Text style={{marginTop:10,}}>
                  <Text style={{fontWeight:700,fontSize:16}}>Notifications and Alerts : </Text>
                  <Text style={{fontSize:15,lineHeight:25,color:'#7c7c7a',marginTop:10}}>Receive medication reminders, appointment notifications, and critical health alerts tailored to your needs.</Text>
              </Text>
              <Text style={{marginTop:10,}}>
                  <Text style={{fontWeight:700,fontSize:16}}>Lab Results Access : </Text>
                  <Text style={{fontSize:15,lineHeight:25,color:'#7c7c7a',marginTop:10}}>Submit payments, view bills, update insurance details, and download receipts effortlessly.</Text>
              </Text>

              <Text style={{fontSize:18,fontWeight:700,marginTop:20}}>Description</Text>
            <Text style={{fontSize:16,lineHeight:25,color:'#7c7c7a',marginTop:10}}>
            HealthSync Initiative is a cutting-edge medical project that integrates advanced technology with compassionate care to revolutionize how individuals engage with healthcare. Launched in 2025, our platform serves as a centralized hub for patients to manage their health and for providers to coordinate care efficiently. Whether you’re a busy parent scheduling a child’s check-up, a chronic illness patient tracking symptoms, or a doctor needing quick access to a patient’s records, HealthSync adapts to your needs. Our user-friendly app, available on mobile and web, is built with robust security measures and a commitment to privacy, ensuring your data is safe while empowering you with control over your health journey.
            </Text>

            <Text style={{fontSize:18,fontWeight:700,marginTop:20}}>Our Vision</Text>
            <Text style={{fontSize:16,lineHeight:25,color:'#7c7c7a',marginTop:10}}>
            We envision a world where healthcare is no longer a maze of paperwork and 
            phone calls but a streamlined, empowering experience. By leveraging technology, 
            we aim to reduce the stress of managing medical needs, improve patient-provider 
            collaboration, and ultimately enhance health outcomes for communities worldwide.
            </Text>
            <OutTeam />
        </ScrollView>
      
    </View>

  )
}

export default AboutUs

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
})