import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import Fontisto from 'react-native-vector-icons/MaterialCommunityIcons';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const Data = [
  {
    id: 1,
    title: 'Monthly Premium',
  },
  {
    id: 2,
    title: 'Six Month Premium',
  },
  {
    id: 3,
    title: 'Yearly Premium',
  },
];

const Premium = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.offerContainer}>
      <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#456b52' }}>Get Premium</Text>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        showsPagination={false}
        autoplay={true}
        loop={true}
        autoplayTimeout={5} 
      >
        {Data.map((eachItem) => (
          <TouchableOpacity key={eachItem.id} style={styles.container} onPress={() => {navigation.navigate('Doctors', { screen: 'PremiumScreen' })}}>
            <LottieView
              source={require('../../../assets/primium.json')}
              style={styles.logo}
              autoPlay
              loop
            />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ width: '52%', paddingTop: 20, paddingLeft: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Fontisto name="label-percent-outline" size={20} color={'#45705c'} />
                  <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#45705c', marginLeft: 5 }}>
                    {eachItem.title}
                  </Text>
                </View>
                <Text style={{ fontSize: 14, fontWeight: '600', marginLeft: 9, marginTop: 10, color: '#56635c' }}>
                  High Quality | Fast Delivery
                </Text>
                <View style={{ flexDirection: 'row', marginTop: 7 }}>
                  <Text style={{ marginLeft: 9, color: '#055d2e', fontSize: 20 }}>
                    $10/<Text style={{ fontSize: 13 }}>{eachItem.title}</Text>
                  </Text>
                </View>
              </View>
              <Image
                source={{
                  uri: 'https://img.freepik.com/premium-vector/premium-gold-vector-emblem-premium-label-stamp_545399-2777.jpg?semt=ais_hybrid',
                }}
                style={{ height: 100, width: 100, marginLeft: 30, marginTop: 10 }}
              />
            </View>
          </TouchableOpacity>
        ))}
      </Swiper>
    </View>
  );
};

export default Premium;

const styles = StyleSheet.create({
  offerContainer: {
    backgroundColor: '#d3eef0',
    height: 280,
    marginHorizontal: 20,
    borderRadius: 20,
    marginTop: 20,
    padding: 20,
  },
  container: {
    width: '99%',
    height: 200,
    backgroundColor: '#d8f2e6',
    borderRadius: 20,
    marginTop: 20,
  },
  logo: {
    height: 25,
    marginLeft: 190,
    marginTop: 10,
  },
  wrapper: {
    height: 250, 
  },
});