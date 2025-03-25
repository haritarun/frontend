import { StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native'
import React,{useLayoutEffect} from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Services = [
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


const EmergencyNumber = () => {
    const navigation = useNavigation()

    useLayoutEffect(()=>{
        navigation.getParent()?.setOptions({
            tabBarStyle:{display:'none'}
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
                onPress={() => navigation.navigate('Help')} 
            />
            <Text style={styles.title}>Emergency Numbers</Text>
        </View>
        <View style={{alignItems:'center'}}>
            {
                Services.map(eachItem=>(
                    <TouchableOpacity key={eachItem.id} style={styles.card} onPress={() => {
                        navigation.navigate('Doctors', {
                          screen: 'ServicesScreen',
                          params: {
                            title: eachItem.title,
                            previousScreen: 'EmergencyNumber'
                          }
                        });
                      }}>
                                <Image
                                source={{ uri: eachItem.icon }}
                                style={styles.cardImage}
                                resizeMode="contain"
                            />
                        <Text style={styles.cardTitle}>{eachItem.title}</Text>
                    </TouchableOpacity>
                ))
            }

        </View>
    </View>
  )
}

export default EmergencyNumber

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
      card: {
        marginTop:20,
        width: '90%', 
        height: 130,
        backgroundColor: '#f8faf9',
        borderRadius: 12,
        marginBottom: 10,
        justifyContent:'space-between',
        alignItems:'center',
        borderWidth: 1,
        borderColor: '#e6eceb',
        flexDirection:'row',
        paddingHorizontal:40,
      },
      cardImage: {
        width: 120,
        height: 110,
        borderRadius:20
        
      },
      cardTitle: {
        color: '#1a3c34',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
      },
})