import React, { useEffect, useState, useLayoutEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import Geolocation from '@react-native-community/geolocation';

const Location = ({ navigation, route }) => {
  const previousScreen = route.params?.previousScreen || 'Home';
  const [placeholder, setPlaceholder] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [address1, setAddress1] = useState(""); 

  const placeholderOptions = [
    'Enter Your Location...',
    'Search Nearby Places...',
    'Add a Landmark...',
    'Type Your Destination...'
  ];


  useEffect(() => {
    let text = placeholderOptions[textIndex];
    let charIndex = 0;
    const typeEffect = setInterval(() => {
      if (charIndex < text.length) {
        setPlaceholder(text.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeEffect);
        setTimeout(() => {
          setTextIndex((prevIndex) => (prevIndex + 1) % placeholderOptions.length);
          setPlaceholder('');
        }, 1500); 
      }
    }, 100); 

    return () => clearInterval(typeEffect);
  }, [textIndex]);


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


  const getAddress = async (lat, lon) => {
    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/reverse`,{
        params: {
          lat: lat,
          lon: lon,
          format: "json",
        },
      });
      setAddress1(response.data.display_name);
      
    } catch (e) {
      console.log("Error getting address", e);
      Alert.alert('Error', 'Failed to get address');
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const newLocation = {
          lat: position.coords.latitude,
          lon: position.coords.longitude
        };
        getAddress(newLocation.lat, newLocation.lon);
      },
      (error) => {
        Alert.alert('Error', 'Could not get your location');
        console.log(error);
      },
      
    );
  };

  return (
    <>
      <View style={styles.headerContainer}>
        <Icon 
          name="arrowleft" 
          size={20} 
          color={'gray'} 
          style={{ fontWeight: '700' }} 
          onPress={() => navigation.navigate(previousScreen)} 
        />
        <Text style={styles.title}>Location</Text>
      </View>

      <LinearGradient 
        colors={['#ffffff', '#ffffff']} 
        style={styles.container}
        locations={[0.7, 1.0]}
      >
        <Text style={styles.locationHeading}>Add Your Location</Text>

        <TextInput 
          placeholder={placeholder} 
          style={styles.inputContainer}
          placeholderTextColor="#888"
          value={address1}
          onChangeText={setAddress1}
        />
        
        <Text style={{ marginTop: 20, textAlign: 'center' }}>Or</Text>
        
        <TouchableOpacity 
          style={styles.currentLocationButton}
          onPress={getCurrentLocation}
        >
          <MaterialIcons name="my-location" size={25} color={'gray'} />
          <Text style={styles.currentLocationText}>Current Location</Text>
        </TouchableOpacity>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'gray',
    marginLeft: 15
  },
  headerContainer: {
    height: 60,
    width: 'auto',
    backgroundColor: '#fafaf8',
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: 'row',
    paddingTop: 20,
    paddingLeft: 20,
    alignItems: 'center'
  },
  locationHeading: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
    color: 'gray',
    fontWeight: '700',
  },
  inputContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    fontSize: 18
  },
  currentLocationButton: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  currentLocationText: {
    fontSize: 20, 
    marginLeft: 8,
    color: 'black'
  }
});

export default Location;