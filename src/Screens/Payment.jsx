import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
import axios from 'axios';

const Payment = () => {
  const createOrder = async () => {
    try {
      
      const response = await axios.post('http://localhost:3000/create-order', {
        amount: 5000, 
        currency: 'INR'
      });
      
      return response.data;
    } catch (error) {
      console.error('Order creation failed:', error);
      throw error;
    }
  };

  const handlePayment = async () => {
    try {
      // First create an order on your server
      const order = await createOrder();
      
      const options = {
        description: 'Payment for services',
        image: 'https://your-logo-url.png',
        currency: 'INR',
        key: 'rzp_test_c6OOqIRzJ4dxn4',
        amount: order.amount.toString(),
        name: 'Your App Name',
        order_id: order.id, 
        prefill: {
          email: 'user@example.com',
          contact: '9191919191',
          name: 'User Name'
        },
        theme: {color: '#53a20e'}
      };

      RazorpayCheckout.open(options)
        .then(async (data) => {
          // Verify payment on your backend
          await axios.post('http://localhost:3000/verify-payment', {
            orderId: order.id,
            paymentId: data.razorpay_payment_id,
            signature: data.razorpay_signature
          });
          
          Alert.alert('Success', `Payment ID: ${data.razorpay_payment_id}`);
        })
        .catch((error) => {
            <Text></Text>
        });
    } catch (error) {
      Alert.alert('Error', 'Failed to initiate payment');
    }
  };

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Make Payment</Text>
      <Text style={styles.amount}>Amount: ₹50.00</Text>
      <Button 
        title="Pay with Razorpay" 
        onPress={handlePayment} 
        color="#53a20e"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  amount: {
    fontSize: 18,
    marginBottom: 30
  }
});

export default Payment;