import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Help = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: { display: 'none' },
    });
  }, [navigation]);

  const helpOptions = [
    { id: 1, title: 'FAQs', icon: 'questioncircleo', onPress: () => navigation.navigate('FAQ') },
    { id: 2, title: 'Contact Support', icon: 'customerservice', onPress: () => navigation.navigate('ContactSupport') },
    { id: 3, title: 'Emergency Numbers', icon: 'phone', onPress: () => navigation.navigate('Emergency') },
    { id: 4, title: 'App Guide', icon: 'book', onPress: () => navigation.navigate('AppGuide') },
    { id: 5, title: 'Lab Tests', icon: 'gitlab',onPress:()=>navigation.navigate('LabTestQuesition')},
    { id: 5, title: 'Chat With Us', icon: 'wechat',onPress:()=>navigation.navigate('LabTestQuesition')}
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Account')}>
          <Icon name="arrowleft" size={24} color="#456b52" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Help Center</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.subTitle}>How can we assist you today?</Text>
        {helpOptions.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={styles.helpItem}
            onPress={option.onPress}
          >
            <Icon name={option.icon} size={28} color="#2a5e5a" style={styles.icon} />
            <Text style={styles.helpText}>{option.title}</Text>
            <Icon name="right" size={20} color="#ccc" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e9e6',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#456b52',
    marginLeft: 15,
  },
  content: {
    padding: 20,
  },
  subTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  helpItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e5e9e6',
  },
  icon: {
    marginRight: 15,
  },
  helpText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#2a5e5a',
  },
});