import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'


const Chat = () => {
  return (
    <LinearGradient 
        colors={['#e4f4f0','#89eaa9']} 
        style={styles.container}
        locations={[0.7,1.0]}
        >
          
      </LinearGradient>
  )
}

export default Chat

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
})