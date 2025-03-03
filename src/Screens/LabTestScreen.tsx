import { StyleSheet,ScrollView} from 'react-native'
import React from 'react'
import HomeHeader from '../Components/HomeHeader';
import LinearGradient from 'react-native-linear-gradient';
import GeneralTest from '../Components/HomeScreenComponents/GeneralTest';
import Primium from '../Components/LabTestComponents/Primium';
import LabTestSwiper from '../Components/LabTestComponents/LabTestSwiper';
import HealthCheckUp from '../Components/LabTestComponents/HealthCheckUp';

const LabTestScreen = () => {
  return (
    <LinearGradient 
        colors={['#e4f4f0','#89eaa9']} 
        style={styles.container}
        locations={[0.7,1.0]}
        >
      <HomeHeader />
      <ScrollView>
        <Primium />
        <GeneralTest />
        <LabTestSwiper />
        <HealthCheckUp />
      </ScrollView>
    </LinearGradient>
  )
}

export default LabTestScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  
})