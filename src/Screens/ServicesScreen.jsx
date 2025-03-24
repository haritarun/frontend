import React,{useState,useLayoutEffect} from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image ,Alert, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/AntDesign';

const Data = [
    {
        val:'Product',
      id: 1,
      icon: 'https://img.freepik.com/free-vector/delivery-staff-ride-motorcycles-shopping-concept_1150-34879.jpg',
      title: 'Medicine Delivery',
      description: 'Get your medicines delivered to your doorstep within 30 minutes.',
      extraDescription: 'We ensure fast and reliable delivery of medicines to your home.',
      points: [
        '24/7 availability',
        'Express delivery options',
        'Track your order in real-time',
      ],
      benefits: [
        'Save time by avoiding pharmacy visits',
        'Get reminders for medicine refills',
        'Access to a wide range of medicines',
      ],
      howItWorks: [
        'Upload your prescription or search for medicines',
        'Add medicines to your cart and proceed to checkout',
        'Get your medicines delivered to your doorstep',
      ],
      testimonials: [
        {
          name: 'John Doe',
          comment: 'Great service! My medicines were delivered within 20 minutes.',
        },
        {
          name: 'Jane Smith',
          comment: 'Very convenient and reliable. Highly recommended!',
        },
      ],
      faqs: [
        {
          id:1,
          question: 'How do I upload my prescription?',
          answer: 'You can upload your prescription during the checkout process.',
        },
        {
            id:2,
          question: 'What if I miss my delivery?',
          answer: 'We will attempt to deliver again or you can reschedule.',
        },
      ],

    },
    {
        val:'LabTest',
      id: 2,
      icon: 'https://media.istockphoto.com/id/1319031310/photo/doctor-writing-a-medical-prescription.jpg?s=612x612&w=0&k=20&c=DWZGM8lBb5Bun7cbxhKT1ruVxRC_itvFzA9jxgoA0N8=',
      title: 'Doctor Consultation',
      description: 'Consult with certified doctors online via video or chat.',
      extraDescription: 'Get expert medical advice from the comfort of your home.',
      points: [
        'Video and chat consultations',
        'Prescription delivery',
        'Specialist doctors available',
      ],
      benefits: [
        'No need to visit a clinic',
        'Consult doctors anytime, anywhere',
        'Get prescriptions delivered to your home',
      ],
      howItWorks: [
        'Book an appointment with a doctor',
        'Join the consultation via video or chat',
        'Receive your prescription and follow-up instructions',
      ],
      testimonials: [
        {
          name: 'Alice Johnson',
          comment: 'The doctor was very professional and helpful. Highly recommend!',
        },
        {
          name: 'Bob Williams',
          comment: 'Great experience. Saved me a trip to the hospital.',
        },
      ],
      faqs: [
        {
            id:1,
          question: 'How do I book an appointment?',
          answer: 'You can book an appointment through the app or website.',
        },
        {
            id:2,
          question: 'Can I consult with a specialist?',
          answer: 'Yes, we have specialists available for various fields.',
        },
      ],
    },
    {
      val:'LabTest',
      id: 3,
      icon: 'https://t4.ftcdn.net/jpg/02/11/04/53/360_F_211045328_HnemU2NVFNwDWnQtDi5JHeHVhMV1jTOr.jpg',
      title: 'Lab Tests',
      description: 'Book lab tests and get samples collected from home.',
      extraDescription: 'Accurate and reliable lab tests at your doorstep.',
      points: [
        'Home sample collection',
        'Online reports',
        'Wide range of tests available',
      ],
      benefits: [
        'No need to visit a lab',
        'Get accurate results quickly',
        'Affordable pricing',
      ],
      howItWorks: [
        'Select the tests you need',
        'Schedule a home sample collection',
        'Receive your results online',
      ],
      testimonials: [
        {
          name: 'Emily Brown',
          comment: 'Very convenient and professional service. Got my results quickly!',
        },
        {
          name: 'Michael Davis',
          comment: 'Great experience. The technician was very skilled and polite.',
        },
      ],
      faqs: [
        {
            id:1,
          question: 'How do I schedule a test?',
          answer: 'You can schedule a test through the app or website.',
        },
        {
            id:2,
          question: 'How long does it take to get results?',
          answer: 'Most results are available within 24-48 hours.',
        },
      ],
    },
    {
        val:'Home',
      id: 4,
      icon: 'https://applehospital.in/wp-content/uploads/2022/10/helth-checkup-2-768x498.jpg',
      title: 'Health Packages',
      description: 'Avail comprehensive health checkup packages at discounted rates.',
      extraDescription: 'Customized health packages for individuals and families.',
      points: [
        'Affordable packages',
        'Full body checkups',
        'Preventive health care',
      ],
      benefits: [
        'Early detection of health issues',
        'Customized packages for all age groups',
        'Discounts on follow-up consultations',
      ],
      howItWorks: [
        'Choose a health package',
        'Book an appointment for sample collection',
        'Receive your results and consult a doctor',
      ],
      testimonials: [
        {
          name: 'Sarah Wilson',
          comment: 'Great value for money. The package covered everything I needed.',
        },
        {
          name: 'David Martinez',
          comment: 'Very thorough checkup. Highly recommend!',
        },
      ],
      faqs: [
        {
            id:1,
          question: 'What tests are included in the packages?',
          answer: 'Each package includes a detailed list of tests. Check the package details for more information.',
        },
        {
            id:2,
          question: 'Can I customize a package?',
          answer: 'Yes, you can customize a package based on your needs.',
        },
      ],
    },
    {
        val:'Product',
      id: 5,
      icon: 'https://5.imimg.com/data5/SELLER/Default/2024/3/405631831/UC/AH/NK/127997/first-aid-emergency-kit.jpg',
      title: 'Emergency Care',
      description: '24/7 emergency care services with ambulance support.',
      extraDescription: 'Immediate medical assistance during emergencies.',
      points: [
        'Ambulance on call',
        'Emergency helpline',
        'First aid support',
      ],
      benefits: [
        'Immediate response to emergencies',
        'Trained medical professionals',
        '24/7 availability',
      ],
      howItWorks: [
        'Call the emergency helpline',
        'Provide your location and details',
        'Receive immediate assistance',
      ],
      testimonials: [
        {
          name: 'Laura Garcia',
          comment: 'They arrived within minutes and saved my husband’s life. Thank you!',
        },
        {
          name: 'James Rodriguez',
          comment: 'Very professional and quick response. Highly recommend!',
        },
      ],
      faqs: [
        {
            id:1,
          question: 'How do I contact emergency services?',
          answer: 'You can call the emergency helpline number provided in the app.',
        },
        {
            id:2,
          question: 'Is the ambulance service free?',
          answer: 'The ambulance service is free for emergencies. Additional charges may apply for non-emergency cases.',
        },
      ],
    },
];

const ServicesScreen = ({ route }) => {
  const navigation = useNavigation();
  const {previousScreen} = route.params || 'Home'
 
  const {title} = route.params 
  const [selectedId,setSelected]=useState(null)
  

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: { display: 'none' }, 
    });

    
})
      
  
const getSelected=(id)=>{
          if (id === selectedId){
              setSelected(null)
          }
          else{
              setSelected(id)
          }
  
      }

  
  const selectedService = Data.find((service) => service.title === title);

  if (!selectedService) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Service not found!</Text>
      </View>
    );
  }


  return (
    <>
    <View style={{flexDirection:'row',marginTop:20,marginLeft:18}}>
                    <Icon 
                        name="arrowleft" 
                        size={20} 
                        color={'gray'} 
                        style={{ fontWeight: 700 }} 
                        onPress={() => navigation.navigate(previousScreen)} 
                    />
                    <Text style={styles.title}>Store</Text>
                    </View>
    <ScrollView contentContainerStyle={styles.container}>
      
      <Image source={{ uri: selectedService.icon }} style={styles.serviceImage} />

      
      <Text style={styles.title}>{selectedService.title}</Text>

      
      <Text style={styles.description}>{selectedService.extraDescription}</Text>

      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Key Features</Text>
        {selectedService.points.map((point, index) => (
          <Text key={index} style={styles.point}>
            • {point}
          </Text>
        ))}
      </View>

      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Benefits</Text>
        {selectedService.benefits.map((benefit, index) => (
          <Text key={index} style={styles.point}>
            • {benefit}
          </Text>
        ))}
      </View>

      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>How It Works</Text>
        {selectedService.howItWorks.map((step, index) => (
          <Text key={index} style={styles.point}>
            {index + 1}. {step}
          </Text>
        ))}
      </View>

      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>What Our Users Say</Text>
        {selectedService.testimonials.map((testimonial, index) => (
          <View key={index} style={styles.testimonial}>
            <Text style={styles.testimonialName}>{testimonial.name}</Text>
            <Text style={styles.testimonialComment}>"{testimonial.comment}"</Text>
          </View>
        ))}
      </View>

      
      <View style={styles.section}>
        <Text style={{fontSize:24,fontWeight:'bold',color:"#082c32"}}>FAQ</Text>
        {
                                selectedService.faqs.map(eachItem=>(
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

      
      <TouchableOpacity
        style={styles.button}
        onPress={() => {navigation.navigate(selectedService.val)}}
      >
        <Text style={styles.buttonText}>Book {selectedService.title}</Text>
      </TouchableOpacity>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  serviceImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
    marginLeft:10
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  point: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  testimonial: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  testimonialName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  testimonialComment: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  faq: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  faqQuestion: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  faqAnswer: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    backgroundColor: '#ed9a3a',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
});

export default ServicesScreen;