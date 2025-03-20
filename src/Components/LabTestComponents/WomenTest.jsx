import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import ImageCard from '../HomeScreenComponents/ImageCard';

const recommendations = [
  {
    id: 1,
    imageUrl: 'https://www.lifeworkswellnesscenter.com/wp-content/uploads/2021/11/mens_health_lab.jpg',
    title: 'Prostate Cancer Screening (PSA Test)'
  },
  {
    id: 2,
    imageUrl: 'https://thumbs.dreamstime.com/b/gp-showing-to-patient-health-condition-test-result-tablet-latina-women-older-men-provide-explanation-treatment-plan-356736461.jpg',
    title: 'Cholesterol Level Check'
  },
  {
    id: 3,
    imageUrl: 'https://www.affiliatedurologists.com/sites/default/files/checkups-for-men-at-what-age-and-how-often-should-men-get-prostate-screening-and-other-tests.jpg',
    title: 'Blood Pressure Measurement'
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    title: 'Colonoscopy Screening'
  },
  {
    id: 5,
    imageUrl: 'https://s.wsj.net/public/resources/images/BN-NY367_0510HJ_M_20160509175055.jpg',
    title: 'Testosterone Level Test'
  },
  {
    id: 6,
    imageUrl: 'https://www.shutterstock.com/image-photo/attractive-male-doctor-ophthalmologist-checking-600w-2479075445.jpg',
    title: 'Blood Glucose Test (Diabetes Screening)'
  },
  {
    id: 7,
    imageUrl: 'https://www.lifeworkswellnesscenter.com/wp-content/uploads/2021/11/mens_health_lab.jpg',
    title: 'Abdominal Aortic Aneurysm Ultrasound'
  },
];

const MenTest = () => {
  return (
    <View style={styles.offerContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Recommend Test For Women</Text>
        <Text style={styles.subText}>Be Healthy</Text>
      </View>
      <FlatList
        data={recommendations}
        renderItem={({ item }) => <ImageCard data={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default MenTest;

const styles = StyleSheet.create({
  offerContainer: {
    backgroundColor: '#ffffff',
    height: 'auto',
    marginHorizontal: 20,
    borderRadius: 15,
    marginTop: 20,
    paddingHorizontal: 17,
    paddingTop: 20,
    paddingBottom: 20,
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerContainer: {
    marginBottom: 15,
  },
  headerText: {
    color: '#2c3e50',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  subText: {
    color: '#7f8c8d',
    fontSize: 14,
    marginTop: 5,
  },
  listContainer: {
    paddingRight: 10,
  },
});