import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState, useEffect,useLayoutEffect } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
    const navigation = useNavigation();
    const [cartList, setCartList] = useState([]);
    const [orderStatus, setOrderStatus] = useState('Processing');
    const [estimatedDelivery, setEstimatedDelivery] = useState('Wed, Jun 15');
    const [deliveryAddress, setDeliveryAddress] = useState('123 Main St, Apt 4B, New York, NY 10001');
    
    const [recommendedItems] = useState([
        { id: '1', title: 'Organic Shampoo', price: 12.99, imageUrl: 'https://m.media-amazon.com/images/I/71GhsI7TeZL._AC_UF1000,1000_QL80_.jpg' },
        { id: '2', title: 'Electric Toothbrush', price: 39.99, imageUrl: 'https://tinybo.in/cdn/shop/files/dual-side-sketch-pen-set-1.png?v=1734329939' },
        { id: '3', title: 'Skincare Set', price: 29.99, imageUrl: 'https://nestasia.in/cdn/shop/products/DSCF0620.jpg?v=1678173254&width=600' },
        { id: '4', title: 'Hair Dryer', price: 45.99, imageUrl: 'https://m.media-amazon.com/images/I/81fztNdEOcL.jpg' },
    ]);

    useLayoutEffect(()=>{
        navigation.getParent()?.setOptions({
            tabBarStyle:{display:'none'}
        })
    })

    useEffect(() => {
        fetchedList();
    }, []);

    const fetchedList = async () => {
        try {
            const response = await axios.get('http://localhost:3000/getOrderDetailes');
            if (response.status === 200) {
                setCartList(response.data.data);
            }
        } catch (e) {
            console.log("Error fetching cart items", e);
        }
    };

    const calculateTotal = () => {
        return cartList.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0).toFixed(2);
    };



    return (
        <View style={styles.container}>
           
            <View style={styles.header}>
                <View style={{flexDirection:'row'}}>
                    <Icon 
                        name="arrowleft" 
                        size={22} 
                        color={'gray'} 
                        style={{ fontWeight: '700' }} 
                        onPress={() => navigation.navigate('Account')} 
                    />
                    <Text style={styles.title}>Orders</Text>
                </View>
            </View>

            {/* Order Items */}
            <ScrollView style={styles.content}>
                {cartList.length === 0 ? (
                    <View style={styles.emptyCart}>
                        <FontAwesome name="shopping-basket" size={50} color="#ccc" />
                        <Text style={styles.emptyText}>Your cart is empty</Text>
                        <TouchableOpacity 
                            style={styles.shopButton}
                            onPress={() => navigation.navigate('Product')}
                        >
                            <Text style={styles.shopButtonText}>Browse Products</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <>
                        {/* Order Status Card */}
                        <View style={styles.statusCard}>
                            <View style={styles.statusHeader}>
                                <Text style={styles.statusTitle}>Order Status</Text>
                                <View style={[styles.statusBadge, 
                                    {backgroundColor: orderStatus === 'Delivered' ? '#4CAF50' : '#FFA000'}]}>
                                    <Text style={styles.statusBadgeText}>{orderStatus}</Text>
                                </View>
                            </View>
                            
                            <View style={styles.statusTimeline}>
                                <View style={styles.timelineStep}>
                                    <View style={[styles.timelineDot, 
                                        {backgroundColor: orderStatus === 'Processing' ? '#FFA000' : '#4CAF50'}]} />
                                    <Text style={styles.timelineText}>Order Placed</Text>
                                </View>
                                
                                <View style={styles.timelineStep}>
                                    <View style={[styles.timelineDot, 
                                        {backgroundColor: orderStatus === 'Shipped' || orderStatus === 'Delivered' ? '#4CAF50' : '#E0E0E0'}]} />
                                    <Text style={styles.timelineText}>Shipped</Text>
                                </View>
                                
                                <View style={styles.timelineStep}>
                                    <View style={[styles.timelineDot, 
                                        {backgroundColor: orderStatus === 'Delivered' ? '#4CAF50' : '#E0E0E0'}]} />
                                    <Text style={styles.timelineText}>Delivered</Text>
                                </View>
                            </View>
                            
                            <View style={styles.deliveryInfo}>
                                <View style={styles.infoRow}>
                                    <Icon name="clockcircleo" size={16} color="#616161" />
                                    <Text style={styles.infoText}>Estimated Delivery: {estimatedDelivery}</Text>
                                </View>
                                <View style={styles.infoRow}>
                                    <Icon name="enviromento" size={16} color="#616161" />
                                    <Text style={styles.infoText}>Deliver to: {deliveryAddress}</Text>
                                </View>
                            </View>
                        </View>

                        {/* Order Summary */}
                        <Text style={styles.sectionTitle}>Order Summary</Text>
                        {cartList.map((item) => (
                            <View key={item._id} style={styles.orderItem}>
                                <Image source={{ uri: item.imageurl }} style={styles.itemImage} />
                                <View style={styles.itemInfo}>
                                    <Text style={styles.itemTitle} numberOfLines={2}>{item.title}</Text>
                                    <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
                                    <Text style={styles.itemQuantity}>Qty: {item.quantity || 1}</Text>
                                </View>
                            </View>
                        ))}

                        {/* Order Total */}
                        <View style={styles.totalContainer}>
                            <Text style={styles.totalText}>Total</Text>
                            <Text style={styles.totalAmount}>${calculateTotal()}</Text>
                        </View>

                        {/* Payment and Delivery Options */}
                        <View style={styles.optionsCard}>
                            <Text style={styles.optionsTitle}>Order Options</Text>
                            
                            <TouchableOpacity style={styles.optionButton}>
                                <Text style={styles.optionButtonText}>Change Payment Method</Text>
                                <Icon name="right" size={16} color="#424242" />
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={styles.optionButton}>
                                <Text style={styles.optionButtonText}>Change Delivery Address</Text>
                                <Icon name="right" size={16} color="#424242" />
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={styles.optionButton}>
                                <Text style={styles.optionButtonText}>Contact Seller</Text>
                                <Icon name="right" size={16} color="#424242" />
                            </TouchableOpacity>
                        </View>

                        {/* Checkout Button */}
                        <TouchableOpacity style={styles.checkoutButton} onPress={()=>{navigation.navigate('Doctors',{screen:'CheckoutScreen',params:{cartItems:cartList}})}}>
                            <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
                        </TouchableOpacity>

                        {/* Recommendations */}
                        <Text style={styles.sectionTitle}>You Might Also Like</Text>
                        <ScrollView 
                            horizontal 
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.recommendationsContainer}
                        >
                            {recommendedItems.map((item) => (
                                <TouchableOpacity 
                                    key={item.id} 
                                    style={styles.recommendedItem}
                                    onPress={() => navigation.navigate('ProductDetails', { item })}
                                >
                                    <Image source={{ uri: item.imageUrl }} style={styles.recommendedImage} />
                                    <Text style={styles.recommendedTitle} numberOfLines={1}>{item.title}</Text>
                                    <Text style={styles.recommendedPrice}>${item.price.toFixed(2)}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </>
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontWeight: '700',
        fontSize: 20,
        paddingLeft: 10,
        color: '#424242'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        paddingTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
    },
    emptyCart: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },
    emptyText: {
        marginTop: 15,
        fontSize: 18,
        color: '#666',
    },
    shopButton: {
        marginTop: 20,
        backgroundColor: '#424242', // Dark gray button
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
    },
    shopButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 25,
        marginBottom: 15,
        color: '#424242',
    },
    statusCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    statusHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    statusTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#424242',
    },
    statusBadge: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 12,
    },
    statusBadgeText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 14,
    },
    statusTimeline: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    timelineStep: {
        alignItems: 'center',
        flex: 1,
    },
    timelineDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        marginBottom: 5,
    },
    timelineText: {
        fontSize: 12,
        color: '#616161',
        textAlign: 'center',
    },
    deliveryInfo: {
        marginTop: 10,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    infoText: {
        marginLeft: 8,
        fontSize: 14,
        color: '#616161',
    },
    orderItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f5f5f5',
        alignItems: 'center',
    },
    itemImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
        backgroundColor: '#f9f9f9',
    },
    itemInfo: {
        flex: 1,
        marginLeft: 15,
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#424242',
        marginBottom: 5,
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#424242', // Dark gray price
        marginBottom: 5,
    },
    itemQuantity: {
        fontSize: 14,
        color: '#888',
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingVertical: 15,
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    totalText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#424242',
    },
    totalAmount: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#424242', // Dark gray total amount
    },
    optionsCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    optionsTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#424242',
        marginBottom: 15,
    },
    optionButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f5f5f5',
    },
    optionButtonText: {
        fontSize: 14,
        color: '#424242',
    },
    checkoutButton: {
        backgroundColor: '#424242', // Dark gray button
        padding: 16,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 30,
    },
    checkoutButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    recommendationsContainer: {
        paddingBottom: 20,
    },
    recommendedItem: {
        width: 150,
        marginRight: 15,
    },
    recommendedImage: {
        width: 150,
        height: 150,
        borderRadius: 10,
        backgroundColor: '#f9f9f9',
    },
    recommendedTitle: {
        fontSize: 14,
        fontWeight: '600',
        marginTop: 8,
        color: '#424242',
    },
    recommendedPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#424242', // Dark gray price
        marginTop: 4,
    },
});

export default CartScreen;