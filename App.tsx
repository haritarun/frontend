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
import { createStackNavigator } from '@react-navigation/stack';
import Location from './src/Components/Location';
import StoreScreen from './src/Screens/StoreScreen';
import NotificationScreen from './src/Screens/NotificationScreen';
import CartScreen from './src/Screens/CartScreen';
import ServicesScreen from './src/Screens/ServicesScreen';
import EveryDayEssentialsAll from './src/Screens/EveryDayEssentialsAll';
import GeneralTestAll from './src/Screens/GeneralTestAll';
import TestAll from './src/Screens/TestAll';
import AllCategoryAll from './src/Screens/AllCategoryAll';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <Stack.Navigator >
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="LocationScreen" component={Location} options={{
          headerShown:false
        }}/>
        <Stack.Screen name="StoreScreen" component={StoreScreen} 
        options={{
          headerShown:false
        }}/>
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} options={{
          headerShown:false
        }}/>
        <Stack.Screen name="CartScreen" component={CartScreen} options={{
          headerShown:false
        }}/>
        <Stack.Screen name="ServicesScreen" component={ServicesScreen} options={{
          headerShown:false
        }} />
        <Stack.Screen name="EveryDayEssentialsAll" component={EveryDayEssentialsAll}
        options={{
          headerShown:false
        }}/>
        <Stack.Screen name="GeneralTestAll" component={GeneralTestAll} 
        options={{
          headerShown:false
        }}
        />
        <Stack.Screen name="TestAll" component={TestAll} 
        options={{
          headerShown:false
        }}/>
        <Stack.Screen name="AllCategory" component={AllCategoryAll}
         options={{
          headerShown:false
        }}/>
          
  </Stack.Navigator>
  );
};



const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
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
        name="Doctors"
        component={HomeStackScreen}
          
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
          name="Product"
          component={Product}
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