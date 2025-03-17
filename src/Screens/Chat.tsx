import { StyleSheet, View, Button } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const Chat = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={['#e4f4f0', '#89eaa9']}
      style={styles.container}
      locations={[0.7, 1.0]}
    >
      <View>
        <Button
          title="Go to Location"
          onPress={() => navigation.navigate('LocationScreen')} 
        />
      </View>
    </LinearGradient>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});