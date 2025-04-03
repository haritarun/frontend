import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CheckoutScreen = ({ navigation, route }) => {
  const { cartItems } = route.params;
  
  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 4.99; // Example flat rate
  const tax = subtotal * 0.08; // Example 8% tax
  const total = subtotal + shipping + tax;

  const [deliveryAddress, setDeliveryAddress] = useState("123 Main St, New York, NY");
  const [paymentMethod, setPaymentMethod] = useState("card_visa");
  const [promoCode, setPromoCode] = useState("");

  const handlePlaceOrder = () => {
    navigation.navigate('OrderConfirmation', { 
      orderNumber: `#${Math.floor(Math.random() * 1000000)}`,
      estimatedDelivery: "June 15, 2023",
      total: total.toFixed(2)
    });
  };

  const applyPromoCode = () => {
    alert(`Promo code "${promoCode}" applied!`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.container}>
        {/* Order Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Order Summary</Text>
          {cartItems.map(item => (
            <View key={item.id} style={styles.itemRow}>
              <Image 
                source={{ uri: item.image || 'https://via.placeholder.com/60' }} 
                style={styles.itemImage}
              />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.title}</Text>
                <Text style={styles.itemQuantity}>Qty: {item.quantity}</Text>
              </View>
              <Text style={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</Text>
            </View>
          ))}
          
          <View style={styles.divider} />
          
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Subtotal</Text>
            <Text style={styles.totalValue}>${subtotal.toFixed(2)}</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Shipping</Text>
            <Text style={styles.totalValue}>${shipping.toFixed(2)}</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Tax</Text>
            <Text style={styles.totalValue}>${tax.toFixed(2)}</Text>
          </View>
          
          <View style={styles.grandTotal}>
            <Text style={styles.grandTotalText}>Total</Text>
            <Text style={styles.grandTotalText}>${total.toFixed(2)}</Text>
          </View>
        </View>

        {/* Delivery Information */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleWithIcon}>
              <Ionicons name="location-outline" size={20} color="#0066cc" style={styles.sectionIcon} />
              <Text style={styles.sectionTitle}>Delivery</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('EditAddress')}>
              <Text style={styles.changeText}>Change</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.deliveryText}>{deliveryAddress}</Text>
          <Text style={styles.deliveryEstimate}>Estimated delivery: June 15, 2023</Text>
        </View>

        {/* Payment Method */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleWithIcon}>
              <Ionicons name="card-outline" size={20} color="#0066cc" style={styles.sectionIcon} />
              <Text style={styles.sectionTitle}>Payment</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('PaymentMethods')}>
              <Text style={styles.changeText}>Change</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.paymentMethod}>
            <Icon name="creditcard" size={20} color="#424242" />
            <Text style={styles.paymentText}>Visa ending in 4242</Text>
          </View>
        </View>

        {/* Promo Code */}
        <View style={styles.section}>
          <View style={styles.sectionTitleWithIcon}>
            <Ionicons name="pricetag-outline" size={20} color="#0066cc" style={styles.sectionIcon} />
            <Text style={styles.sectionTitle}>Promo Code</Text>
          </View>
          <View style={styles.promoContainer}>
            <TextInput 
              placeholder="Enter promo code"
              style={styles.promoInput}
              value={promoCode}
              onChangeText={setPromoCode}
              placeholderTextColor="#999"
            />
            <TouchableOpacity 
              style={styles.promoButton}
              onPress={applyPromoCode}
            >
              <Text style={styles.promoButtonText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Place Order Button */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.placeOrderButton}
          onPress={handlePlaceOrder}
        >
          <Text style={styles.placeOrderText}>Confirm & Pay ${total.toFixed(2)}</Text>
          <Ionicons name="arrow-forward" size={20} color="white" style={styles.placeOrderIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    backgroundColor: 'white',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  headerRight: {
    width: 24,
  },
  container: {
    flex: 1,
    padding: 15,
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  sectionTitleWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionIcon: {
    marginRight: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  changeText: {
    color: '#0066cc',
    fontSize: 14,
    fontWeight: '500',
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  itemQuantity: {
    fontSize: 13,
    color: '#666',
  },
  itemPrice: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },
  divider: {
    borderBottomColor: '#f0f0f0',
    borderBottomWidth: 1,
    marginVertical: 15,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  totalLabel: {
    fontSize: 15,
    color: '#666',
  },
  totalValue: {
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
  },
  grandTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  grandTotalText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#333',
  },
  deliveryText: {
    fontSize: 15,
    color: '#444',
    marginBottom: 5,
    lineHeight: 22,
  },
  deliveryEstimate: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  paymentText: {
    fontSize: 15,
    color: '#444',
    marginLeft: 10,
  },
  promoContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  promoInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 12,
    marginRight: 10,
    fontSize: 15,
    backgroundColor: '#f9f9f9',
  },
  promoButton: {
    backgroundColor: '#d2cece',
    borderRadius: 8,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  promoButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 15,
  },
  footer: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#eaeaea',
    backgroundColor: 'white',
  },
  placeOrderButton: {
    backgroundColor: '#494e4e',
    borderRadius: 10,
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    shadowColor: '#0066cc',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  placeOrderText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  placeOrderIcon: {
    marginLeft: 10,
  },
});

export default CheckoutScreen;