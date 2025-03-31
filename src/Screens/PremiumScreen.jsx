import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect } from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';

const plans = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118',
    title: 'Clinic Pro',
    description: 'Essential digital tools for small clinics',
    priceMonthly: '$299/month',
    priceAnnual: '$2,999/year',
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322',
    title: 'Hospital Suite',
    description: 'Comprehensive solution for medium hospitals',
    priceMonthly: '$899/month',
    priceAnnual: '$9,499/year',
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
            <Text style={styles.planTitle}>{eachItem.title}</Text>
          </View>
        ))}
      </View>
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
    height: 300,
    marginTop: 10,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
    borderRadius: 10,
    paddingVertical: 30,
    marginTop: 10,
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
    marginTop: 5,
  },
  slideDescriptionContainer: {
    width: '65%',
  },
  slideDescription: {
    fontSize: 14,
    color: 'black',
    marginTop: 10,
    textAlign: 'center',
    lineHeight: 20,
    fontWeight: '700',
  },
  plansContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  planCard: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'blue',
    width: '80%',
    padding: 15,
    marginBottom: 15,
  },
  planTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PremiumScreen;