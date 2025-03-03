import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const data=[
    {
        id:1,
        title:'Bone',
        backgroundColor:'#edbfae',
        color:'white'
    },
    {
        id:1,
        title:'Bone',
        backgroundColor:'#edbfae',
        color:'white'
    },
    {
        id:1,
        title:'Bone',
        backgroundColor:'#edbfae',
        color:'white'
    },
    {
        id:1,
        title:'Bone',
        backgroundColor:'#edbfae',
        color:'white'
    },

]


const HealthCheckUp = () => {
  return (
    <View style={styles.offerContainer}>
        <Text style={{fontSize:20,color:'#03401f',fontWeight:700,}}>Popular Health Checkup</Text>
        <Text style={{flexDirection:'row',}}>
        {
            data.map(eachItem=>(
                <View style={{backgroundColor:'#edbfae',height:170,width:110,borderRadius:15}}>
                    <Text style={{color:'white'}}>{eachItem.title}</Text>
                </View>
            ))
        }
        </Text>
    </View>
  )
}

export default HealthCheckUp

const styles = StyleSheet.create({
    offerContainer:{
        backgroundColor:'#d2ede1',
        height:'auto',
        marginHorizontal:20,
        borderRadius:10,
        marginTop:20,
        padding:20,
      },    

})