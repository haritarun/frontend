import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LottieView from 'lottie-react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LabTestScreen from './src/Screens/LabTestScreen';
import HomeScreen from './src/Screens/HomeScreen';
import Product from './src/Screens/Product';
import Chat from './src/Screens/Chat';
import Account from './src/Screens/Account';


const Tab = createBottomTabNavigator();


  


const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Account"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#32CE7A',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            position: 'absolute',
            bottom: 21,
            marginHorizontal: 30,
            borderRadius: 80,
            backgroundColor: '#def1ec',
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <View style={focused ? styles.iconContainerFocused : styles.iconContainer}>
                <Icon name="home" color={color} size={25} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="LabTest"
          component={LabTestScreen}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <View style={focused ? styles.iconContainerFocused : styles.iconContainer}>
                <MaterialCommunityIcons name="flask-plus-outline" size={25} color={color} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Product"
          component={Product}
          options={{
            tabBarIcon: () => (
              <View style={styles.logoContainer}>
                <LottieView
                  source={require('./assets/logo.json')}
                  style={styles.logo}
                  autoPlay
                  loop
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Doctors"
          component={Chat}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <View style={focused ? styles.iconContainerFocused : styles.iconContainer}>
                <FontAwesome name="stethoscope" size={25} color={color} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <View style={focused ? styles.iconContainerFocused : styles.iconContainer}>
                <FontAwesome5 name="user-cog" size={23} color={color} />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:5,
  },
  iconContainerFocused: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    height: 50,
    width: 50,
    marginTop:12
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 50,
    width: 50,
  },
});