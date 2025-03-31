import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState,useEffect } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios'

const Checkout = () => {
  const navigation = useNavigation();
  const [cartList, setCartList] = useState([]);

  useEffect(()=>{
        fetchedList()
      })

    const fetchedList=async()=>{
            try{
                const response=await axios.get('http://localhost:3000/getDetailes')
                
                setCartList(response.data) 
      
            }catch(e){
                console.log('something went wrong',e)
            }
    }

    const getIncrement=async(title) => {
                    try{
                        const response=await axios.put('http://localhost:3000/getIncrement',{
                            title
                        })
                        if (response.status===200){
                            fetchedList()
                        }
                    }catch(e){
                        console.log('something went wrong',e)
                    }
    }

    const getDecrement =async(title)=>{
                
            console.log('enter into getIncrement')
            try{
                const response=await axios.put('http://localhost:3000/getDecrement',{
                    title
                })
                if (response.status==200){
                    
                    fetchedList();
                }
        
        
            }catch(e){
                console.log('something went wrong',e)
            }
    }

    const removeItem = async (id) => {
        console.log(id)
        try{
            const response = await axios.delete(`http://localhost:3000/delete?id=${id}`)
            if (response.status===200){
                fetchedList()
            }

        }catch(e){
            console.log("something went wrong",e)
        }
    };

    const getTotal = () => {
        return cartList.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    };

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrowleft" size={20} color={'gray'} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Check Out</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.addItemsText}>Add Items</Text>
        </TouchableOpacity>
      </View>

      
      <ScrollView style={styles.itemsContainer}>
        {cartList.length === 0 ? (
          <View style={styles.emptyCart}>
            <FontAwesome name="shopping-basket" size={50} color="#ccc" />
            <Text style={styles.emptyText}>Your cart is empty</Text>
          </View>
        ) : (
          cartList.map((item) => (
            <View key={item.id} style={styles.itemCard}>
              <TouchableOpacity style={{ backgroundColor:'#f7f7f7',height:170,width:150,justifyContent:'center',alignItems:'center',borderRadius:10 }} onPress={() => navigation.navigate('ProductDetails', { item })}>
                <Image source={{ uri: item.imageurl }} style={styles.itemImage} />
              </TouchableOpacity>
              
              <View style={styles.itemDetails}>
                <Text style={styles.itemTitle} numberOfLines={2}>{item.title}</Text>
                <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
                <Text style={styles.itemQuantity}><Icon name="staro" size={23} color={'#726e6e'} style={{fontWeight:700}}/> {item.rating}</Text>
                {cartList.some(eachItem => eachItem.title === item.title) && (
                      <View style={styles.quantityControls}>
                        <TouchableOpacity 
                          style={styles.quantityButton}
                          onPress={() => getDecrement(item.title)}
                        >
                          <Entypo name="minus" size={14} color="" />
                        </TouchableOpacity>
                        
                        <Text style={styles.quantityText}>
                          {cartList.find(eachItem => eachItem.title === item.title)?.quantity || 0}
                        </Text>
                        
                        <TouchableOpacity  
                          style={styles.quantityButton}
                          onPress={() => getIncrement(item.title)}
                        >
                          <Entypo name="plus" size={14} color="" />
                        </TouchableOpacity>
                      </View>
                    )}
              </View>
              
              <TouchableOpacity 
                style={styles.removeButton}
                onPress={() => removeItem(item._id)}
              >
                <Entypo name="cross" size={20} color="#9f9a9a" />
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>

      
      {cartList.length > 0 && (
        <View style={styles.summaryContainer}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>{getTotal().toFixed(2)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Shipping</Text>
            <Text style={styles.summaryValue}>5.99</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Tax</Text>
            <Text style={styles.summaryValue}>{(getTotal() * 0.08).toFixed(2)}</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>{(getTotal() + 5.99 + (getTotal() * 0.08)).toFixed(2)}</Text>
          </View>
          
          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutButtonText}>Proceed to Payment</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  addItemsText: {
    color: '#ed9a3a',
    fontWeight: 'bold',
  },
  itemsContainer: {
    flex: 1,
    padding: 15,
  },
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  emptyText: {
    marginTop: 15,
    fontSize: 16,
    color: '#666',
  },
  itemCard: {
    flexDirection: 'row',
    borderRadius: 10,
    marginBottom: 15,
    
    justifyContent:'space-between'
  },
  itemImage: {
    width: 90,
    height: 110,
    borderRadius: 8,
    
  },
  itemDetails: {
    flex: 1,
    justifyContent:'space-between',
    paddingBottom:30,
    marginLeft:20
    
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 15,
    color: '#007AFF',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemQuantity: {
    fontSize: 18,
    color: '#666',
    fontWeight:700
  },
  removeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
  },
  summaryContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  summaryLabel: {
    fontSize: 15,
    color: '#666',
  },
  summaryValue: {
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  totalLabel: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333',
  },
  totalValue: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  checkoutButton: {
    backgroundColor: '#1e1b1b',
    borderRadius: 8,
    padding: 15,
    marginTop: 20,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    borderColor: '#cfcfc8',
    borderWidth: 1,
    borderRadius:1,
    width: 26,
    height: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    marginHorizontal: 2 ,
    fontSize: 18,
    fontWeight: '600',
    minWidth: 20,
    textAlign: 'center',
  },
});

export default Checkout;