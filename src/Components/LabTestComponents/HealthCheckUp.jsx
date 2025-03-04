import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const data = [
  {
    id: 1,
    title: 'Bone',
    backgroundColor: '#edbfae',
    color: 'white',
  },
  {
    id: 2,
    title: 'Heart',
    backgroundColor: '#aed8ed',
    color: 'white',
  },
  {
    id: 3,
    title: 'Liver',
    backgroundColor: '#aee0ed',
    color: 'white',
  },
  {
    id: 4,
    title: 'Kidney',
    backgroundColor: '#edaeae',
    color: 'white',
  },
  {
    id: 5,
    title: 'Liver',
    backgroundColor: '#aee0ed',
    color: 'white',
  },
   
];

const HealthCheckUp = () => {
  return (
    <View style={styles.offerContainer}>
      <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,}}>
        <Text style={{ fontSize: 20, color: '#03401f', fontWeight: 'bold' }}>Popular Health Checkup</Text>
        <Text style={{color:'#1c076d',fontSize:15}}>View All</Text>
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10, }}>
        {data.map((eachItem) => (
          <View
            key={eachItem.id}
            style={{
              backgroundColor: eachItem.backgroundColor,
              height: 200,
              width: 168,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
              marginHorizontal:10,           }}
          >

            <Text style={{ color: eachItem.color, fontSize: 17, fontWeight: 'bold',position:'absolute',top:10,left:10 }}>
              {eachItem.title}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default HealthCheckUp;

const styles = StyleSheet.create({
  offerContainer: {
    backgroundColor: '#d2ede1',
    height: 'auto',
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
  },
});