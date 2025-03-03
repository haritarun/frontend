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
        initialRouteName="LabTest"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#32CE7A',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            flexDirection: 'row',
            position: 'absolute',
            bottom: 21,
            marginHorizontal: 30,
            borderRadius: 80,
            backgroundColor: '#def1ec',
            justifyContent: 'center',
            alignContent: 'center',
            height: 60,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <View style={focused ? styles.HomeContainer : styles.imageContainer}>
                <Icon name="home" color={color} size={focused ? 20 : 25} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="LabTest"
          component={LabTestScreen}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <View style={focused ? styles.HomeContainer : styles.imageContainer}>
                <MaterialCommunityIcons
                  name="flask-plus-outline"
                  size={focused ? 20 : 25}
                  color={color}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="About"
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
              <View style={focused ? styles.HomeContainer : styles.imageContainer}>
                <FontAwesome name="stethoscope" size={focused ? 20 : 25} color={color} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <View style={focused ? styles.HomeContainer : styles.imageContainer}>
                <FontAwesome5 name="user-cog" size={focused ? 20 : 23} color={color} />
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  HomeContainer: {
    height: 50,
    width: 50,
    backgroundColor: '#ffffff',
    borderRadius: 25, 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 17,
  },
  logo: {
    height: 50,
    width: 50,
    backgroundColor: 'transparent',
    borderRadius: 20,
  },
  logoContainer: {
    height: 50,
    width: 50,
    borderRadius: 25, 
    marginTop: 12,
  },
  imageContainer: {
    marginTop: 20,
    height: 30,
    width: 30,
  },
});