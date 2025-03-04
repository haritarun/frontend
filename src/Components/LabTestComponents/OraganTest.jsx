import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'


const data =[
    {
        id:1,
        title:'Lungs',
        imageUrl:'https://img.freepik.com/free-vector/lung-human-anatomy-biology-organ-body-system-health-care-medical-hand-drawn-cartoon-art-illustration_56104-958.jpg'
    },
    {
        id:1,
        title:'Lungs',
        imageUrl:'https://img.freepik.com/free-vector/lung-human-anatomy-biology-organ-body-system-health-care-medical-hand-drawn-cartoon-art-illustration_56104-958.jpg'
    },
    {
        id:1,
        title:'Lungs',
        imageUrl:'https://img.freepik.com/free-vector/lung-human-anatomy-biology-organ-body-system-health-care-medical-hand-drawn-cartoon-art-illustration_56104-958.jpg'
    },
    {
        id:1,
        title:'Lungs',
        imageUrl:'https://img.freepik.com/free-vector/lung-human-anatomy-biology-organ-body-system-health-care-medical-hand-drawn-cartoon-art-illustration_56104-958.jpg'
    },
    {
        id:1,
        title:'Lungs',
        imageUrl:'https://img.freepik.com/free-vector/lung-human-anatomy-biology-organ-body-system-health-care-medical-hand-drawn-cartoon-art-illustration_56104-958.jpg'
    },
    {
        id:1,
        title:'Lungs',
        imageUrl:'https://img.freepik.com/free-vector/lung-human-anatomy-biology-organ-body-system-health-care-medical-hand-drawn-cartoon-art-illustration_56104-958.jpg'
    },
    {
        id:1,
        title:'Lungs',
        imageUrl:'https://img.freepik.com/free-vector/lung-human-anatomy-biology-organ-body-system-health-care-medical-hand-drawn-cartoon-art-illustration_56104-958.jpg'
    },
    

]

const OraganTest = () => {
  return (
    <View style={styles.offerContainer}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{color:'#456b52',fontSize:18,fontWeight:700}}>Tests For Organs</Text>
            <Text style={{color:'#456b52',fontSize:15,fontWeight:600}}>View All</Text>
        </View>
        <View style={{flexWrap:'wrap',justifyContent:'space-between',flexDirection:'row',marginBottom:20}}>
            {
                data.map(eachItem=>(
                    <View style={{flexDirection:'column',alignItems:'center'}}>
                        <Image source={{uri:eachItem.imageUrl,height:100,width:100}} style={{marginTop:10,borderRadius:20,}} />
                        <Text style={{marginTop:5,fontSize:14,color:'#456b52'}}>{eachItem.title}</Text>
                    </View>
                ))
            }
        </View>

    </View>
  )
}

export default OraganTest

const styles = StyleSheet.create({
    offerContainer:{
        backgroundColor:'#d2e0f6',
        height:'auto',
        marginHorizontal:20,
        borderRadius:10,
        marginTop:20,
        paddingHorizontal:17,
        paddingTop:20, 
    },
})