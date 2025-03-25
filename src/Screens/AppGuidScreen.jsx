import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Octicons from 'react-native-vector-icons/Octicons';
import EmergencyNumber from './EmergencyNumber';

const AppGuideScreen = () => {
    const navigation = useNavigation()
    const [currentStep, setCurrentStep] = useState(0);
    const steps = [
        { title: "Create Your Profile", completed: false },
        { title: "Add Emergency Contacts", completed: false },
        { title: "Set Up Health Records", completed: false },
        { title: "Book Your First Appointment", completed: false },
        { title: "Explore Services", completed: false },
        { title: "Enable Notifications", completed: false },
        { title: "Verify Account", completed: false },
        { title: "Link Insurance Details", completed: false },
        { title: "Order Medicine", completed: false },
        { title: "Schedule Lab Test", completed: false },
        { title: "Track Symptoms", completed: false },
        { title: "Set Medication Reminders", completed: false },
        { title: "Join Telemedicine Call", completed: false },
        { title: "Review Health Reports", completed: false },
        { title: "Update Payment Method", completed: false },
        { title: "Rate Your Experience", completed: false },
    ];

    

    const completeStep = () => {
        const updatedSteps = [...steps];
        updatedSteps[currentStep].completed = true;
        
        if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
        }

    };

    const getNavigate =(index)=>{
        setCurrentStep(index)
    }

  return (
    <>
        <View style={styles.headerContainer}>
        <View style={{flexDirection:'row'}}>
            <Icon 
                name="arrowleft" 
                size={22} 
                color={'gray'} 
                style={{ fontWeight: 700 }} 
                onPress={() => navigation.navigate('Account')} 
            />
            <Text style={styles.title}>App Guide</Text>
        </View>
        
            
        <View style={styles.container}>
        
        <ScrollView 
        showsVerticalScrollIndicator={false}>
            <Text style={{textAlign:'center',lineHeight:25,fontSize:18,marginBottom:20,color:'#4b4a4a',fontWeight:700}}>
                Saves time by providing step-by-step guidance,
                reducing confusion and enhancing the overall experience.
            </Text>
            {steps.map((step, index) => (
                <View key={index} style={styles.stepContainer}>
                
                <View style={[
                    styles.stepIndicator,
                    index === currentStep && styles.currentStep,
                    step.completed && styles.completedStep
                ]}>
                    {step.completed ? (
                    <Text style={styles.stepIcon}>{index+1}</Text>
                    ) : (
                    <Text style={styles.stepNumber}>{index +1}</Text>
                    )}
          </View>

          
          <TouchableOpacity style={styles.stepContent} onPress={()=>{getNavigate(index)}}>
            <Text style={styles.stepTitle}>{step.title}</Text>
            
            
            {index === currentStep && (
              <>
                {index === 0 && <Login />}
                {index === 1 && <EmergencyContact />}
                {index === 2 && <HealthCard />}
                {index === 3 && <BookYourAppointment />}
                {index === 4 && <Services />}
                {index === 5 && <Notifications />}
                {index === 6 && <Account />}
                {index === 7 && <Insurance />}
                {index === 8 && <OrderMedicines />}
                {index === 9 && <LabTest />}
                {index === 10 && <Symptom />}
                {index === 11 && <Medicaton />}
                {index === 12 && <Call />}
                {index === 13 && <Reports />}
                {index === 14 && <Payment />}
                {index === 15 && <Rating />}

                
                <TouchableOpacity 
                  style={styles.nextButton}
                  onPress={completeStep}
                >
                  <Text style={styles.buttonText}>
                    {index === steps.length - 1 ? 'Finish' : 'Complete Step'}
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </TouchableOpacity>

          
          {index < steps.length - 1 && (
            <View style={[
              styles.connectorLine,
              step.completed && styles.completedLine
            ]} />
          )}
        </View>
      ))}
      </ScrollView>
    </View>
        
    </View>
    
    </>

  );
};

const createYourProfileSteps = [
    { title: "Enter Full Name", completed: false },
    { title: "Add Date of Birth", completed: false },
    { title: "Upload Profile Photo", completed: false },
    { title: "Provide Contact Info", completed: false },
];


  
  const addEmergencyContactsSteps = [
    { title: "Input Primary Contact", completed: false },
    { title: "Add Secondary Contact", completed: false },
    { title: "Set Contact Name", completed: false },
    { title: "Save Numbers", completed: false },
  ];
  
  const setUpHealthRecordsSteps = [
    { title: "Upload Past Records", completed: false },
    { title: "Enter Allergies", completed: false },
    { title: "List Medications", completed: false },
    { title: "Save Health Data", completed: false },
  ];
  
  const bookYourFirstAppointmentSteps = [
    { title: "Choose Doctor", completed: false },
    { title: "Select Date", completed: false },
    { title: "Pick Time Slot", completed: false },
    { title: "Confirm Booking", completed: false },
  ];
  
  const exploreServicesSteps = [
    { title: "View Medicine Delivery", completed: false },
    { title: "Check Lab Tests", completed: false },
    { title: "Browse Health Packages", completed: false },
    { title: "See Emergency Options", completed: false },
  ];
  
  const enableNotificationsSteps = [
    { title: "Allow App Permissions", completed: false },
    { title: "Set Reminder Times", completed: false },
    { title: "Enable Alerts", completed: false },
    { title: "Test Notification", completed: false },
  ];
  
  const verifyAccountSteps = [
    { title: "Enter Email", completed: false },
    { title: "Receive Code", completed: false },
    { title: "Input Verification Code", completed: false },
    { title: "Confirm Verification", completed: false },
  ];
  
  const linkInsuranceDetailsSteps = [
    { title: "Select Provider", completed: false },
    { title: "Enter Policy Number", completed: false },
    { title: "Upload Insurance Card", completed: false },
    { title: "Save Details", completed: false },
  ];
  
  const orderMedicineSteps = [
    { title: "Search Medication", completed: false },
    { title: "Add to Cart", completed: false },
    { title: "Enter Delivery Address", completed: false },
    { title: "Place Order", completed: false },
  ];
  
  const scheduleLabTestSteps = [
    { title: "Pick Test Type", completed: false },
    { title: "Choose Date", completed: false },
    { title: "Select Home Collection", completed: false },
    { title: "Confirm Test", completed: false },
  ];
  
  const trackSymptomsSteps = [
    { title: "Log Symptom", completed: false },
    { title: "Set Severity", completed: false },
    { title: "Add Notes", completed: false },
    { title: "Save Entry", completed: false },
  ];
  
  const setMedicationRemindersSteps = [
    { title: "Add Medicine Name", completed: false },
    { title: "Set Dosage", completed: false },
    { title: "Choose Times", completed: false },
    { title: "Save Reminder", completed: false },
  ];
  
  const joinTelemedicineCallSteps = [
    { title: "Check Appointment", completed: false },
    { title: "Test Audio/Video", completed: false },
    { title: "Join Call", completed: false },
    { title: "End Session", completed: false },
  ];
  
  const reviewHealthReportsSteps = [
    { title: "Open Report", completed: false },
    { title: "View Results", completed: false },
    { title: "Download PDF", completed: false },
    { title: "Share with Doctor", completed: false },
  ];
  
  const updatePaymentMethodSteps = [
    { title: "Add Card Details", completed: false },
    { title: "Verify Card", completed: false },
    { title: "Set as Default", completed: false },
    { title: "Save Payment", completed: false },
  ];
  
  const rateYourExperienceSteps = [
    { title: "Select Rating", completed: false },
    { title: "Write Feedback", completed: false },
    { title: "Submit Review", completed: false },
    { title: "View Rewards", completed: false },
  ];

const Login = () => {
  return(
    <View>
    {
    createYourProfileSteps.map(eachItem=>(
        <View style={{flexDirection:'row',alignItems:'center',}}>
            <Octicons name="dot" size={30} color={'#cbcaca'}/>
            <Text style={{marginLeft:10,fontSize:17,fontWeight:700,color:'#8c8c8c'}}>{eachItem.title}</Text>
        </View>
    ))
  }
  </View>
  )

}

const EmergencyContact = () => {
    return(
      <View>
      {
      addEmergencyContactsSteps.map(eachItem=>(
          <View style={{flexDirection:'row',alignItems:'center',}}>
              <Octicons name="dot" size={30} color={'#cbcaca'}/>
              <Text style={{marginLeft:10,fontSize:17,fontWeight:700,color:'#8c8c8c'}}>{eachItem.title}</Text>
          </View>
      ))
    }
    </View>
    )
  
}

const HealthCard = () => {
    return(
      <View>
      {
      setUpHealthRecordsSteps.map(eachItem=>(
          <View style={{flexDirection:'row',alignItems:'center',}}>
              <Octicons name="dot" size={30} color={'#cbcaca'}/>
              <Text style={{marginLeft:10,fontSize:17,fontWeight:700,color:'#8c8c8c'}}>{eachItem.title}</Text>
          </View>
      ))
    }
    </View>
    )
  
}
  
const BookYourAppointment = () => {
    return(
      <View>
      {
      bookYourFirstAppointmentSteps.map(eachItem=>(
          <View style={{flexDirection:'row',alignItems:'center',}}>
              <Octicons name="dot" size={30} color={'#cbcaca'}/>
              <Text style={{marginLeft:10,fontSize:17,fontWeight:700,color:'#8c8c8c'}}>{eachItem.title}</Text>
          </View>
      ))
    }
    </View>
    )
  
}

const Services = () => {
    return(
      <View>
      {
      exploreServicesSteps.map(eachItem=>(
          <View style={{flexDirection:'row',alignItems:'center',}}>
              <Octicons name="dot" size={30} color={'#cbcaca'}/>
              <Text style={{marginLeft:10,fontSize:17,fontWeight:700,color:'#8c8c8c'}}>{eachItem.title}</Text>
          </View>
      ))
    }
    </View>
    )  
}

const Notifications = () => {
    return(
      <View>
      {
      enableNotificationsSteps.map(eachItem=>(
          <View style={{flexDirection:'row',alignItems:'center',}}>
              <Octicons name="dot" size={30} color={'#cbcaca'}/>
              <Text style={{marginLeft:10,fontSize:17,fontWeight:700,color:'#8c8c8c'}}>{eachItem.title}</Text>
          </View>
      ))
    }
    </View>
    )  
}

const Account = () => {
    return(
      <View>
      {
      verifyAccountSteps.map(eachItem=>(
          <View style={{flexDirection:'row',alignItems:'center',}}>
              <Octicons name="dot" size={30} color={'#cbcaca'}/>
              <Text style={{marginLeft:10,fontSize:17,fontWeight:700,color:'#8c8c8c'}}>{eachItem.title}</Text>
          </View>
      ))
    }
    </View>
    )  
}

const Insurance = () => {
    return(
      <View>
      {
      linkInsuranceDetailsSteps.map(eachItem=>(
          <View style={{flexDirection:'row',alignItems:'center',}}>
              <Octicons name="dot" size={30} color={'#cbcaca'}/>
              <Text style={{marginLeft:10,fontSize:17,fontWeight:700,color:'#8c8c8c'}}>{eachItem.title}</Text>
          </View>
      ))
    }
    </View>
    )  
}

const OrderMedicines = () => {
    return(
      <View>
      {
      orderMedicineSteps.map(eachItem=>(
          <View style={{flexDirection:'row',alignItems:'center',}}>
              <Octicons name="dot" size={30} color={'#cbcaca'}/>
              <Text style={{marginLeft:10,fontSize:17,fontWeight:700,color:'#8c8c8c'}}>{eachItem.title}</Text>
          </View>
      ))
    }
    </View>
    )  
}

const LabTest = () => {
    return(
      <View>
      {
      scheduleLabTestSteps.map(eachItem=>(
          <View style={{flexDirection:'row',alignItems:'center',}}>
              <Octicons name="dot" size={30} color={'#cbcaca'}/>
              <Text style={{marginLeft:10,fontSize:17,fontWeight:700,color:'#8c8c8c'}}>{eachItem.title}</Text>
          </View>
      ))
    }
    </View>
    )  
}

const Symptom = () => {
    return(
      <View>
      {
      trackSymptomsSteps.map(eachItem=>(
          <View style={{flexDirection:'row',alignItems:'center',}}>
              <Octicons name="dot" size={30} color={'#cbcaca'}/>
              <Text style={{marginLeft:10,fontSize:17,fontWeight:700,color:'#8c8c8c'}}>{eachItem.title}</Text>
          </View>
      ))
    }
    </View>
    )  
}

const Medicaton = () => {
    return(
      <View>
      {
      setMedicationRemindersSteps.map(eachItem=>(
          <View style={{flexDirection:'row',alignItems:'center',}}>
              <Octicons name="dot" size={30} color={'#cbcaca'}/>
              <Text style={{marginLeft:10,fontSize:17,fontWeight:700,color:'#8c8c8c'}}>{eachItem.title}</Text>
          </View>
      ))
    }
    </View>
    )  
}

const Call = () => { 
    return(
      <View>
      {
      joinTelemedicineCallSteps.map(eachItem=>(
          <View style={{flexDirection:'row',alignItems:'center',}}>
              <Octicons name="dot" size={30} color={'#cbcaca'}/>
              <Text style={{marginLeft:10,fontSize:17,fontWeight:700,color:'#8c8c8c'}}>{eachItem.title}</Text>
          </View>
      ))
    }
    </View>
    )  
}

const Reports = () => {
    return(
      <View>
      {
      reviewHealthReportsSteps.map(eachItem=>(
          <View style={{flexDirection:'row',alignItems:'center',}}>
              <Octicons name="dot" size={30} color={'#cbcaca'}/>
              <Text style={{marginLeft:10,fontSize:17,fontWeight:700,color:'#8c8c8c'}}>{eachItem.title}</Text>
          </View>
      ))
    }
    </View>
    )  
}

const Payment = () => {
    return(
      <View>
      {
      updatePaymentMethodSteps.map(eachItem=>(
          <View style={{flexDirection:'row',alignItems:'center',}}>
              <Octicons name="dot" size={30} color={'#cbcaca'}/>
              <Text style={{marginLeft:10,fontSize:17,fontWeight:700,color:'#8c8c8c'}}>{eachItem.title}</Text>
          </View>
      ))
    }
    </View>
    )  
}

const Rating = () => {
    return(
      <View>
      {
      rateYourExperienceSteps.map(eachItem=>(
          <View style={{flexDirection:'row',alignItems:'center',}}>
              <Octicons name="dot" size={30} color={'#cbcaca'}/>
              <Text style={{marginLeft:10,fontSize:17,fontWeight:700,color:'#8c8c8c'}}>{eachItem.title}</Text>
          </View>
      ))
    }
    </View>
    )  
}





 




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
        backgroundColor: '#f8f8f8',
        height:'100%',
        flexDirection: 'column',
        paddingTop: 20,
        paddingLeft:10,
        paddingRight:10
      },

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff'
  },
  stepContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    position: 'relative'
  },
  stepIndicator: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    zIndex: 1
  },
  currentStep: {
    borderWidth: 2,
    borderColor: '#4CAF50'
  },
  completedStep: {
    backgroundColor: '#4CAF50'
  },
  stepNumber: {
    color: '#757575',
    fontWeight: 'bold'
  },
  stepIcon: {
    color: 'white',
    fontWeight: 'bold'
  },
  stepContent: {
    flex: 1,
    paddingBottom: 30
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  stepForm: {
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginBottom: 15
  },
  connectorLine: {
    position: 'absolute',
    left: 14,
    top: 30,
    bottom: 0,
    width: 2,
    backgroundColor: '#e0e0e0'
  },
  completedLine: {
    backgroundColor: '#4CAF50'
  },
  nextButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});

export default AppGuideScreen;