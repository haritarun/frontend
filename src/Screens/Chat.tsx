import { 
  StyleSheet, 
  View, 
  TextInput, 
  KeyboardAvoidingView, 
  Platform, 
  TouchableOpacity,
  Text,
  Alert,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import React, { useState, useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Chat = () => {
  const navigation = useNavigation();
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  // Hide tab bar when screen is focused
  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: { display: "none" }
    });
    
    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: { display: "flex" }
      });
    };
  }, [navigation]);

  const handleSubmit = async () => {
    if (!prompt.trim()) {
      Alert.alert("Error", "Please enter a prompt");
      return;
    }

    setLoading(true);
    setResponse('');

    try {
      // Option 1: Backend API call (recommended)
      const result = await axios.post('http://localhost:3000/ollama', {
        prompt: prompt
      });
      setResponse(result.data.response);

      // Option 2: For Android with Termux (uncomment if needed)
      // if (Platform.OS === 'android') {
      //   const { exec } = require('react-native-shell');
      //   exec(`ollama run mistral "${prompt}"`, (error, output) => {
      //     setResponse(output || error.toString());
      //   });
      // } else {
      //   Alert.alert("iOS requires backend server");
      // }
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {response ? (
          <Text style={styles.response}>{response}</Text>
        ) : loading ? (
          <ActivityIndicator size="large" style={styles.loader} />
        ) : null}

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Ask me anything..."
            value={prompt}
            onChangeText={setPrompt}
            multiline
            editable={!loading}
          />
          <TouchableOpacity
            style={[styles.button, loading && styles.disabledButton]}
            onPress={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Send</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
  },
  response: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  loader: {
    marginVertical: 32,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    minHeight: 100,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  disabledButton: {
    opacity: 0.6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default Chat;