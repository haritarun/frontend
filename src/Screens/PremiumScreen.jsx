import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect } from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';

const plans = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118',
    title: 'monthly',
    description: 'Essential digital tools for small clinics',
    price: '$299/month',
    popular: false
    },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322',
    title: 'Yearly',
    description: 'Comprehensive solution for medium hospitals',
    price: '$9,499/year',
    popular: true
  },
];

const advantages = [
  {
    id: '1',
    title: '24/7 Doctor Consultations',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
    description: 'Instant access to board-certified physicians anytime'
  },
  {
    id: '2',
    title: 'Advanced Diagnostics',
    imageUrl: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0',
    description: 'Priority scheduling for MRI, CT scans and lab tests'
  },
  {
    id: '3',
    title: 'Personal Health Manager',
    imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528',
    description: 'Dedicated coordinator for all your healthcare needs'
  },
  {
    id: '4',
    title: 'Premium Hospital Rooms',
    imageUrl: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322',
    description: 'Private suites with luxury amenities during hospital stays'
  }
];

const PremiumScreen = () => {
  const navigation = useNavigation();
  
  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: { display: 'none' }
    });
    
    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: { display: 'flex' }
      });
    };
  }, [navigation]);

  return (
    <ScrollView style={styles.headerContainer}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Account')}>
          <Icon 
            name="cross" 
            size={25} 
            color={'#d2cece'} 
            style={{ fontWeight: '700' }} 
          />
        </TouchableOpacity>
        <Text style={styles.title}>Upgrade to Premium</Text>
      </View>
      
      <Swiper 
        loop={true} 
        autoplay={true} 
        autoplayTimeout={4} 
        showsButtons={false} 
        showsPagination={false}
        style={styles.swiper}
      >
        {advantages.map(eachItem => (
          <View key={eachItem.id} style={styles.slide}>
            <Image 
              source={{uri: eachItem.imageUrl}} 
              style={styles.slideImage}
            />
            <Text style={styles.slideTitle}>{eachItem.title}</Text>
            <View style={styles.slideDescriptionContainer}>
              <Text style={styles.slideDescription}>{eachItem.description}</Text>
            </View>
          </View>
        ))}
      </Swiper>
      
      <View style={styles.plansContainer}>
        {plans.map((eachItem) => (
          <View key={eachItem.id} style={styles.planCard}>
            <View style={{ flexDirection: 'row', alignItems: 'center' ,justifyContent:'space-between'}}>
              <Text style={styles.planTitle}>{eachItem.title}</Text>
              {
                eachItem.popular && (
                  <Text style={{ color: 'white', fontSize: 13, fontWeight: 700,backgroundColor:'green' ,borderRadius:20,padding:5}}>Popular</Text>
                )
              }
            </View>
            <Text style={{marginTop:5,fontWeight:500}}> First 7 Days Free . Then <Text style={{fontWeight:700}}>{eachItem.price}</Text></Text>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10 }}>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 12,
                  paddingVertical: 5,
                  borderRadius: 12,
                  backgroundColor: '#f0f0f0',
                  borderWidth: 1,
                  borderColor: '#ddd',
                  alignItems: 'center'
                }}
                onPress={()=>{navigation.navigate('Doctors',{screen:'PremiumDetailes',params:{data:eachItem}})}}
              >
                <Text style={{ fontSize: 14, fontWeight: '600', color: '#333' }}>View Plan  →</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
      <TouchableOpacity 
      style={{width:'90%',alignItems:'center',justifyContent:'center',backgroundColor:'#494e4e',padding:15,borderRadius:10,marginTop:20,marginHorizontal:20}}>
        <Text style={{color:"white",fontWeight:700,fontSize:18}}>Continue</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{justifyContent:'center',width:'100%',marginTop:10}}>
      <Text style={{textAlign:'center',fontSize:18,textDecorationLine:'underline'}}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 15,
    textAlign: 'center',
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  swiper: {
    height: 430,
    marginTop: 10,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
    borderRadius: 10,
    
    marginTop: 10,
    paddingTop:50,
    paddingBottom: 50,
    
  },
  slideImage: {
    height: 200,
    width: '75%',
    borderRadius: 20,
    marginTop: 10,
  },
  slideTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    marginTop: 20,
  },
  slideDescriptionContainer: {
    width: '65%',
    fontWeight:500,

  },
  slideDescription: {
    fontSize: 14,
    color: 'black',
    marginTop: 20,
    textAlign: 'center',
    lineHeight: 20,
    fontWeight: '700',
  },
  plansContainer: {
    paddingHorizontal:20,
    marginTop: 20,
  },
  planCard: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#b4b9b9',
    width: '100%',
    padding: 15,
    marginBottom: 15,
    marginVertical:10
  },
  planTitle: {
    fontSize: 16,
    color:'#494e4e',
    fontWeight:700,
  },
});

export default PremiumScreen;