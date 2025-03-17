import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Location = ({ navigation, route }) => {
  const previousScreen = route.params?.previousScreen || 'Home';
  const [placeholder, setPlaceholder] = useState('');
  const [textIndex, setTextIndex] = useState(0);

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

  return (
    <>
      <View style={styles.headerContainer}>
          <Icon 
            name="arrowleft" 
            size={30} 
            color={'gray'} 
            style={{ fontWeight: 700 }} 
            onPress={() => navigation.navigate(previousScreen)} 
          />
          <Text style={styles.title}>Location</Text>
      </View>

      <LinearGradient 
          colors={['#e4f4f0', '#89eaa9']} 
          style={styles.container}
          locations={[0.7, 1.0]}
      >
        <Text style={styles.locationHeading}>Add Your Location</Text>

        <TextInput 
            placeholder={placeholder} 
            style={styles.inputContainer}
            placeholderTextColor="#888"
            placeholderOptions={{
              size:30
            }}
        />

        <Text style={{ marginTop: 20, textAlign: 'center' }}>Or</Text>

        <TouchableOpacity 
            style={{
              marginTop: 20,
              justifyContent: 'center',
              color: 'black',
              flexDirection: 'row'
            }}
        >
          <MaterialIcons name="my-location" size={25} color={'gray'} />
          <Text style={{ fontSize: 20, marginLeft: 8 }}>Current Location</Text>
        </TouchableOpacity>
      </LinearGradient>
    </>
  );
};

export default Location;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'gray',
    marginLeft: 15
  },
  headerContainer: {
    height: 70,
    width: 'auto',
    backgroundColor: '#fff',
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: 'row',
    paddingTop: 20,
    paddingLeft: 20,
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
    fontSize:18
  },
});
