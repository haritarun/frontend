import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView } from 'react-native'
import React,{useState,useEffect,useLayoutEffect} from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Search from '../Components/Search';
import axios from 'axios';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const recommendedProducts = [
  {
    id: 1,
    imageUrl: 'https://img.freepik.com/free-photo/medicine-capsules-global-health-with-geometric-pattern-digital-remix_53876-126742.jpg',
    name: 'Paracetamol 500mg',
    price: '$5.00',
    rating: 4.8,
    reviews: 120,
    type: 'Tablet',
  },
  {
    id: 2,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdN9m9qCC5sIvF8AB2cnAODbqNconc1J2ItQ&s',
    name: 'Ibuprofen 400mg',
    price: '$6.50',
    rating: 4.5,
    reviews: 95,
    type: 'Tablet',
  },
  {
    id: 3,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdN9m9qCC5sIvF8AB2cnAODbqNconc1J2ItQ&s',
    name: 'Antifungal Soap',
    price: '$3.50',
    rating: 4.3,
    reviews: 80,
    type: 'Soap',
  },
  {
    id: 4,
    imageUrl: 'https://m.economictimes.com/thumb/msid-55385973,width-1200,height-1200,resizemode-4,imgsize-46934/how-to-cut-your-medicine-bills.jpg',
    name: 'Aspirin 325mg',
    price: '$4.00',
    rating: 4.7,
    reviews: 110,
    type: 'Tablet',
  },
];

const CartScreen = ({route}) => {
    const navigation = useNavigation()
    const previousScreen = route.params?.previousScreen || 'Home';
    const [cartList,setCartList]=useState([])
    const [filterData,setFilterData] = useState([])

    useEffect(()=>{
      fetchedList()
    })

    useLayoutEffect(()=>{
        navigation.getParent()?.setOptions({
          tabBarStyle:{display:'none'}
        })
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

    const getNavigate=()=>{
        navigation.navigate('Product')
    }
  return (
    <View style={styles.headerContainer}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <View style={{height:30,width:30,borderRadius:50,borderWidth:1,justifyContent:'center',alignItems:'center'}}>
                    <Icon 
                        name="arrowleft" 
                        size={20} 
                        color={'gray'} 
                        style={{ fontWeight: 700 }} 
                        onPress={() => navigation.navigate(previousScreen)} 
                    />
                </View>
                <Text style={styles.title}>Cart</Text>
                <Text style={{color:'#ed9a3a',fontWeight:'bold'}} onPress={()=>{getNavigate()}}>Add Items</Text>
          </View>
            <Search />
          <ScrollView>
          <ScrollView 
            
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
          >
      {cartList.length === 0 ? (
        <View style={styles.emptyContainer}>
          <FontAwesome name="shopping-basket" size={50} color="#ccc" style={{marginBottom:10}}/>
          <Text style={styles.emptyText}>Your Cart is Empty</Text>
        </View>
      ) : (
        <View style={styles.gridContainer}>
          {cartList.map((item, index) => (
            <View key={index} style={styles.cardContainer}>
              <TouchableOpacity 
                style={styles.card}
                onPress={() => {
                  navigation.navigate('Doctors', {
                    screen: 'ImageScreen',
                    params: { previousScreen: 'CartScreen' }
                  });
                }}
              >
                <Image 
                  source={{ uri: item.imageurl }} 
                  style={styles.cardImage}
                  resizeMode="cover"
                />
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle} numberOfLines={2}>
                    {item.title}
                  </Text>
                  <Text style={styles.cardPrice}>
                    ${item.price.toFixed(2)}
                  </Text>
                  
                  <View style={styles.bottomRow}>
                    <View style={styles.ratingContainer}>
                      <Icon name="star" size={14} color="#FFD700" />
                      <Text style={styles.ratingText}>{item.rating}</Text>
                    </View>
                    
                    {cartList.some(eachItem => eachItem.title === item.title) && (
                      <View style={styles.quantityControls}>
                        <TouchableOpacity 
                          style={styles.quantityButton}
                          onPress={() => getDecrement(item.title)}
                        >
                          <Entypo name="minus" size={14} color="white" />
                        </TouchableOpacity>
                        
                        <Text style={styles.quantityText}>
                          {cartList.find(eachItem => eachItem.title === item.title)?.quantity || 0}
                        </Text>
                        
                        <TouchableOpacity 
                          style={styles.quantityButton}
                          onPress={() => getIncrement(item.title)}
                        >
                          <Entypo name="plus" size={14} color="white" />
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}
          </ScrollView>
          <View style={styles.sectionContainer}>
                
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                  <Text style={styles.sectionTitle}>Recommnded Items</Text>
                  <TouchableOpacity onPress={()=>{navigation.navigate('Doctors',{screen:'EveryDayEssentialsAll'})}}>
                  <Text style={{fontSize:15,fontWeight:700,color:'#9c9898'}}>View All</Text>
                  </TouchableOpacity>
                </View>
          
                
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={styles.scrollView}
                  contentContainerStyle={styles.scrollContent}
                >
                  {recommendedProducts.map((product) => (
                    <View key={product.id} style={styles.productCard}>
                      
                      <Image
                        source={{ uri: product.imageUrl }}
                        style={styles.productImage}
                        resizeMode="cover"
                      />
          
                      
                      <View style={styles.productInfo}>
                        <Text style={styles.productName}>{product.name}</Text>
                        <Text style={styles.productType}>{product.type}</Text>
                        <Text style={styles.productPrice}>{product.price}</Text>
          
                        
                        <View style={styles.ratingContainer}>
                          <Icon name="star" size={16} color="#FFD700" />
                          <Text style={styles.ratingText}>
                            {product.rating} ({product.reviews} Reviews)
                          </Text>
                        </View>
                      </View>
          
                      
                      <TouchableOpacity style={styles.addButton}>
                        <Text style={styles.addButtonText}>Add to Cart</Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                </ScrollView>

          </View>

            </ScrollView>    
          <TouchableOpacity onPress={()=>{navigation.navigate('Checkout')}} style={{backgroundColor:'#242222',height:60,justifyContent:'center',alignItems:'center',borderRadius:10,marginBottom:20}}>
            <Text style={{color:'white',fontSize:20,fontWeight:700}}>Checkout</Text>
          </TouchableOpacity>
        </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'gray',
      },
      headerContainer: {
        width: 'auto',
        backgroundColor: '#ffffff',
        height:'100%',
        flexDirection: 'column',
        paddingTop: 20,
        paddingLeft:10,
        paddingRight:10
      },
      scrollContainer: {
        paddingHorizontal: 8,
        paddingTop: 16,
        
      },
      emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 120,
        marginBottom: 120,
      },
      emptyText: {
        fontSize: 16,
        color: '#666',
      },
      gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',

      },
      cardContainer: {
        width: '48%',
        marginBottom: 16,
      },
      card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        overflow: 'hidden',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        height: 260,
      },
      cardImage: {
        width: '100%',
        height: 140,
      },
      cardContent: {
        padding: 12,
        flex: 1,
      },
      cardTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        marginBottom: 6,
        height: 36, 
      },
      cardPrice: {
        fontSize: 15,
        color: '#007AFF',
        fontWeight: 'bold',
        marginBottom: 10,
      },
      ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      ratingText: {
        marginLeft: 4,
        color: '#666',
        fontSize: 13,
      },
      bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 'auto',
      },
      quantityControls: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      quantityButton: {
        backgroundColor: '#cfcfc8',
        borderRadius: 50,
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
      sectionContainer: {
        paddingVertical: 20,
        marginBottom:0,
      },
      sectionTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: '#1A1A1A',
        marginBottom:5
      },
      scrollView: {
        flexGrow: 0,
      },
      scrollContent: {
        paddingRight: 15, 
      },
      productCard: {
        width: 160,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        marginRight: 20,
        padding: 10,
        
      },
      productImage: {
        width: '100%',
        height: 120,
        borderRadius: 10,
      },
      productInfo: {
        marginTop: 10,
      },
      productName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1A1A1A',
      },
      productType: {
        fontSize: 12,
        color: '#6B7280',
        marginTop: 2,
      },
      productPrice: {
        fontSize: 14,
        fontWeight: '600',
        color: '#007BFF',
        marginTop: 5,
      },
      ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
      },
      ratingText: {
        fontSize: 12,
        color: '#6B7280',
        marginLeft: 5,
      },
      addButton: {
        backgroundColor: '#757373',
        paddingVertical: 8,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
      },
      addButtonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
      },
})