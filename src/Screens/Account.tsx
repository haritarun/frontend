import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Profile from '../Components/AccountComponents/Profile'
import AccountOrder from '../Components/AccountComponents/AccountOrder'
import Premium from '../Components/LabTestComponents/Primium'
import AccountChat from '../Components/AccountComponents/AccountChat'
import HealthPlan from '../Components/AccountComponents/HealthPlan'
import LabReports from '../Components/AccountComponents/LabReports'
import InsurencePolicy from '../Components/AccountComponents/InsurencePolicy'
import Help from '../Components/AccountComponents/Help'
import FAQ from '../Components/AccountComponents/FAQ'
import Aboutus from '../Components/AccountComponents/Aboutus'
import AccountOurServices from '../Components/AccountComponents/AccountOurServices'
import Folled from '../Components/Folled'

const Account = () => {
  return (
    <LinearGradient 
      colors={['#e4f4f0','#89eaa9']} 
      style={styles.container}
      locations={[0.7,1.0]}
    > 
      <Profile />
      <ScrollView >
      <Premium />
        <AccountOrder />
        <AccountChat />
        <HealthPlan />
        <LabReports />
        <InsurencePolicy />
        <View style={{marginTop:20,marginLeft:30,}}>
          <Text style={{fontSize:25,fontWeight:700,color:'#184f06'}}>Support & More Info</Text>
        </View>
        <Help />
        <FAQ />
        <Aboutus />
        <AccountOurServices />
        <Folled />
      </ScrollView>
    </LinearGradient>
  )
}

export default Account

const styles = StyleSheet.create({
  container:{
  flex:1,
},
})